import { Observable } from 'rxjs';
import { GiftList } from '@gifts-lists-nx/domain';

export abstract class GetAllGiftLists {
  abstract getAll(): Observable<GiftList[]>
}
