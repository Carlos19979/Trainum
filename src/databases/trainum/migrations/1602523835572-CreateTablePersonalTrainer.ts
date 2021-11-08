/* eslint-disable max-lines-per-function */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePersonalTrainer1602523835572 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'personal_trainer',
      columns: [
        
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'surname',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'age',
          type: 'timestamp',
          isNullable: true
        },
        {
          name: 'sex',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'phone',
          type: 'int',
          isUnique: true,
          isNullable: true
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('personal_trainer', true);
  }

}
