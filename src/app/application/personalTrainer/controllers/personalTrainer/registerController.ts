import { Request, Response } from 'express';
import { Register } from '../../../../boundedContext/personalTrainer/application/register';
import { PersonalTrainerEmail } from '../../../../boundedContext/personalTrainer/domain/valueObjects/personalTrainerEmail';
import { PersonalTrainerId } from '../../../../boundedContext/personalTrainer/domain/valueObjects/personalTrainerId';
import { PersonalTrainerPassword } from '../../../../boundedContext/personalTrainer/domain/valueObjects/personalTrainerPassword';
import { PersonalTrainerRepositoryTypeORM } from '../../../../boundedContext/personalTrainer/infrastructure/persistence/personalTrainerRepositoryTypeORM';
import { EncryptionRepositoryBcrypt } from '../../../../boundedContext/personalTrainer/infrastructure/encryption/encryptionRepositoryBcrypt';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { PersonalTrainer } from '../../../../boundedContext/personalTrainer/domain/aggregates/personalTrainer';
import { PersonalTrainerName } from '../../../../boundedContext/personalTrainer/domain/valueObjects/personalTrainerName';
import { PersonalTrainerSurname } from '../../../../boundedContext/personalTrainer/domain/valueObjects/personalTrainerSurname';

export class RegisterController {

  private personalTrainerRepositoryImpl: PersonalTrainerRepositoryTypeORM;
  private encryptionRepositoryImpl: EncryptionRepositoryBcrypt;

  private register: Register;

  constructor() {
    this.personalTrainerRepositoryImpl = new PersonalTrainerRepositoryTypeORM();
    this.encryptionRepositoryImpl = new EncryptionRepositoryBcrypt();

    this.register = new Register(
      this.personalTrainerRepositoryImpl,
      this.encryptionRepositoryImpl
    );
  }

  public async run(req: Request, res: Response): Promise<void> {
    const personalTrainer = new PersonalTrainer(
      new PersonalTrainerId(req.body.id),
      new PersonalTrainerEmail(req.body.email),
      new PersonalTrainerName(req.body.name),
      new PersonalTrainerSurname(req.body.surname),
      new PersonalTrainerPassword(req.body.password)
    );

    await this.register.run(personalTrainer);

    res.status(HTTP_STATUS.CREATED).send();
  }

}
