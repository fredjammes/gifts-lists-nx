import { Module } from '@nestjs/common';
import { GetAllGiftListsRepository } from './gift-lists/get-all-gift-lists.repository';
import { GiftListRepository } from './gift-lists/gift-list.repository';
import { AddGiftListRepository } from './gift-lists/add-gift-list.repository';

@Module({
  providers: [
    {
      provide: GetAllGiftListsRepository,
      useClass: GiftListRepository
    },
    {
      provide: AddGiftListRepository,
      useClass: GiftListRepository
    }
  ],
  exports: [
    GetAllGiftListsRepository,
    AddGiftListRepository
  ]
})
export class ApiRepositoriesModule {
}
