/* eslint-disable max-lines-per-function */
import { PersonalTrainerRepository } from '../domain/contracts/personalTrainerRepository';
import { Token } from '../domain/valueObjects/token';
import { Authorization } from '../domain/aggregates/authorization';

import { EncryptionRepository } from '../domain/contracts/encryptionRepository';
import { AuthorizationRepository } from '../domain/contracts/authorizationRepository';
import { PersonalTrainerPasswordNotValid } from '../domain/exceptions/personalTrainerPasswordNotValid';
import { PersonalTrainerNotFoundEmail } from '../domain/exceptions/personalTrainerNotFoundEmail';

export class Login {

  constructor(
    private personalTrainerRepository: PersonalTrainerRepository,
    private encryptionRepository: EncryptionRepository,
    private authorizationRepository: AuthorizationRepository
  ) {}

  public async run(authorization: Authorization): Promise<Token> {
    const personalTrainer = await this.personalTrainerRepository.searchByEmail(authorization.getValueEmail());
    if (!personalTrainer) {
      throw new PersonalTrainerNotFoundEmail(authorization.getValueEmail());
    }
    const succesPassword = await this.encryptionRepository.verify(
      authorization.getValuePassword(),
      personalTrainer.getValueHashedPassword()
    );
    if (!succesPassword) {
      throw new PersonalTrainerPasswordNotValid(authorization.getValuePassword());
    }
    const expirationTimeInSeconds = 60 * 60 * 24; // 1 day
    const token = await this.authorizationRepository.createToken(
      personalTrainer.getValueId(),
      process.env.PRIVATE_KEY!,
      expirationTimeInSeconds
    );

    return token;
  }

}
