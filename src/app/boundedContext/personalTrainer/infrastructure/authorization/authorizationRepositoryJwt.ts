import { AuthorizationRepository } from '../../domain/contracts/authorizationRepository';
import { Token } from '../../domain/valueObjects/token';
import jwt from 'jsonwebtoken';

export class AuthorizationRepositoryJwt implements AuthorizationRepository {

  async createToken(id: string, secret: string, expirationTimeInSeconds: number): Promise<Token> {
    const token = jwt.sign({ id }, secret, { expiresIn: expirationTimeInSeconds });

    return await new Token(token);
  }

}
