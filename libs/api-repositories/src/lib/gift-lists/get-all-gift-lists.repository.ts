import { GiftList } from '@gifts-lists-nx/domain';

export abstract class GetAllGiftListsRepository {
  abstract getAll(): GiftList[];
}
