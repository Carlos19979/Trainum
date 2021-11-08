'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const config = [
  {
    type: 'postgres',
    name: 'Trainum',
    host: process.env.Trainum_DB_HOST,
    port: parseInt(process.env.Trainum_DB_PORT, 10),
    username: process.env.Trainum_DB_USER,
    password: process.env.Trainum_DB_PASSWORD,
    database: process.env.Trainum_DB_DATABASE,
    migrations: [
      process.env.MIGRATIONS_PATH_FOR_Trainum
    ],
    cli: {
      migrationsDir: process.env.MIGRATIONS_PATH_FOR_Trainum
    },
    migrationsRun: false,
    synchronize: false,
    logging: true,
    entities: [
      process.env.ENTITIES_PATH_FOR_PERSONAL_TRAINER
    ]
  },
  {
    type: 'postgres',
    name: 'seeds-Trainum',
    host: process.env.Trainum_DB_HOST,
    port: parseInt(process.env.Trainum_DB_PORT, 10),
    username: process.env.Trainum_DB_USER,
    password: process.env.Trainum_DB_PASSWORD,
    database: process.env.Trainum_DB_DATABASE,
    migrations: [
      process.env.SEEDS_PATH_FOR_Trainum
    ],
    cli: {
      migrationsDir: process.env.SEEDS_PATH_FOR_Trainum
    },
    migrationsRun: false,
    synchronize: false,
    logging: true,
    entities: [
      process.env.ENTITIES_PATH_FOR_PERSONAL_TRAINER
    ]
  }
];

module.exports = config;