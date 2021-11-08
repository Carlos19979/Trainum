import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from './base';

export class PasswordNotValid extends BaseException {

  constructor() {
    const message = 'password not valid';
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
