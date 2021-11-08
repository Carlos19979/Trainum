import { Token } from '../valueObjects/token';

export interface AuthorizationRepository {
  createToken(id: string, secret: string, expirationTimeInSeconds: number): Promise<Token>;
}
