import supertest from 'supertest';
import app from '../../../app';
import { HTTP_STATUS } from '../../../app/application/shared/constants/http_codes';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to PersonalTrainerRegister Application service', () => {
  test('Should create personalTrainer when it does not exist in the database', async () => {
    supertest(app)
      .post('/backoffice/register')
      .send({
        id: '32547dd7-617a-4985-a59a-91a176e55b87',
        email: 'asdaa',
        password: 'Destructor1997'
      })
      .expect(HTTP_STATUS.CREATED);
  });
});
