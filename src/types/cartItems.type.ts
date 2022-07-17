import type { ProductType } from './ProductType.type';

export type CartItem = {
	products: ProductType;
	quantity: number;
};
