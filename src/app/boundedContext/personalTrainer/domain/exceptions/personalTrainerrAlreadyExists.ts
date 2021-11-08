import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../shared/domain/exceptions/base';

export class PersonalTrainerAlreadyExists extends BaseException {

  constructor(email: string) {
    const message = `error personal Trainer with email ${email} already exists`;
    super(HTTP_STATUS.CONFLICT, message);
  }

}
