import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type AddGiftInput = {
  giftListId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AddGiftListInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Gift = {
  __typename?: 'Gift';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GiftList = {
  __typename?: 'GiftList';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  gifts: Array<Maybe<Gift>>;
};

export type GiftListMutation = {
  __typename?: 'GiftListMutation';
  addGiftList?: Maybe<Array<Maybe<GiftList>>>;
};


export type GiftListMutationAddGiftListArgs = {
  giftListInput?: Maybe<AddGiftListInput>;
};

export type GiftListQuery = {
  __typename?: 'GiftListQuery';
  getAll?: Maybe<Array<Maybe<GiftList>>>;
};

export type GiftMutation = {
  __typename?: 'GiftMutation';
  addGiftToList?: Maybe<Gift>;
};


export type GiftMutationAddGiftToListArgs = {
  gift?: Maybe<AddGiftInput>;
};

export type GiftQuery = {
  __typename?: 'GiftQuery';
  get?: Maybe<Gift>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addGiftList?: Maybe<Array<Maybe<GiftList>>>;
};


export type MutationAddGiftListArgs = {
  giftListInput?: Maybe<AddGiftListInput>;
};

export type Query = {
  __typename?: 'Query';
  giftLists?: Maybe<Array<Maybe<GiftList>>>;
};

export type GiftListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GiftListsQuery = (
  { __typename?: 'Query' }
  & { giftLists?: Maybe<Array<Maybe<(
    { __typename?: 'GiftList' }
    & Pick<GiftList, 'name' | 'description'>
    & { gifts: Array<Maybe<(
      { __typename?: 'Gift' }
      & Pick<Gift, 'name' | 'description'>
    )>> }
  )>>> }
);

export type AddGiftListMutationVariables = Exact<{
  giftListInput?: Maybe<AddGiftListInput>;
}>;


export type AddGiftListMutation = (
  { __typename?: 'Mutation' }
  & { addGiftList?: Maybe<Array<Maybe<(
    { __typename?: 'GiftList' }
    & Pick<GiftList, 'name' | 'description'>
  )>>> }
);

export const GiftListsDocument = gql`
    query giftLists {
  giftLists {
    name
    description
    gifts {
      name
      description
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GiftListsGQL extends Apollo.Query<GiftListsQuery, GiftListsQueryVariables> {
    document = GiftListsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddGiftListDocument = gql`
    mutation addGiftList($giftListInput: AddGiftListInput) {
  addGiftList(giftListInput: $giftListInput) {
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddGiftListGQL extends Apollo.Mutation<AddGiftListMutation, AddGiftListMutationVariables> {
    document = AddGiftListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }