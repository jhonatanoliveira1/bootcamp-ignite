import { Request, Response } from 'express';

import ListCategoryUseCase from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const listCategories = this.listCategoryUseCase.execute();

    return response.json(listCategories);
  }
}

export default ListCategoryController;
