/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type GeneratedAilment = GeneratedEntry & {
  __typename?: 'Ailment';
  contentfulMetadata: GeneratedContentfulMetadata;
  image?: Maybe<GeneratedAsset>;
  isAny?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<GeneratedAilmentLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: GeneratedSys;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type GeneratedAilmentImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type GeneratedAilmentIsAnyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type GeneratedAilmentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type GeneratedAilmentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GeneratedAilmentCollection = {
  __typename?: 'AilmentCollection';
  items: Array<Maybe<GeneratedAilment>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedAilmentFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedAilmentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedAilmentFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  isAny?: InputMaybe<Scalars['Boolean']>;
  isAny_exists?: InputMaybe<Scalars['Boolean']>;
  isAny_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedAilmentLinkingCollections = {
  __typename?: 'AilmentLinkingCollections';
  entryCollection?: Maybe<GeneratedEntryCollection>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
  weaponCollection?: Maybe<GeneratedWeaponCollection>;
};

export type GeneratedAilmentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAilmentLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAilmentLinkingCollectionsWeaponCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedAilmentOrder {
  IsAnyAsc = 'isAny_ASC',
  IsAnyDesc = 'isAny_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAsset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: GeneratedContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<GeneratedAssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: GeneratedSys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<GeneratedImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type GeneratedAssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GeneratedAssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<GeneratedAsset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedAssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type GeneratedAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  ailmentCollection?: Maybe<GeneratedAilmentCollection>;
  elementCollection?: Maybe<GeneratedElementCollection>;
  entryCollection?: Maybe<GeneratedEntryCollection>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
  heroRoleCollection?: Maybe<GeneratedHeroRoleCollection>;
  weaponCategoryCollection?: Maybe<GeneratedWeaponCategoryCollection>;
  weaponCollection?: Maybe<GeneratedWeaponCollection>;
};

export type GeneratedAssetLinkingCollectionsAilmentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAssetLinkingCollectionsElementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAssetLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAssetLinkingCollectionsHeroRoleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAssetLinkingCollectionsWeaponCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedAssetLinkingCollectionsWeaponCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export type GeneratedContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<GeneratedContentfulTag>>;
};

export type GeneratedContentfulMetadataFilter = {
  tags?: InputMaybe<GeneratedContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type GeneratedContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type GeneratedElement = GeneratedEntry & {
  __typename?: 'Element';
  color?: Maybe<Scalars['String']>;
  contentfulMetadata: GeneratedContentfulMetadata;
  image?: Maybe<GeneratedAsset>;
  linkedFrom?: Maybe<GeneratedElementLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: GeneratedSys;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type GeneratedElementColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type GeneratedElementImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type GeneratedElementLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type GeneratedElementNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GeneratedElementCollection = {
  __typename?: 'ElementCollection';
  items: Array<Maybe<GeneratedElement>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedElementFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedElementFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedElementFilter>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedElementLinkingCollections = {
  __typename?: 'ElementLinkingCollections';
  entryCollection?: Maybe<GeneratedEntryCollection>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
  weaponCollection?: Maybe<GeneratedWeaponCollection>;
};

export type GeneratedElementLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedElementLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedElementLinkingCollectionsWeaponCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedElementOrder {
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type GeneratedEntry = {
  contentfulMetadata: GeneratedContentfulMetadata;
  sys: GeneratedSys;
};

export type GeneratedEntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<GeneratedEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedEntryFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export enum GeneratedEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHero = GeneratedEntry & {
  __typename?: 'Hero';
  chainAilmentEnd?: Maybe<GeneratedAilment>;
  chainAilmentStart?: Maybe<GeneratedAilment>;
  contentfulMetadata: GeneratedContentfulMetadata;
  defaultWeapon?: Maybe<GeneratedWeapon>;
  element?: Maybe<GeneratedElement>;
  image?: Maybe<GeneratedAsset>;
  linkedFrom?: Maybe<GeneratedHeroLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  partyBuff?: Maybe<GeneratedHeroPartyBuff>;
  partyBuff2?: Maybe<GeneratedHeroPartyBuff>;
  partyBuffValue?: Maybe<Scalars['Int']>;
  partyBuffValue2?: Maybe<Scalars['Int']>;
  rarity?: Maybe<Scalars['Int']>;
  role?: Maybe<GeneratedHeroRole>;
  sys: GeneratedSys;
  weaponCategoriesCollection?: Maybe<GeneratedHeroWeaponCategoriesCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroChainAilmentEndArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroChainAilmentStartArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroDefaultWeaponArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroElementArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroPartyBuffArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroPartyBuff2Args = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroPartyBuffValueArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroPartyBuffValue2Args = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroRarityArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroRoleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type GeneratedHeroWeaponCategoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedHeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<GeneratedHero>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedHeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedHeroFilter>>>;
  chainAilmentEnd?: InputMaybe<GeneratedCfAilmentNestedFilter>;
  chainAilmentEnd_exists?: InputMaybe<Scalars['Boolean']>;
  chainAilmentStart?: InputMaybe<GeneratedCfAilmentNestedFilter>;
  chainAilmentStart_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  defaultWeapon?: InputMaybe<GeneratedCfWeaponNestedFilter>;
  defaultWeapon_exists?: InputMaybe<Scalars['Boolean']>;
  element?: InputMaybe<GeneratedCfElementNestedFilter>;
  element_exists?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  partyBuff?: InputMaybe<GeneratedCfHeroPartyBuffNestedFilter>;
  partyBuff2?: InputMaybe<GeneratedCfHeroPartyBuffNestedFilter>;
  partyBuff2_exists?: InputMaybe<Scalars['Boolean']>;
  partyBuffValue?: InputMaybe<Scalars['Int']>;
  partyBuffValue2?: InputMaybe<Scalars['Int']>;
  partyBuffValue2_exists?: InputMaybe<Scalars['Boolean']>;
  partyBuffValue2_gt?: InputMaybe<Scalars['Int']>;
  partyBuffValue2_gte?: InputMaybe<Scalars['Int']>;
  partyBuffValue2_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  partyBuffValue2_lt?: InputMaybe<Scalars['Int']>;
  partyBuffValue2_lte?: InputMaybe<Scalars['Int']>;
  partyBuffValue2_not?: InputMaybe<Scalars['Int']>;
  partyBuffValue2_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  partyBuffValue_exists?: InputMaybe<Scalars['Boolean']>;
  partyBuffValue_gt?: InputMaybe<Scalars['Int']>;
  partyBuffValue_gte?: InputMaybe<Scalars['Int']>;
  partyBuffValue_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  partyBuffValue_lt?: InputMaybe<Scalars['Int']>;
  partyBuffValue_lte?: InputMaybe<Scalars['Int']>;
  partyBuffValue_not?: InputMaybe<Scalars['Int']>;
  partyBuffValue_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  partyBuff_exists?: InputMaybe<Scalars['Boolean']>;
  rarity?: InputMaybe<Scalars['Int']>;
  rarity_exists?: InputMaybe<Scalars['Boolean']>;
  rarity_gt?: InputMaybe<Scalars['Int']>;
  rarity_gte?: InputMaybe<Scalars['Int']>;
  rarity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rarity_lt?: InputMaybe<Scalars['Int']>;
  rarity_lte?: InputMaybe<Scalars['Int']>;
  rarity_not?: InputMaybe<Scalars['Int']>;
  rarity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  role?: InputMaybe<GeneratedCfHeroRoleNestedFilter>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<GeneratedSysFilter>;
  weaponCategoriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedHeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<GeneratedEntryCollection>;
};

export type GeneratedHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedHeroOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PartyBuffValue2Asc = 'partyBuffValue2_ASC',
  PartyBuffValue2Desc = 'partyBuffValue2_DESC',
  PartyBuffValueAsc = 'partyBuffValue_ASC',
  PartyBuffValueDesc = 'partyBuffValue_DESC',
  RarityAsc = 'rarity_ASC',
  RarityDesc = 'rarity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type GeneratedHeroPartyBuff = GeneratedEntry & {
  __typename?: 'HeroPartyBuff';
  contentfulMetadata: GeneratedContentfulMetadata;
  linkedFrom?: Maybe<GeneratedHeroPartyBuffLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  prio?: Maybe<Scalars['Int']>;
  sys: GeneratedSys;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type GeneratedHeroPartyBuffLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type GeneratedHeroPartyBuffNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type GeneratedHeroPartyBuffPrioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GeneratedHeroPartyBuffCollection = {
  __typename?: 'HeroPartyBuffCollection';
  items: Array<Maybe<GeneratedHeroPartyBuff>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedHeroPartyBuffFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedHeroPartyBuffFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedHeroPartyBuffFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prio?: InputMaybe<Scalars['Int']>;
  prio_exists?: InputMaybe<Scalars['Boolean']>;
  prio_gt?: InputMaybe<Scalars['Int']>;
  prio_gte?: InputMaybe<Scalars['Int']>;
  prio_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  prio_lt?: InputMaybe<Scalars['Int']>;
  prio_lte?: InputMaybe<Scalars['Int']>;
  prio_not?: InputMaybe<Scalars['Int']>;
  prio_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedHeroPartyBuffLinkingCollections = {
  __typename?: 'HeroPartyBuffLinkingCollections';
  entryCollection?: Maybe<GeneratedEntryCollection>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
};

export type GeneratedHeroPartyBuffLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedHeroPartyBuffLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedHeroPartyBuffOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PrioAsc = 'prio_ASC',
  PrioDesc = 'prio_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type GeneratedHeroRole = GeneratedEntry & {
  __typename?: 'HeroRole';
  contentfulMetadata: GeneratedContentfulMetadata;
  image?: Maybe<GeneratedAsset>;
  linkedFrom?: Maybe<GeneratedHeroRoleLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: GeneratedSys;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type GeneratedHeroRoleImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type GeneratedHeroRoleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type GeneratedHeroRoleNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GeneratedHeroRoleCollection = {
  __typename?: 'HeroRoleCollection';
  items: Array<Maybe<GeneratedHeroRole>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedHeroRoleFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedHeroRoleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedHeroRoleFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedHeroRoleLinkingCollections = {
  __typename?: 'HeroRoleLinkingCollections';
  entryCollection?: Maybe<GeneratedEntryCollection>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
};

export type GeneratedHeroRoleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedHeroRoleLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedHeroRoleOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type GeneratedHeroWeaponCategoriesCollection = {
  __typename?: 'HeroWeaponCategoriesCollection';
  items: Array<Maybe<GeneratedWeaponCategory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum GeneratedImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum GeneratedImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum GeneratedImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type GeneratedImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<GeneratedImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<GeneratedImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<GeneratedImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

export type GeneratedQuery = {
  __typename?: 'Query';
  ailment?: Maybe<GeneratedAilment>;
  ailmentCollection?: Maybe<GeneratedAilmentCollection>;
  asset?: Maybe<GeneratedAsset>;
  assetCollection?: Maybe<GeneratedAssetCollection>;
  element?: Maybe<GeneratedElement>;
  elementCollection?: Maybe<GeneratedElementCollection>;
  entryCollection?: Maybe<GeneratedEntryCollection>;
  hero?: Maybe<GeneratedHero>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
  heroPartyBuff?: Maybe<GeneratedHeroPartyBuff>;
  heroPartyBuffCollection?: Maybe<GeneratedHeroPartyBuffCollection>;
  heroRole?: Maybe<GeneratedHeroRole>;
  heroRoleCollection?: Maybe<GeneratedHeroRoleCollection>;
  weapon?: Maybe<GeneratedWeapon>;
  weaponCategory?: Maybe<GeneratedWeaponCategory>;
  weaponCategoryCollection?: Maybe<GeneratedWeaponCategoryCollection>;
  weaponCollection?: Maybe<GeneratedWeaponCollection>;
};

export type GeneratedQueryAilmentArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryAilmentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedAilmentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedAilmentFilter>;
};

export type GeneratedQueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedAssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedAssetFilter>;
};

export type GeneratedQueryElementArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryElementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedElementOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedElementFilter>;
};

export type GeneratedQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedEntryFilter>;
};

export type GeneratedQueryHeroArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedHeroFilter>;
};

export type GeneratedQueryHeroPartyBuffArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryHeroPartyBuffCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedHeroPartyBuffOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedHeroPartyBuffFilter>;
};

export type GeneratedQueryHeroRoleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryHeroRoleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedHeroRoleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedHeroRoleFilter>;
};

export type GeneratedQueryWeaponArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryWeaponCategoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GeneratedQueryWeaponCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedWeaponCategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedWeaponCategoryFilter>;
};

export type GeneratedQueryWeaponCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GeneratedWeaponOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GeneratedWeaponFilter>;
};

export type GeneratedSys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type GeneratedSysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeapon = GeneratedEntry & {
  __typename?: 'Weapon';
  ailment?: Maybe<GeneratedAilment>;
  category?: Maybe<GeneratedWeaponCategory>;
  contentfulMetadata: GeneratedContentfulMetadata;
  element?: Maybe<GeneratedElement>;
  image?: Maybe<GeneratedAsset>;
  linkedFrom?: Maybe<GeneratedWeaponLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  rarity?: Maybe<Scalars['String']>;
  sys: GeneratedSys;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeaponAilmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeaponCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeaponElementArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeaponImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeaponLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeaponNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type GeneratedWeaponRarityArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type GeneratedWeaponCategory = GeneratedEntry & {
  __typename?: 'WeaponCategory';
  contentfulMetadata: GeneratedContentfulMetadata;
  image?: Maybe<GeneratedAsset>;
  linkedFrom?: Maybe<GeneratedWeaponCategoryLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: GeneratedSys;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type GeneratedWeaponCategoryImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type GeneratedWeaponCategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type GeneratedWeaponCategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GeneratedWeaponCategoryCollection = {
  __typename?: 'WeaponCategoryCollection';
  items: Array<Maybe<GeneratedWeaponCategory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedWeaponCategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedWeaponCategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedWeaponCategoryFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedWeaponCategoryLinkingCollections = {
  __typename?: 'WeaponCategoryLinkingCollections';
  entryCollection?: Maybe<GeneratedEntryCollection>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
  weaponCollection?: Maybe<GeneratedWeaponCollection>;
};

export type GeneratedWeaponCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedWeaponCategoryLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedWeaponCategoryLinkingCollectionsWeaponCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedWeaponCategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type GeneratedWeaponCollection = {
  __typename?: 'WeaponCollection';
  items: Array<Maybe<GeneratedWeapon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GeneratedWeaponFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedWeaponFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedWeaponFilter>>>;
  ailment?: InputMaybe<GeneratedCfAilmentNestedFilter>;
  ailment_exists?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<GeneratedCfWeaponCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  element?: InputMaybe<GeneratedCfElementNestedFilter>;
  element_exists?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rarity?: InputMaybe<Scalars['String']>;
  rarity_contains?: InputMaybe<Scalars['String']>;
  rarity_exists?: InputMaybe<Scalars['Boolean']>;
  rarity_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rarity_not?: InputMaybe<Scalars['String']>;
  rarity_not_contains?: InputMaybe<Scalars['String']>;
  rarity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedWeaponLinkingCollections = {
  __typename?: 'WeaponLinkingCollections';
  entryCollection?: Maybe<GeneratedEntryCollection>;
  heroCollection?: Maybe<GeneratedHeroCollection>;
};

export type GeneratedWeaponLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GeneratedWeaponLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GeneratedWeaponOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RarityAsc = 'rarity_ASC',
  RarityDesc = 'rarity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type GeneratedCfAilmentNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedCfAilmentNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedCfAilmentNestedFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  isAny?: InputMaybe<Scalars['Boolean']>;
  isAny_exists?: InputMaybe<Scalars['Boolean']>;
  isAny_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedCfElementNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedCfElementNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedCfElementNestedFilter>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedCfHeroPartyBuffNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedCfHeroPartyBuffNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedCfHeroPartyBuffNestedFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prio?: InputMaybe<Scalars['Int']>;
  prio_exists?: InputMaybe<Scalars['Boolean']>;
  prio_gt?: InputMaybe<Scalars['Int']>;
  prio_gte?: InputMaybe<Scalars['Int']>;
  prio_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  prio_lt?: InputMaybe<Scalars['Int']>;
  prio_lte?: InputMaybe<Scalars['Int']>;
  prio_not?: InputMaybe<Scalars['Int']>;
  prio_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedCfHeroRoleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedCfHeroRoleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedCfHeroRoleNestedFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedCfWeaponCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedCfWeaponCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedCfWeaponCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedCfWeaponNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneratedCfWeaponNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneratedCfWeaponNestedFilter>>>;
  ailment_exists?: InputMaybe<Scalars['Boolean']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<GeneratedContentfulMetadataFilter>;
  element_exists?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rarity?: InputMaybe<Scalars['String']>;
  rarity_contains?: InputMaybe<Scalars['String']>;
  rarity_exists?: InputMaybe<Scalars['Boolean']>;
  rarity_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rarity_not?: InputMaybe<Scalars['String']>;
  rarity_not_contains?: InputMaybe<Scalars['String']>;
  rarity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<GeneratedSysFilter>;
};

export type GeneratedGetDataQueryVariables = Exact<{ [key: string]: never }>;

export type GeneratedGetDataQuery = {
  __typename?: 'Query';
  heroCollection?: {
    __typename?: 'HeroCollection';
    items: Array<{
      __typename?: 'Hero';
      name?: string | null;
      rarity?: number | null;
      partyBuffValue?: number | null;
      partyBuffValue2?: number | null;
      sys: { __typename?: 'Sys'; id: string };
      image?: { __typename?: 'Asset'; url?: string | null } | null;
      role?: {
        __typename?: 'HeroRole';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      element?: {
        __typename?: 'Element';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      chainAilmentStart?: {
        __typename?: 'Ailment';
        name?: string | null;
        isAny?: boolean | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      chainAilmentEnd?: {
        __typename?: 'Ailment';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      partyBuff?: {
        __typename?: 'HeroPartyBuff';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      partyBuff2?: {
        __typename?: 'HeroPartyBuff';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      defaultWeapon?: {
        __typename?: 'Weapon';
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      weaponCategoriesCollection?: {
        __typename?: 'HeroWeaponCategoriesCollection';
        items: Array<{
          __typename?: 'WeaponCategory';
          sys: { __typename?: 'Sys'; id: string };
        } | null>;
      } | null;
    } | null>;
  } | null;
  heroRoleCollection?: {
    __typename?: 'HeroRoleCollection';
    items: Array<{
      __typename?: 'HeroRole';
      name?: string | null;
      sys: { __typename?: 'Sys'; id: string };
      image?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
  weaponCollection?: {
    __typename?: 'WeaponCollection';
    items: Array<{
      __typename?: 'Weapon';
      name?: string | null;
      rarity?: string | null;
      sys: { __typename?: 'Sys'; id: string };
      element?: {
        __typename?: 'Element';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      ailment?: {
        __typename?: 'Ailment';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      category?: {
        __typename?: 'WeaponCategory';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null;
      image?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
  weaponCategoryCollection?: {
    __typename?: 'WeaponCategoryCollection';
    items: Array<{
      __typename?: 'WeaponCategory';
      name?: string | null;
      sys: { __typename?: 'Sys'; id: string };
      image?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
  elementCollection?: {
    __typename?: 'ElementCollection';
    items: Array<{
      __typename?: 'Element';
      name?: string | null;
      color?: string | null;
      sys: { __typename?: 'Sys'; id: string };
      image?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
  ailmentCollection?: {
    __typename?: 'AilmentCollection';
    items: Array<{
      __typename?: 'Ailment';
      name?: string | null;
      isAny?: boolean | null;
      sys: { __typename?: 'Sys'; id: string };
      image?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
  heroPartyBuffCollection?: {
    __typename?: 'HeroPartyBuffCollection';
    items: Array<{
      __typename?: 'HeroPartyBuff';
      name?: string | null;
      sys: { __typename?: 'Sys'; id: string };
    } | null>;
  } | null;
};

export type GeneratedGetHeroImagesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GeneratedGetHeroImagesQuery = {
  __typename?: 'Query';
  heroCollection?: {
    __typename?: 'HeroCollection';
    items: Array<{
      __typename?: 'Hero';
      sys: { __typename?: 'Sys'; id: string };
      image?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
};

export const GetDataDocument = gql`
  query getData {
    heroCollection(limit: 200, order: [rarity_DESC, name_ASC]) {
      items {
        sys {
          id
        }
        name
        image {
          url(transform: { width: 150, height: 150 })
        }
        rarity
        role {
          sys {
            id
          }
          name
        }
        element {
          sys {
            id
          }
          name
        }
        chainAilmentStart {
          sys {
            id
          }
          name
          isAny
        }
        chainAilmentEnd {
          sys {
            id
          }
          name
        }
        partyBuff {
          sys {
            id
          }
          name
        }
        partyBuffValue
        partyBuff2 {
          sys {
            id
          }
          name
        }
        partyBuffValue2
        defaultWeapon {
          sys {
            id
          }
        }
        weaponCategoriesCollection(limit: 10) {
          items {
            sys {
              id
            }
          }
        }
      }
    }
    heroRoleCollection(limit: 4) {
      items {
        sys {
          id
        }
        name
        image {
          url
        }
      }
    }
    weaponCollection(limit: 1000, order: [rarity_ASC, name_ASC]) {
      items {
        sys {
          id
        }
        name
        element {
          sys {
            id
          }
          name
        }
        ailment {
          sys {
            id
          }
          name
        }
        category {
          sys {
            id
          }
          name
        }
        rarity
        image {
          url(transform: { width: 150, height: 150 })
        }
      }
    }
    weaponCategoryCollection(limit: 10) {
      items {
        sys {
          id
        }
        name
        image {
          url
        }
      }
    }
    elementCollection(limit: 10) {
      items {
        sys {
          id
        }
        name
        image {
          url
        }
        color
      }
    }
    ailmentCollection(limit: 4) {
      items {
        sys {
          id
        }
        name
        image {
          url(transform: { width: 30, height: 30 })
        }
        isAny
      }
    }
    heroPartyBuffCollection(limit: 30, order: prio_ASC) {
      items {
        sys {
          id
        }
        name
      }
    }
  }
`;
export const GetHeroImagesDocument = gql`
  query getHeroImages {
    heroCollection(limit: 200) {
      items {
        sys {
          id
        }
        image {
          url(transform: { width: 150, height: 150 })
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getData(
      variables?: GeneratedGetDataQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GeneratedGetDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GeneratedGetDataQuery>(GetDataDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getData'
      );
    },
    getHeroImages(
      variables?: GeneratedGetHeroImagesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GeneratedGetHeroImagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GeneratedGetHeroImagesQuery>(GetHeroImagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getHeroImages'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
