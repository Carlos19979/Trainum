import { PersonalTrainerRepository } from '../domain/contracts/personalTrainerRepository';
import { EncryptionRepository } from '../domain/contracts/encryptionRepository';
import { PersonalTrainer } from '../domain/aggregates/personalTrainer';
import { PersonalTrainerHashedPassword } from '../domain/valueObjects/personalTrainerHashedPassword';
import { PersonalTrainerAlreadyExists } from '../domain/exceptions/personalTrainerrAlreadyExists';

export class Register {

  constructor(
    private personalTrainerRepository: PersonalTrainerRepository,
    private encryptionRepository: EncryptionRepository
  ) {}

  public async run(personalTrainer: PersonalTrainer): Promise<void> {
    const personalTrainerDB = await this.personalTrainerRepository.searchByEmail(personalTrainer.getValueEmail());
    if (personalTrainerDB) {
      throw new PersonalTrainerAlreadyExists(personalTrainer.getValueEmail());
    }
    const hash = await this.encryptionRepository.encrytp(personalTrainer.getValuePassword());
    personalTrainer.setHashedPassword(new PersonalTrainerHashedPassword(hash));
    await this.personalTrainerRepository.save(personalTrainer);
  }

}
