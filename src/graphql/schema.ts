/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
	/**
	 * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
	 *     compliant with the 'date-time' format outlined in section 5.6 of
	 *     the RFC 3339 profile of the ISO 8601 standard for representation
	 *     of dates and times using the Gregorian calendar.
	 */
	DateTime: any;
	/** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
	Dimension: any;
	/** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
	Quality: any;
	/** The 'HexColor' type represents color in `rgb:ffffff` string format. */
	HexColor: any;
};

export type Query = {
	__typename?: 'Query';
	asset?: Maybe<Asset>;
	assetCollection?: Maybe<AssetCollection>;
	heroPartyBuff?: Maybe<HeroPartyBuff>;
	heroPartyBuffCollection?: Maybe<HeroPartyBuffCollection>;
	weapon?: Maybe<Weapon>;
	weaponCollection?: Maybe<WeaponCollection>;
	weaponCategory?: Maybe<WeaponCategory>;
	weaponCategoryCollection?: Maybe<WeaponCategoryCollection>;
	element?: Maybe<Element>;
	elementCollection?: Maybe<ElementCollection>;
	heroRole?: Maybe<HeroRole>;
	heroRoleCollection?: Maybe<HeroRoleCollection>;
	hero?: Maybe<Hero>;
	heroCollection?: Maybe<HeroCollection>;
	ailment?: Maybe<Ailment>;
	ailmentCollection?: Maybe<AilmentCollection>;
	entryCollection?: Maybe<EntryCollection>;
};

export type QueryAssetArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryAssetCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<AssetFilter>;
	order?: Maybe<Array<Maybe<AssetOrder>>>;
};

export type QueryHeroPartyBuffArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryHeroPartyBuffCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<HeroPartyBuffFilter>;
	order?: Maybe<Array<Maybe<HeroPartyBuffOrder>>>;
};

export type QueryWeaponArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryWeaponCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<WeaponFilter>;
	order?: Maybe<Array<Maybe<WeaponOrder>>>;
};

export type QueryWeaponCategoryArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryWeaponCategoryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<WeaponCategoryFilter>;
	order?: Maybe<Array<Maybe<WeaponCategoryOrder>>>;
};

export type QueryElementArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryElementCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<ElementFilter>;
	order?: Maybe<Array<Maybe<ElementOrder>>>;
};

export type QueryHeroRoleArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryHeroRoleCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<HeroRoleFilter>;
	order?: Maybe<Array<Maybe<HeroRoleOrder>>>;
};

export type QueryHeroArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<HeroFilter>;
	order?: Maybe<Array<Maybe<HeroOrder>>>;
};

export type QueryAilmentArgs = {
	id: Scalars['String'];
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type QueryAilmentCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<AilmentFilter>;
	order?: Maybe<Array<Maybe<AilmentOrder>>>;
};

export type QueryEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
	where?: Maybe<EntryFilter>;
	order?: Maybe<Array<Maybe<EntryOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
	__typename?: 'Asset';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	title?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	contentType?: Maybe<Scalars['String']>;
	fileName?: Maybe<Scalars['String']>;
	size?: Maybe<Scalars['Int']>;
	url?: Maybe<Scalars['String']>;
	width?: Maybe<Scalars['Int']>;
	height?: Maybe<Scalars['Int']>;
	linkedFrom?: Maybe<AssetLinkingCollections>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
	transform?: Maybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
	__typename?: 'Sys';
	id: Scalars['String'];
	spaceId: Scalars['String'];
	environmentId: Scalars['String'];
	publishedAt?: Maybe<Scalars['DateTime']>;
	firstPublishedAt?: Maybe<Scalars['DateTime']>;
	publishedVersion?: Maybe<Scalars['Int']>;
};

export type ContentfulMetadata = {
	__typename?: 'ContentfulMetadata';
	tags: Array<Maybe<ContentfulTag>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
	__typename?: 'ContentfulTag';
	id?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

export type ImageTransformOptions = {
	/** Desired width in pixels. Defaults to the original image width. */
	width?: Maybe<Scalars['Dimension']>;
	/** Desired height in pixels. Defaults to the original image height. */
	height?: Maybe<Scalars['Dimension']>;
	/**
	 * Desired quality of the image in percents.
	 *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
	 */
	quality?: Maybe<Scalars['Quality']>;
	/**
	 * Desired corner radius in pixels.
	 *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
	 *         Defaults to `0`. Uses desired background color as padding color,
	 *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
	 */
	cornerRadius?: Maybe<Scalars['Int']>;
	/** Desired resize strategy. Defaults to `FIT`. */
	resizeStrategy?: Maybe<ImageResizeStrategy>;
	/** Desired resize focus area. Defaults to `CENTER`. */
	resizeFocus?: Maybe<ImageResizeFocus>;
	/**
	 * Desired background color, used with corner radius or `PAD` resize strategy.
	 *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
	 */
	backgroundColor?: Maybe<Scalars['HexColor']>;
	/** Desired image format. Defaults to the original image format. */
	format?: Maybe<ImageFormat>;
};

export enum ImageResizeStrategy {
	/** Resizes the image to fit into the specified dimensions. */
	Fit = 'FIT',
	/**
	 * Resizes the image to the specified dimensions, padding the image if needed.
	 *         Uses desired background color as padding color.
	 */
	Pad = 'PAD',
	/** Resizes the image to the specified dimensions, cropping the image if needed. */
	Fill = 'FILL',
	/** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
	Scale = 'SCALE',
	/** Crops a part of the original image to fit into the specified dimensions. */
	Crop = 'CROP',
	/** Creates a thumbnail from the image. */
	Thumb = 'THUMB',
}

export enum ImageResizeFocus {
	/** Focus the resizing on the center. */
	Center = 'CENTER',
	/** Focus the resizing on the top. */
	Top = 'TOP',
	/** Focus the resizing on the top right. */
	TopRight = 'TOP_RIGHT',
	/** Focus the resizing on the right. */
	Right = 'RIGHT',
	/** Focus the resizing on the bottom right. */
	BottomRight = 'BOTTOM_RIGHT',
	/** Focus the resizing on the bottom. */
	Bottom = 'BOTTOM',
	/** Focus the resizing on the bottom left. */
	BottomLeft = 'BOTTOM_LEFT',
	/** Focus the resizing on the left. */
	Left = 'LEFT',
	/** Focus the resizing on the top left. */
	TopLeft = 'TOP_LEFT',
	/** Focus the resizing on the largest face. */
	Face = 'FACE',
	/** Focus the resizing on the area containing all the faces. */
	Faces = 'FACES',
}

export enum ImageFormat {
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

export type AssetLinkingCollections = {
	__typename?: 'AssetLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
	weaponCollection?: Maybe<WeaponCollection>;
	weaponCategoryCollection?: Maybe<WeaponCategoryCollection>;
	elementCollection?: Maybe<ElementCollection>;
	heroRoleCollection?: Maybe<HeroRoleCollection>;
	heroCollection?: Maybe<HeroCollection>;
	ailmentCollection?: Maybe<AilmentCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsWeaponCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsWeaponCategoryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsElementCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsHeroRoleCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsAilmentCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
	__typename?: 'EntryCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<Entry>>;
};

export type Entry = {
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
};

export type WeaponCollection = {
	__typename?: 'WeaponCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<Weapon>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type Weapon = Entry & {
	__typename?: 'Weapon';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<WeaponLinkingCollections>;
	name?: Maybe<Scalars['String']>;
	ailment?: Maybe<Ailment>;
	element?: Maybe<Element>;
	category?: Maybe<WeaponCategory>;
	image?: Maybe<Asset>;
	rarity?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type WeaponLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type WeaponNameArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type WeaponAilmentArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type WeaponElementArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type WeaponCategoryArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type WeaponImageArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weapon) */
export type WeaponRarityArgs = {
	locale?: Maybe<Scalars['String']>;
};

export type WeaponLinkingCollections = {
	__typename?: 'WeaponLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
	heroCollection?: Maybe<HeroCollection>;
};

export type WeaponLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type WeaponLinkingCollectionsHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type HeroCollection = {
	__typename?: 'HeroCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<Hero>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type Hero = Entry & {
	__typename?: 'Hero';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<HeroLinkingCollections>;
	name?: Maybe<Scalars['String']>;
	rarity?: Maybe<Scalars['Int']>;
	role?: Maybe<HeroRole>;
	element?: Maybe<Element>;
	chainAilmentStart?: Maybe<Ailment>;
	chainAilmentEnd?: Maybe<Ailment>;
	partyBuff?: Maybe<HeroPartyBuff>;
	partyBuffValue?: Maybe<Scalars['Int']>;
	partyBuff2?: Maybe<HeroPartyBuff>;
	partyBuffValue2?: Maybe<Scalars['Int']>;
	defaultWeapon?: Maybe<Weapon>;
	weaponCategoriesCollection?: Maybe<HeroWeaponCategoriesCollection>;
	image?: Maybe<Asset>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroNameArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroRarityArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroRoleArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroElementArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroChainAilmentStartArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroChainAilmentEndArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroPartyBuffArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroPartyBuffValueArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroPartyBuff2Args = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroPartyBuffValue2Args = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroDefaultWeaponArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroWeaponCategoriesCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/hero) */
export type HeroImageArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type HeroLinkingCollections = {
	__typename?: 'HeroLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
};

export type HeroLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type HeroRole = Entry & {
	__typename?: 'HeroRole';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<HeroRoleLinkingCollections>;
	name?: Maybe<Scalars['String']>;
	image?: Maybe<Asset>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type HeroRoleLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type HeroRoleNameArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroRole) */
export type HeroRoleImageArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type HeroRoleLinkingCollections = {
	__typename?: 'HeroRoleLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
	heroCollection?: Maybe<HeroCollection>;
};

export type HeroRoleLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type HeroRoleLinkingCollectionsHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type Element = Entry & {
	__typename?: 'Element';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<ElementLinkingCollections>;
	name?: Maybe<Scalars['String']>;
	image?: Maybe<Asset>;
	color?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type ElementLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type ElementNameArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type ElementImageArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/element) */
export type ElementColorArgs = {
	locale?: Maybe<Scalars['String']>;
};

export type ElementLinkingCollections = {
	__typename?: 'ElementLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
	weaponCollection?: Maybe<WeaponCollection>;
	heroCollection?: Maybe<HeroCollection>;
};

export type ElementLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type ElementLinkingCollectionsWeaponCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type ElementLinkingCollectionsHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type Ailment = Entry & {
	__typename?: 'Ailment';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<AilmentLinkingCollections>;
	name?: Maybe<Scalars['String']>;
	image?: Maybe<Asset>;
	isAny?: Maybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type AilmentLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type AilmentNameArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type AilmentImageArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/ailment) */
export type AilmentIsAnyArgs = {
	locale?: Maybe<Scalars['String']>;
};

export type AilmentLinkingCollections = {
	__typename?: 'AilmentLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
	weaponCollection?: Maybe<WeaponCollection>;
	heroCollection?: Maybe<HeroCollection>;
};

export type AilmentLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AilmentLinkingCollectionsWeaponCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type AilmentLinkingCollectionsHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type HeroPartyBuff = Entry & {
	__typename?: 'HeroPartyBuff';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<HeroPartyBuffLinkingCollections>;
	name?: Maybe<Scalars['String']>;
	prio?: Maybe<Scalars['Int']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type HeroPartyBuffLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type HeroPartyBuffNameArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/heroPartyBuff) */
export type HeroPartyBuffPrioArgs = {
	locale?: Maybe<Scalars['String']>;
};

export type HeroPartyBuffLinkingCollections = {
	__typename?: 'HeroPartyBuffLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
	heroCollection?: Maybe<HeroCollection>;
};

export type HeroPartyBuffLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type HeroPartyBuffLinkingCollectionsHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type HeroWeaponCategoriesCollection = {
	__typename?: 'HeroWeaponCategoriesCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<WeaponCategory>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type WeaponCategory = Entry & {
	__typename?: 'WeaponCategory';
	sys: Sys;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<WeaponCategoryLinkingCollections>;
	name?: Maybe<Scalars['String']>;
	image?: Maybe<Asset>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type WeaponCategoryLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type WeaponCategoryNameArgs = {
	locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyrmlfwxhp4g/content_types/weaponCategory) */
export type WeaponCategoryImageArgs = {
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type WeaponCategoryLinkingCollections = {
	__typename?: 'WeaponCategoryLinkingCollections';
	entryCollection?: Maybe<EntryCollection>;
	weaponCollection?: Maybe<WeaponCollection>;
	heroCollection?: Maybe<HeroCollection>;
};

export type WeaponCategoryLinkingCollectionsEntryCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type WeaponCategoryLinkingCollectionsWeaponCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type WeaponCategoryLinkingCollectionsHeroCollectionArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	preview?: Maybe<Scalars['Boolean']>;
	locale?: Maybe<Scalars['String']>;
};

export type WeaponCategoryCollection = {
	__typename?: 'WeaponCategoryCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<WeaponCategory>>;
};

export type ElementCollection = {
	__typename?: 'ElementCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<Element>>;
};

export type HeroRoleCollection = {
	__typename?: 'HeroRoleCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<HeroRole>>;
};

export type AilmentCollection = {
	__typename?: 'AilmentCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<Ailment>>;
};

export type AssetCollection = {
	__typename?: 'AssetCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	title_exists?: Maybe<Scalars['Boolean']>;
	title?: Maybe<Scalars['String']>;
	title_not?: Maybe<Scalars['String']>;
	title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	title_contains?: Maybe<Scalars['String']>;
	title_not_contains?: Maybe<Scalars['String']>;
	description_exists?: Maybe<Scalars['Boolean']>;
	description?: Maybe<Scalars['String']>;
	description_not?: Maybe<Scalars['String']>;
	description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	description_contains?: Maybe<Scalars['String']>;
	description_not_contains?: Maybe<Scalars['String']>;
	url_exists?: Maybe<Scalars['Boolean']>;
	url?: Maybe<Scalars['String']>;
	url_not?: Maybe<Scalars['String']>;
	url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	url_contains?: Maybe<Scalars['String']>;
	url_not_contains?: Maybe<Scalars['String']>;
	size_exists?: Maybe<Scalars['Boolean']>;
	size?: Maybe<Scalars['Int']>;
	size_not?: Maybe<Scalars['Int']>;
	size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	size_gt?: Maybe<Scalars['Int']>;
	size_gte?: Maybe<Scalars['Int']>;
	size_lt?: Maybe<Scalars['Int']>;
	size_lte?: Maybe<Scalars['Int']>;
	contentType_exists?: Maybe<Scalars['Boolean']>;
	contentType?: Maybe<Scalars['String']>;
	contentType_not?: Maybe<Scalars['String']>;
	contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	contentType_contains?: Maybe<Scalars['String']>;
	contentType_not_contains?: Maybe<Scalars['String']>;
	fileName_exists?: Maybe<Scalars['Boolean']>;
	fileName?: Maybe<Scalars['String']>;
	fileName_not?: Maybe<Scalars['String']>;
	fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	fileName_contains?: Maybe<Scalars['String']>;
	fileName_not_contains?: Maybe<Scalars['String']>;
	width_exists?: Maybe<Scalars['Boolean']>;
	width?: Maybe<Scalars['Int']>;
	width_not?: Maybe<Scalars['Int']>;
	width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	width_gt?: Maybe<Scalars['Int']>;
	width_gte?: Maybe<Scalars['Int']>;
	width_lt?: Maybe<Scalars['Int']>;
	width_lte?: Maybe<Scalars['Int']>;
	height_exists?: Maybe<Scalars['Boolean']>;
	height?: Maybe<Scalars['Int']>;
	height_not?: Maybe<Scalars['Int']>;
	height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	height_gt?: Maybe<Scalars['Int']>;
	height_gte?: Maybe<Scalars['Int']>;
	height_lt?: Maybe<Scalars['Int']>;
	height_lte?: Maybe<Scalars['Int']>;
	OR?: Maybe<Array<Maybe<AssetFilter>>>;
	AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
	id_exists?: Maybe<Scalars['Boolean']>;
	id?: Maybe<Scalars['String']>;
	id_not?: Maybe<Scalars['String']>;
	id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	id_contains?: Maybe<Scalars['String']>;
	id_not_contains?: Maybe<Scalars['String']>;
	publishedAt_exists?: Maybe<Scalars['Boolean']>;
	publishedAt?: Maybe<Scalars['DateTime']>;
	publishedAt_not?: Maybe<Scalars['DateTime']>;
	publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
	publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
	publishedAt_gt?: Maybe<Scalars['DateTime']>;
	publishedAt_gte?: Maybe<Scalars['DateTime']>;
	publishedAt_lt?: Maybe<Scalars['DateTime']>;
	publishedAt_lte?: Maybe<Scalars['DateTime']>;
	firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
	firstPublishedAt?: Maybe<Scalars['DateTime']>;
	firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
	firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
	firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
	firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
	firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
	firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
	firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
	publishedVersion_exists?: Maybe<Scalars['Boolean']>;
	publishedVersion?: Maybe<Scalars['Float']>;
	publishedVersion_not?: Maybe<Scalars['Float']>;
	publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
	publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
	publishedVersion_gt?: Maybe<Scalars['Float']>;
	publishedVersion_gte?: Maybe<Scalars['Float']>;
	publishedVersion_lt?: Maybe<Scalars['Float']>;
	publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export type ContentfulMetadataFilter = {
	tags_exists?: Maybe<Scalars['Boolean']>;
	tags?: Maybe<ContentfulMetadataTagsFilter>;
};

export type ContentfulMetadataTagsFilter = {
	id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
	id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
	id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum AssetOrder {
	UrlAsc = 'url_ASC',
	UrlDesc = 'url_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC',
	ContentTypeAsc = 'contentType_ASC',
	ContentTypeDesc = 'contentType_DESC',
	FileNameAsc = 'fileName_ASC',
	FileNameDesc = 'fileName_DESC',
	WidthAsc = 'width_ASC',
	WidthDesc = 'width_DESC',
	HeightAsc = 'height_ASC',
	HeightDesc = 'height_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type HeroPartyBuffCollection = {
	__typename?: 'HeroPartyBuffCollection';
	total: Scalars['Int'];
	skip: Scalars['Int'];
	limit: Scalars['Int'];
	items: Array<Maybe<HeroPartyBuff>>;
};

export type HeroPartyBuffFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	prio_exists?: Maybe<Scalars['Boolean']>;
	prio?: Maybe<Scalars['Int']>;
	prio_not?: Maybe<Scalars['Int']>;
	prio_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	prio_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	prio_gt?: Maybe<Scalars['Int']>;
	prio_gte?: Maybe<Scalars['Int']>;
	prio_lt?: Maybe<Scalars['Int']>;
	prio_lte?: Maybe<Scalars['Int']>;
	OR?: Maybe<Array<Maybe<HeroPartyBuffFilter>>>;
	AND?: Maybe<Array<Maybe<HeroPartyBuffFilter>>>;
};

export enum HeroPartyBuffOrder {
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PrioAsc = 'prio_ASC',
	PrioDesc = 'prio_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type WeaponFilter = {
	ailment?: Maybe<CfAilmentNestedFilter>;
	element?: Maybe<CfElementNestedFilter>;
	category?: Maybe<CfWeaponCategoryNestedFilter>;
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	ailment_exists?: Maybe<Scalars['Boolean']>;
	element_exists?: Maybe<Scalars['Boolean']>;
	category_exists?: Maybe<Scalars['Boolean']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	rarity_exists?: Maybe<Scalars['Boolean']>;
	rarity?: Maybe<Scalars['String']>;
	rarity_not?: Maybe<Scalars['String']>;
	rarity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	rarity_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	rarity_contains?: Maybe<Scalars['String']>;
	rarity_not_contains?: Maybe<Scalars['String']>;
	OR?: Maybe<Array<Maybe<WeaponFilter>>>;
	AND?: Maybe<Array<Maybe<WeaponFilter>>>;
};

export type CfAilmentNestedFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	isAny_exists?: Maybe<Scalars['Boolean']>;
	isAny?: Maybe<Scalars['Boolean']>;
	isAny_not?: Maybe<Scalars['Boolean']>;
	OR?: Maybe<Array<Maybe<CfAilmentNestedFilter>>>;
	AND?: Maybe<Array<Maybe<CfAilmentNestedFilter>>>;
};

export type CfElementNestedFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	color_exists?: Maybe<Scalars['Boolean']>;
	color?: Maybe<Scalars['String']>;
	color_not?: Maybe<Scalars['String']>;
	color_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	color_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	color_contains?: Maybe<Scalars['String']>;
	color_not_contains?: Maybe<Scalars['String']>;
	OR?: Maybe<Array<Maybe<CfElementNestedFilter>>>;
	AND?: Maybe<Array<Maybe<CfElementNestedFilter>>>;
};

export type CfWeaponCategoryNestedFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	OR?: Maybe<Array<Maybe<CfWeaponCategoryNestedFilter>>>;
	AND?: Maybe<Array<Maybe<CfWeaponCategoryNestedFilter>>>;
};

export enum WeaponOrder {
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	RarityAsc = 'rarity_ASC',
	RarityDesc = 'rarity_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type WeaponCategoryFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	OR?: Maybe<Array<Maybe<WeaponCategoryFilter>>>;
	AND?: Maybe<Array<Maybe<WeaponCategoryFilter>>>;
};

export enum WeaponCategoryOrder {
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ElementFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	color_exists?: Maybe<Scalars['Boolean']>;
	color?: Maybe<Scalars['String']>;
	color_not?: Maybe<Scalars['String']>;
	color_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	color_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	color_contains?: Maybe<Scalars['String']>;
	color_not_contains?: Maybe<Scalars['String']>;
	OR?: Maybe<Array<Maybe<ElementFilter>>>;
	AND?: Maybe<Array<Maybe<ElementFilter>>>;
};

export enum ElementOrder {
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	ColorAsc = 'color_ASC',
	ColorDesc = 'color_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type HeroRoleFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	OR?: Maybe<Array<Maybe<HeroRoleFilter>>>;
	AND?: Maybe<Array<Maybe<HeroRoleFilter>>>;
};

export enum HeroRoleOrder {
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type HeroFilter = {
	role?: Maybe<CfHeroRoleNestedFilter>;
	element?: Maybe<CfElementNestedFilter>;
	chainAilmentStart?: Maybe<CfAilmentNestedFilter>;
	chainAilmentEnd?: Maybe<CfAilmentNestedFilter>;
	partyBuff?: Maybe<CfHeroPartyBuffNestedFilter>;
	partyBuff2?: Maybe<CfHeroPartyBuffNestedFilter>;
	defaultWeapon?: Maybe<CfWeaponNestedFilter>;
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	rarity_exists?: Maybe<Scalars['Boolean']>;
	rarity?: Maybe<Scalars['Int']>;
	rarity_not?: Maybe<Scalars['Int']>;
	rarity_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	rarity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	rarity_gt?: Maybe<Scalars['Int']>;
	rarity_gte?: Maybe<Scalars['Int']>;
	rarity_lt?: Maybe<Scalars['Int']>;
	rarity_lte?: Maybe<Scalars['Int']>;
	role_exists?: Maybe<Scalars['Boolean']>;
	element_exists?: Maybe<Scalars['Boolean']>;
	chainAilmentStart_exists?: Maybe<Scalars['Boolean']>;
	chainAilmentEnd_exists?: Maybe<Scalars['Boolean']>;
	partyBuff_exists?: Maybe<Scalars['Boolean']>;
	partyBuffValue_exists?: Maybe<Scalars['Boolean']>;
	partyBuffValue?: Maybe<Scalars['Int']>;
	partyBuffValue_not?: Maybe<Scalars['Int']>;
	partyBuffValue_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	partyBuffValue_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	partyBuffValue_gt?: Maybe<Scalars['Int']>;
	partyBuffValue_gte?: Maybe<Scalars['Int']>;
	partyBuffValue_lt?: Maybe<Scalars['Int']>;
	partyBuffValue_lte?: Maybe<Scalars['Int']>;
	partyBuff2_exists?: Maybe<Scalars['Boolean']>;
	partyBuffValue2_exists?: Maybe<Scalars['Boolean']>;
	partyBuffValue2?: Maybe<Scalars['Int']>;
	partyBuffValue2_not?: Maybe<Scalars['Int']>;
	partyBuffValue2_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	partyBuffValue2_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	partyBuffValue2_gt?: Maybe<Scalars['Int']>;
	partyBuffValue2_gte?: Maybe<Scalars['Int']>;
	partyBuffValue2_lt?: Maybe<Scalars['Int']>;
	partyBuffValue2_lte?: Maybe<Scalars['Int']>;
	defaultWeapon_exists?: Maybe<Scalars['Boolean']>;
	weaponCategoriesCollection_exists?: Maybe<Scalars['Boolean']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	OR?: Maybe<Array<Maybe<HeroFilter>>>;
	AND?: Maybe<Array<Maybe<HeroFilter>>>;
};

export type CfHeroRoleNestedFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	OR?: Maybe<Array<Maybe<CfHeroRoleNestedFilter>>>;
	AND?: Maybe<Array<Maybe<CfHeroRoleNestedFilter>>>;
};

export type CfHeroPartyBuffNestedFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	prio_exists?: Maybe<Scalars['Boolean']>;
	prio?: Maybe<Scalars['Int']>;
	prio_not?: Maybe<Scalars['Int']>;
	prio_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	prio_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	prio_gt?: Maybe<Scalars['Int']>;
	prio_gte?: Maybe<Scalars['Int']>;
	prio_lt?: Maybe<Scalars['Int']>;
	prio_lte?: Maybe<Scalars['Int']>;
	OR?: Maybe<Array<Maybe<CfHeroPartyBuffNestedFilter>>>;
	AND?: Maybe<Array<Maybe<CfHeroPartyBuffNestedFilter>>>;
};

export type CfWeaponNestedFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	ailment_exists?: Maybe<Scalars['Boolean']>;
	element_exists?: Maybe<Scalars['Boolean']>;
	category_exists?: Maybe<Scalars['Boolean']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	rarity_exists?: Maybe<Scalars['Boolean']>;
	rarity?: Maybe<Scalars['String']>;
	rarity_not?: Maybe<Scalars['String']>;
	rarity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	rarity_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	rarity_contains?: Maybe<Scalars['String']>;
	rarity_not_contains?: Maybe<Scalars['String']>;
	OR?: Maybe<Array<Maybe<CfWeaponNestedFilter>>>;
	AND?: Maybe<Array<Maybe<CfWeaponNestedFilter>>>;
};

export enum HeroOrder {
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	RarityAsc = 'rarity_ASC',
	RarityDesc = 'rarity_DESC',
	PartyBuffValueAsc = 'partyBuffValue_ASC',
	PartyBuffValueDesc = 'partyBuffValue_DESC',
	PartyBuffValue2Asc = 'partyBuffValue2_ASC',
	PartyBuffValue2Desc = 'partyBuffValue2_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AilmentFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name_exists?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	name_not?: Maybe<Scalars['String']>;
	name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
	name_contains?: Maybe<Scalars['String']>;
	name_not_contains?: Maybe<Scalars['String']>;
	image_exists?: Maybe<Scalars['Boolean']>;
	isAny_exists?: Maybe<Scalars['Boolean']>;
	isAny?: Maybe<Scalars['Boolean']>;
	isAny_not?: Maybe<Scalars['Boolean']>;
	OR?: Maybe<Array<Maybe<AilmentFilter>>>;
	AND?: Maybe<Array<Maybe<AilmentFilter>>>;
};

export enum AilmentOrder {
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	IsAnyAsc = 'isAny_ASC',
	IsAnyDesc = 'isAny_DESC',
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type EntryFilter = {
	sys?: Maybe<SysFilter>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	OR?: Maybe<Array<Maybe<EntryFilter>>>;
	AND?: Maybe<Array<Maybe<EntryFilter>>>;
};

export enum EntryOrder {
	SysIdAsc = 'sys_id_ASC',
	SysIdDesc = 'sys_id_DESC',
	SysPublishedAtAsc = 'sys_publishedAt_ASC',
	SysPublishedAtDesc = 'sys_publishedAt_DESC',
	SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
	SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
	SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
	SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type GetDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetDataQuery = { __typename?: 'Query' } & {
	heroCollection?: Maybe<
		{ __typename?: 'HeroCollection' } & {
			items: Array<
				Maybe<
					{ __typename?: 'Hero' } & Pick<Hero, 'name' | 'rarity' | 'partyBuffValue' | 'partyBuffValue2'> & {
							sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
							image?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>>;
							role?: Maybe<
								{ __typename?: 'HeroRole' } & Pick<HeroRole, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							element?: Maybe<
								{ __typename?: 'Element' } & Pick<Element, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							chainAilmentStart?: Maybe<
								{ __typename?: 'Ailment' } & Pick<Ailment, 'name' | 'isAny'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							chainAilmentEnd?: Maybe<
								{ __typename?: 'Ailment' } & Pick<Ailment, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							partyBuff?: Maybe<
								{ __typename?: 'HeroPartyBuff' } & Pick<HeroPartyBuff, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							partyBuff2?: Maybe<
								{ __typename?: 'HeroPartyBuff' } & Pick<HeroPartyBuff, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							defaultWeapon?: Maybe<
								{ __typename?: 'Weapon' } & { sys: { __typename?: 'Sys' } & Pick<Sys, 'id'> }
							>;
							weaponCategoriesCollection?: Maybe<
								{ __typename?: 'HeroWeaponCategoriesCollection' } & {
									items: Array<
										Maybe<
											{ __typename?: 'WeaponCategory' } & {
												sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
											}
										>
									>;
								}
							>;
						}
				>
			>;
		}
	>;
	heroRoleCollection?: Maybe<
		{ __typename?: 'HeroRoleCollection' } & {
			items: Array<
				Maybe<
					{ __typename?: 'HeroRole' } & Pick<HeroRole, 'name'> & {
							sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
							image?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>>;
						}
				>
			>;
		}
	>;
	weaponCollection?: Maybe<
		{ __typename?: 'WeaponCollection' } & {
			items: Array<
				Maybe<
					{ __typename?: 'Weapon' } & Pick<Weapon, 'name' | 'rarity'> & {
							sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
							element?: Maybe<
								{ __typename?: 'Element' } & Pick<Element, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							ailment?: Maybe<
								{ __typename?: 'Ailment' } & Pick<Ailment, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							category?: Maybe<
								{ __typename?: 'WeaponCategory' } & Pick<WeaponCategory, 'name'> & {
										sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
									}
							>;
							image?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>>;
						}
				>
			>;
		}
	>;
	weaponCategoryCollection?: Maybe<
		{ __typename?: 'WeaponCategoryCollection' } & {
			items: Array<
				Maybe<
					{ __typename?: 'WeaponCategory' } & Pick<WeaponCategory, 'name'> & {
							sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
							image?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>>;
						}
				>
			>;
		}
	>;
	elementCollection?: Maybe<
		{ __typename?: 'ElementCollection' } & {
			items: Array<
				Maybe<
					{ __typename?: 'Element' } & Pick<Element, 'name' | 'color'> & {
							sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
							image?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>>;
						}
				>
			>;
		}
	>;
	ailmentCollection?: Maybe<
		{ __typename?: 'AilmentCollection' } & {
			items: Array<
				Maybe<
					{ __typename?: 'Ailment' } & Pick<Ailment, 'name' | 'isAny'> & {
							sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
							image?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>>;
						}
				>
			>;
		}
	>;
	heroPartyBuffCollection?: Maybe<
		{ __typename?: 'HeroPartyBuffCollection' } & {
			items: Array<
				Maybe<
					{ __typename?: 'HeroPartyBuff' } & Pick<HeroPartyBuff, 'name'> & {
							sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>;
						}
				>
			>;
		}
	>;
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
					url
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
					url
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

export type SdkFunctionWrapper = <T>(
	action: (requestHeaders?: Record<string, string>) => Promise<T>,
	operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
	return {
		getData(variables?: GetDataQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetDataQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetDataQuery>(GetDataDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				'getData'
			);
		},
	};
}
export type Sdk = ReturnType<typeof getSdk>;
