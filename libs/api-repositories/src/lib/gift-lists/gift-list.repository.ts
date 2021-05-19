import { Injectable } from '@nestjs/common';
import { AddGiftListRepository } from './add-gift-list.repository';
import { Gift, GiftList } from '@gifts-lists-nx/domain';
import { GetAllGiftListsRepository } from './get-all-gift-lists.repository';

@Injectable()
export class GiftListRepository implements AddGiftListRepository, GetAllGiftListsRepository {
  private giftLists: GiftList[] = [
    new GiftList({
      name: 'Ma liste de Nöel',
      description: 'Ma description',
      gifts: [
        new Gift('Mon cadeau')
      ]
    })
  ];

  add(giftList: GiftList): void {
    this.giftLists = [
      ...this.giftLists,
      giftList
    ];
  }

  getAll(): GiftList[] {
    return this.giftLists;
  }
}
