import { Request, Response } from 'express';
import { Login } from '../../../../boundedContext/personalTrainer/application/login';
import { PersonalTrainerRepositoryTypeORM } from '../../../../boundedContext/personalTrainer/infrastructure/persistence/personalTrainerRepositoryTypeORM';
import { EncryptionRepositoryBcrypt } from '../../../../boundedContext/personalTrainer/infrastructure/encryption/encryptionRepositoryBcrypt';
import { AuthorizationRepositoryJwt } from '../../../../boundedContext/personalTrainer/infrastructure/authorization/authorizationRepositoryJwt';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { Authorization } from '../../../../boundedContext/personalTrainer/domain/aggregates/authorization';
import { PersonalTrainerEmail } from '../../../../boundedContext/personalTrainer/domain/valueObjects/personalTrainerEmail';
import { PersonalTrainerPassword } from '../../../../boundedContext/personalTrainer/domain/valueObjects/personalTrainerPassword';

export class LoginController {

  private personalTrainerRepositoryImpl: PersonalTrainerRepositoryTypeORM;
  private encryptionRepositoryImpl: EncryptionRepositoryBcrypt;
  private authorizationRepositoryImpl: AuthorizationRepositoryJwt

  private login: Login;

  constructor() {
    this.personalTrainerRepositoryImpl = new PersonalTrainerRepositoryTypeORM();
    this.encryptionRepositoryImpl = new EncryptionRepositoryBcrypt();
    this.authorizationRepositoryImpl = new AuthorizationRepositoryJwt();

    this.login = new Login(
      this.personalTrainerRepositoryImpl,
      this.encryptionRepositoryImpl,
      this.authorizationRepositoryImpl
    );
  }

  public async run(req: Request, res: Response): Promise<void> {
    const authorization = new Authorization(
      new PersonalTrainerEmail(req.body.email),
      new PersonalTrainerPassword(req.body.password)
    );

    const token = await this.login.run(authorization);

    res.status(HTTP_STATUS.SUCCESS).send(token.toModel());
  }

}
