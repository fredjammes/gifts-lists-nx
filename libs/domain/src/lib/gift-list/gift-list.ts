import { Gift } from '../gift/gift';

export class GiftList {
  public name: string;
  public description: string;
  public gifts: Gift[];

  constructor(
    {
      name,
      description,
      gifts
    }: {
      name: string,
      description?: string,
      gifts?:Gift[]
    }
  ) {
    this.name = name;
    this.description = description ?? '';
    this.gifts = gifts ?? [];
  }

  public add(gift: Gift): Gift[] {
    this.gifts = [...this.gifts, gift];

    return this.gifts;
  }
}
