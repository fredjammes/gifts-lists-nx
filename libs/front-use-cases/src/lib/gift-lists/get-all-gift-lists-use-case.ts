import { GiftList } from '@gifts-lists-nx/domain';
import { IGetAllGiftListUseCase } from './i-get-all-gift-list-use.case';
import { GetAllGiftLists } from '../../../../front-repositories/src/lib/gift-lists/get-all-gift-lists';
import { Observable } from 'rxjs';

export class GetAllGiftListsUseCase implements IGetAllGiftListUseCase {
  constructor(
    private getAllGiftListRepository: GetAllGiftLists
  ) {
  }
  execute(): Observable<GiftList[]> {
    return this.getAllGiftListRepository.getAll();
  }
}
