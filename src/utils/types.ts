type Maybe<T> = T | null;

/**
 * Removes undefined and null from type T and recursively from all of its children IF it extends Maybe<O>.
 */
export type DeepNonNullable<T> = {
	[P in keyof T]-?: T[P] extends Maybe<infer O> ? DeepNonNullable<O> : T[P];
};
