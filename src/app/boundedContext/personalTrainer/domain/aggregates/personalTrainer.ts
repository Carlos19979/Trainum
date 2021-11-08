/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PersonalTrainerEmail } from '../valueObjects/personalTrainerEmail';
import { PersonalTrainerId } from '../valueObjects/personalTrainerId';
import { PersonalTrainerPassword } from '../valueObjects/personalTrainerPassword';
import { PersonalTrainerHashedPassword } from '../valueObjects/personalTrainerHashedPassword';
import { PersonalTrainerName } from '../valueObjects/personalTrainerName';
import { PersonalTrainerModel } from '../models/personalTrainerModel';
import { PersonalTrainerSurname } from '../valueObjects/personalTrainerSurname';

export class PersonalTrainer {

  constructor(
    private id: PersonalTrainerId,
    private email: PersonalTrainerEmail,
    private name: PersonalTrainerName,
    private surname: PersonalTrainerSurname,
    private password?: PersonalTrainerPassword,
    private hashedPassword?: PersonalTrainerHashedPassword
  ) {}

  public getId(): PersonalTrainerId {
    return this.id;
  }

  public setHashedPassword(hashedPassword: PersonalTrainerHashedPassword): void {
    this.hashedPassword = hashedPassword;
  }

  public getValueId(): string {
    return this.id.getValue();
  }
  public getValuePassword(): string {
    return this.password!.getValue();
  }

  public getValueEmail(): string {
    return this.email.getValue();
  }
  public getValueName(): string {
    return this.name.getValue();
  }
  public getValueSurname(): string {
    return this.surname.getValue();
  }
  public getValueHashedPassword(): string {
    return this.hashedPassword!.getValue();
  }
  public toModel(): PersonalTrainerModel {
    return {
      id: this.getValueId(),
      name: this.getValueName(),
      surname: this.getValueSurname(),
      email: this.getValueEmail()
    };
  }
  public toModelDB(): PersonalTrainerModel {
    return {
      id: this.getValueId(),
      name: this.getValueName(),
      surname: this.getValueSurname(),
      email: this.getValueEmail(),
      password: this.getValueHashedPassword()
    };
  }

}
