import { GiftList } from '@gifts-lists-nx/domain';

export abstract class AddGiftListRepository {
  abstract add(giftList: GiftList): void;
}
