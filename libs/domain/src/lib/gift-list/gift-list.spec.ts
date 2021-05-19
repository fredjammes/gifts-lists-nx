import { GiftList } from './gift-list';
import { Gift } from '../gift/gift';

describe('GiftList', () => {
  describe('When creating a gift list', () => {
    it('should create a gift list, only with a name', () => {
      const expectedName = 'Expected Name';
      const newGiftsList = new GiftList({
        name: expectedName
      });
      expect(newGiftsList).toBeDefined();
      expect(newGiftsList.name).toBe(expectedName);
    });

    it('should create a gift list, with a name and a description', () => {
      const expectedName = 'Expected Name';
      const expectedDescription = 'Expected Description';

      const newGiftsList = new GiftList({
        name: expectedName,
        description: expectedDescription
      });

      expect(newGiftsList).toBeDefined();
      expect(newGiftsList.name).toBe(expectedName);
      expect(newGiftsList.description).toBe(expectedDescription);
    });

    it('should create a gift list with an empty gift array', () => {
      const newGiftsList = new GiftList({
        name: 'some name'
      });
      expect(newGiftsList.gifts).toBeDefined();
      expect(newGiftsList.gifts.length).toBe(0);
    });

    it('should create a gift list with the given gifts', () => {
      const expectedGifts: Gift[] = [
        new Gift('First Gift'),
        new Gift('Second Gift')
      ];
      const newGiftsList = new GiftList({
        name: 'some name',
        gifts: expectedGifts
      });
      expect(newGiftsList.gifts).toBeDefined();
      expect(newGiftsList.gifts.length).toBe(2);
    });
  });
});
