import { GiftList } from '@gifts-lists-nx/domain';
import { BaseUseCase } from '../base.use-case';
import { Observable } from 'rxjs';

export abstract class IGetAllGiftListUseCase extends BaseUseCase<void, Observable<GiftList[]>>{
}
