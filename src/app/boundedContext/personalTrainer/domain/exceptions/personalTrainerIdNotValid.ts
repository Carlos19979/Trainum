import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../shared/domain/exceptions/base';

export class PersonalTrainerUiddNotvalid extends BaseException {

  constructor(id: string) {
    const message = `error personal trainer id ${id} is not a personalTrainer id valid`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
