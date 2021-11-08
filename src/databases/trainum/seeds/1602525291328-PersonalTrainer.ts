import { MigrationInterface, QueryRunner } from 'typeorm';
import { PersonalTrainerEntity } from '../../../app/boundedContext/personalTrainer/infrastructure/persistence/typeORM/personalTrainerEntity';
export class PersonalTrainer1602525291328 implements MigrationInterface {

  // eslint-disable-next-line max-lines-per-function
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.createQueryBuilder()
      .insert()
      .into(PersonalTrainerEntity)
      .values([
        {
          id: '32547dd7-617a-4985-a59a-91a176e55b83',
          name: 'Carlos',
          surname: 'Perez',
          age: '12/2/1998',
          sex: 'M',
          email: 'carlosp@gmail.com',
          password: '$2b$10$D1g4BV6LUHc1LDLe73uZy.Lt01EGXC7XwcRpozmdJeASVnqjl.q3q', //Destructor1997
          phone: 520312345
        }
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const personalTrainerIds = ['32547dd7-617a-4985-a59a-91a176e55b83'];
    await queryRunner.manager.createQueryBuilder()
      .delete()
      .from(PersonalTrainerEntity)
      .where('personal_trainer.id IN (:...ids)', { ids: personalTrainerIds })
      .execute();
  }

}
