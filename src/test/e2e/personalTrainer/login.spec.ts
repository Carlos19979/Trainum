import supertest from 'supertest';
import app from '../../../app';
import { HTTP_STATUS } from '../../../app/application/shared/constants/http_codes';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to PersonalTrainerLogin Application service', () => {
  test('Should check if email exist and if password is correct and return a token', async () => {
    supertest(app)
      .post('/backoffice/login')
      .send({
        email: 'carlosp@gmail.com',
        password: 'Destructor1997'
      }).expect(HTTP_STATUS.SUCCESS);
  });
});
