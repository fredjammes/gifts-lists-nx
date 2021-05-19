import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from './graphql.module';
import { GetAllGiftLists } from './gift-lists/get-all-gift-lists';
import { GiftListsGraphRepositories } from './gift-lists/gift-lists.graph.repositories';

@NgModule({
  imports: [CommonModule, GraphQLModule],
  providers: [
    {provide: GetAllGiftLists, useClass: GiftListsGraphRepositories}
  ]
})
export class FrontRepositoriesModule {}
