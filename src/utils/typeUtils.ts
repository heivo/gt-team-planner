/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

/**
 * TS declarations copied from https://stackoverflow.com/questions/55539387/deep-omit-with-typescript
 */

/** Union of primitives to skip with deep omit utilities. */
type Primitive = string | Function | number | boolean | Symbol | undefined | null;

/** Deeply omit members of an array of interface or array of type. */
type DeepOmitArray<T extends any[], K> = {
	[P in keyof T]: DeepOmit<T[P], K>;
};

/** Deeply omit members of an interface or type. */
export type DeepOmit<T, K> = T extends Primitive
	? T
	: {
			[P in Exclude<keyof T, K>]: T[P] extends infer TP // extra level of indirection needed to trigger homomorhic behavior // distribute over unions
				? TP extends Primitive
					? TP // leave primitives and functions alone
					: TP extends any[]
					? DeepOmitArray<TP, K> // array special handling
					: DeepOmit<TP, K>
				: never;
	  };

export const isNotNull = <T>(arg: T): arg is Exclude<T, null> => arg !== null;
