import ICreateSpecificationDTO from '@modules/cars/dtos/ICreateSpecificationDTO';
import Specification from '@modules/cars/infra/typeorm/entities/Specification';

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export default ISpecificationsRepository;
