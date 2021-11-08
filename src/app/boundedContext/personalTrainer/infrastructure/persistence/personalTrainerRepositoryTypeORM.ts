/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EntityManager, getConnection } from 'typeorm';
import { PersonalTrainerEntity } from './typeORM/personalTrainerEntity';
import { PersonalTrainerRepository } from '../../domain/contracts/personalTrainerRepository';
import { PersonalTrainerModel } from '../../domain/models/personalTrainerModel';
import { PersonalTrainerId } from '../../domain/valueObjects/personalTrainerId';
import { PersonalTrainerName } from '../../domain/valueObjects/personalTrainerName';
import { PersonalTrainerEmail } from '../../domain/valueObjects/personalTrainerEmail';
import { PersonalTrainer } from '../../domain/aggregates/personalTrainer';
import { PersonalTrainerHashedPassword } from '../../domain/valueObjects/personalTrainerHashedPassword';
import { PersonalTrainerSurname } from '../../domain/valueObjects/personalTrainerSurname';

export class PersonalTrainerRepositoryTypeORM implements PersonalTrainerRepository {

  public async searchByEmail(email:string): Promise<PersonalTrainer | null> {
    const entityManager: EntityManager = getConnection('Trainum').manager;
    const firstItem = 0;
    const personalTrainerDB = await entityManager.findOne(PersonalTrainerEntity, { where: { email: email }});

    if (!personalTrainerDB) {
      return null;
    }

    return this.getPersonalTrainerByModel(personalTrainerDB)[firstItem];
  }

  public async save(personalTrainer: PersonalTrainer): Promise<void> {
    const entityManager: EntityManager = getConnection('Trainum').manager;
    await entityManager.save(PersonalTrainerEntity, personalTrainer.toModelDB());
  }

  private getPersonalTrainerByModel(...perosnalTrainerModel: PersonalTrainerModel[]): PersonalTrainer[] {
    return perosnalTrainerModel.map((personalTrainerDB: PersonalTrainerModel) => new PersonalTrainer(
      new PersonalTrainerId(personalTrainerDB.id),
      new PersonalTrainerEmail(personalTrainerDB.email),
      new PersonalTrainerName(personalTrainerDB.name),
      new PersonalTrainerSurname(personalTrainerDB.surname),
      undefined,
      new PersonalTrainerHashedPassword(personalTrainerDB.password!)
    ));
  }

}
