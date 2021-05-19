import { GetAllGiftLists } from './get-all-gift-lists';
import { Observable } from 'rxjs';
import { GiftList } from '@gifts-lists-nx/domain';
import { GiftListsGQL } from '@gifts-lists-nx/front-repositories';
import { map } from 'rxjs/operators';

export class GiftListsGraphRepositories implements GetAllGiftLists{
  constructor(
    private repository: GiftListsGQL
  ) {
  }
  getAll(): Observable<GiftList[]> {
    return this.repository.watch().valueChanges.pipe(map(giftListGraphQLResult => giftListGraphQLResult.data.giftLists as GiftList[]));
  }
}
