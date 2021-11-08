import { PersonalTrainer } from '../aggregates/personalTrainer';

export interface PersonalTrainerRepository {

    save(personalTrainer: PersonalTrainer): Promise<void>;
    searchByEmail(email: string): Promise<PersonalTrainer | null>;

}
