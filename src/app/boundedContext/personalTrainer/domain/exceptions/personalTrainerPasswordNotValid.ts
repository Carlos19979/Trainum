import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../shared/domain/exceptions/base';

export class PersonalTrainerPasswordNotValid extends BaseException {

  constructor(password: string) {
    const message = `error personal trainer password ${password} not valid`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
