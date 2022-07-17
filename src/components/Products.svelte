<script lang="ts">
	import type { ProductType } from '../types/ProductType.type';
	import { addItem } from '../store/cart';

	export let product: ProductType;
</script>

<div class="shadow-md rounded">
	<div class="w-full rounded h-56 img-container">
		<a href={`/${product.id}`}>
			<img
				class="product-image w-full oject-cover h-full"
				src={product.image}
				alt="A picture of {product.name}"
			/>
		</a>
	</div>
	<div class="mt-3 product-info-container p-3">
        <div class="flex justify-between items-center">
            <a href={`/${product.id}`}>
                <h1 class="font-bold text-gray-700 text-md product-name">{product.name}</h1>
            </a>
            <p class="text-sm ">&#x20A6; {product.price}</p>
        </div>
		
		<p class="text-sm">{product['short-description']}</p>
		<button on:click={() => addItem(product)} class="bg-gray-700 mt-4 p-2 rounded text-white w-full"
			>Add to cart</button
		>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,700&display=swap');

	.img-container {
		width: 100%;
		background-color: black;
		overflow: hidden;
		position: relative;
	}
	.product-info-container {
		font-family: 'Poppins', sans-serif;
		display: flex;
		flex-direction: column;
		gap: 0.3em;
	}
	.product-image {
		transition: 0.5s all cubic-bezier(0.55, 0.06, 0.68, 0.19);
	}
	.product-image:hover {
		transform: rotate(15deg) scale(1.3);
		filter: opacity(0.8);
	}
</style>
