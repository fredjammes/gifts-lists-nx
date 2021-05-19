import { IGetAllGiftListUseCase } from '@gifts-lists-nx/api-use-cases';
import { GiftList } from '@gifts-lists-nx/domain';
import { GetAllGiftListsRepository } from '@gifts-lists-nx/api-repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllGiftListUseCase implements IGetAllGiftListUseCase {

  constructor(
    private getAllGiftListsRepository: GetAllGiftListsRepository
  ) {
  }

  execute(): GiftList[] {
    return this.getAllGiftListsRepository.getAll();
  }
}
