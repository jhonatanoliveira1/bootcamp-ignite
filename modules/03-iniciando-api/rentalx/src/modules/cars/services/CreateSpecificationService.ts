import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../repositories/ISpecificationsRepository';

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationsAlreadyExists =
      this.specificationsRepository.findByName(name);

    this.specificationsRepository.create({
      name,
      description,
    });

    if (specificationsAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export default CreateSpecificationService;
