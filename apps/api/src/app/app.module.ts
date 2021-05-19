import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GiftListResolver } from './gift-list/gift-list.resolver';
import { ApiUseCasesModule } from '@gifts-lists-nx/api-use-cases';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    ApiUseCasesModule
  ],
  controllers: [],
  providers: [GiftListResolver]
})
export class AppModule {}
