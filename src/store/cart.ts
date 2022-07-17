import { writable } from 'svelte/store';
import type { CartItem } from '../types/cartItems.type';
import type { ProductType } from '../types/ProductType.type';
import { browser } from '$app/env';

export const cart = writable<CartItem[]>([]);

export const addItem = (products: ProductType) => {
	cart.update((product) => {
		const newItems = [...product];
		console.log(newItems);
		
		const itemInStore = newItems.find((i) => i.products.id === products.id);
		if (itemInStore) {
			itemInStore.quantity++;
		} else {
			newItems.push({ products, quantity: 1 });
		}
		if (!browser) {
			throw new Error('Browser not found');
		}
		localStorage.setItem('cart', JSON.stringify(newItems));
		return newItems;
	});
};

export const removeItem = (products: ProductType) => {
	cart.update((product) => {
		const newItems = [...product];
		const itemInStore = newItems.find((i) => i.products.id === products.id);
		if (itemInStore) {
			if (itemInStore.quantity > 1) {
				itemInStore.quantity--;
			} else {
				newItems.splice(newItems.indexOf(itemInStore), 1);
			}
		}
		if (!browser) {
			throw new Error('Browser not found');
		}
		localStorage.setItem('cart', JSON.stringify(newItems));
		return newItems;
	});
};

export const initializeCart = () => {
	if (browser) {
		const items = localStorage.getItem('cart');
		if (items) {
			cart.set(JSON.parse(items));
		}
	}
};
