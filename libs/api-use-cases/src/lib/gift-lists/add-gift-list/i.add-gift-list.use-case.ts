import { BaseUseCase } from '../../base.use-case';
import { Gift, GiftList } from '@gifts-lists-nx/domain';

export abstract class IAddGiftListUseCase extends BaseUseCase<{ name: string, description: string; gifts: Gift[] }, GiftList[]> {
  public abstract execute(input: { name: string, description: string; gifts: Gift[] }): GiftList[];
}
