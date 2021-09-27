import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../entities/User';

interface IUsersRepository {
  create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export default IUsersRepository;
