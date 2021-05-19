import { IAddGiftListUseCase } from './i.add-gift-list.use-case';
import { GiftList } from '@gifts-lists-nx/domain';
import { GetAllGiftListsRepository, AddGiftListRepository } from '@gifts-lists-nx/api-repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddGiftListUseCase implements IAddGiftListUseCase {
  constructor(
    private getAllGiftListsRepository: GetAllGiftListsRepository,
    private addGiftListRepository: AddGiftListRepository
  ) {
  }
  execute(giftList: GiftList): GiftList[] {
    this.addGiftListRepository.add(giftList);
    return this.getAllGiftListsRepository.getAll();
  }
}
