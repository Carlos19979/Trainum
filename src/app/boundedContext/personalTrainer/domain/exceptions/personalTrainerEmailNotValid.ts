import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../shared/domain/exceptions/base';

export class PersonalTrainerEmailNotValid extends BaseException {

  constructor(email: string) {
    const message = `error personal trainer ${email} is not a  valid email`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
