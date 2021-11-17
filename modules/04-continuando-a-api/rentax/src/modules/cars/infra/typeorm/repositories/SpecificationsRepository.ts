import { getRepository, Repository } from 'typeorm';

import ICreateSpecificationDTO from '@modules/cars/dtos/ICreateSpecificationDTO';
import Specification from '@modules/cars/infra/typeorm/entities/Specification';
import ISpecificationsRepository from '@modules/cars/repositories/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specification = await this.repository.findByIds(ids);
    return specification;
  }
}

export default SpecificationsRepository;
