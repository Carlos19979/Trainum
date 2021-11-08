import { EntitySchema } from 'typeorm';
import { PersonalTrainerDetailsModel } from '../../../domain/models/personalTrainerDetails.model';

export const PersonalTrainerEntity = new EntitySchema<PersonalTrainerDetailsModel>({
  name: 'personal_trainer',
  columns: {
    id: {
      primary: true,
      type: String,
      generated: undefined
    },
    name: {
      type: String,
      nullable: true
    },
    surname: {
      type: String,
      nullable: true
    },
    age: {
      type: Date,
      nullable: true
    },
    sex: {
      type: String,
      nullable: true
    },
    email: {
      type: String,
      unique: true,
      nullable: false
    },
    password: {
      nullable: false,
      type: String
    },
    phone: {
      type: Number,
      unique: true,
      nullable: true
    }
  }
});
