import Rental from '@modules/rentals/infra/typeorm/entities/Rental';
import IRentalsRepository from '@modules/rentals/infra/typeorm/repositories/IRentalsRepository';

class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.car_id === car_id && rental.end_date === null,
    );
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.car_id === user_id && rental.end_date === null,
    );
  }
}

export default RentalsRepositoryInMemory;
