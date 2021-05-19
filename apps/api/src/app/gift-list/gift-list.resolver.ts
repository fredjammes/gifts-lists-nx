import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GiftList } from '@gifts-lists-nx/domain';
import { IGetAllGiftListUseCase } from '@gifts-lists-nx/api-use-cases';
import { IAddGiftListUseCase } from '@gifts-lists-nx/api-use-cases';

@Resolver('GiftList')
export class GiftListResolver {
  constructor(
    private getAllGiftListUseCase: IGetAllGiftListUseCase,
    private addGiftListUseCase: IAddGiftListUseCase
  ) {
  }

  @Query('giftLists')
  public getAllGiftLists(): GiftList[] {
    return this.getAllGiftListUseCase.execute();
  }

  @Mutation('addGiftList')
  public addGiftList(
    @Args('name') name,
    @Args('description') description,
    @Args('gifts') gifts
  ) {
    return this.addGiftListUseCase.execute(new GiftList({ name, description, gifts }));
  }
}
