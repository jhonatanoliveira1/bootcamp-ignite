import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  create({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void>;
}

export default IUsersRepository;
