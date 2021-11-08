import { EncryptionRepository } from '../../domain/contracts/encryptionRepository';
import bcrypt from 'bcrypt';

export class EncryptionRepositoryBcrypt implements EncryptionRepository {

  async encrytp(password: string): Promise<string> {
    const salt = 12;

    return await bcrypt.hash(password, salt);
  }

  async verify(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

}
