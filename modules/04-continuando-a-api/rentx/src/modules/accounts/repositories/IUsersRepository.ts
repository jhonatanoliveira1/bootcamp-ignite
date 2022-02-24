import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import User from '@modules/accounts/infra/typeorm/entities/User';

interface IUsersRepository {
  create({
    name,
    email,
    password,
    driver_license,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export default IUsersRepository;
