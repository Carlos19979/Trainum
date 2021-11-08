export interface EncryptionRepository {
    encrytp(passowrd: string): Promise<string>;
    verify(password: string, hash: string): Promise<boolean>;
}
