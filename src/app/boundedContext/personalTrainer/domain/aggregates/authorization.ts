import { PersonalTrainerEmail } from '../valueObjects/personalTrainerEmail';
import { PersonalTrainerPassword } from '../valueObjects/personalTrainerPassword';

export class Authorization {

  constructor(
    private email: PersonalTrainerEmail,
    private password: PersonalTrainerPassword
  ) {}

  public getValueEmail(): string {
    return this.email.getValue();
  }

  public getValuePassword(): string {
    return this.password.getValue();
  }

}
