import { Module } from '@nestjs/common';
import { GetAllGiftListUseCase } from './gift-lists/get-all-gift-list/get-all-gift-list.use-case';
import { IGetAllGiftListUseCase } from './gift-lists/get-all-gift-list/i.get-all-gift-list.use-case';
import { ApiRepositoriesModule } from '@gifts-lists-nx/api-repositories';
import { IAddGiftListUseCase } from './gift-lists/add-gift-list/i.add-gift-list.use-case';

@Module({
  providers: [{
    provide: IGetAllGiftListUseCase,
    useClass: GetAllGiftListUseCase
  }, {
    provide: IAddGiftListUseCase,
    useClass: GetAllGiftListUseCase
  }],
  imports: [
    ApiRepositoriesModule
  ],
  exports: [
    IGetAllGiftListUseCase,
    IAddGiftListUseCase
  ]
})
export class ApiUseCasesModule {}
