import { GiftList } from '@gifts-lists-nx/domain';
import { BaseUseCase } from '../../base.use-case';

export abstract class IGetAllGiftListUseCase implements BaseUseCase<void, GiftList[]> {
  public abstract execute(): GiftList[];
}
