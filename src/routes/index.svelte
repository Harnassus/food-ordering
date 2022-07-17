<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import type { ProductType } from '../types/ProductType.type';
	import Products from '../components/Products.svelte';
	import loader from '../../static/Bean Eater-1s-200px.svg';

	let products: ProductType[];

	const getProducts = () => {
		axios
			.get(url)
			.then((res) => {
				setTimeout(() => {
					products = res.data;
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	onMount(() => getProducts());

	let url: string = 'http://localhost:3000/products';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="max-w-4xl mx-auto my-10">
	<h1 class="text-3xl font-bold text-gray-600">Products</h1>
	<div class="mt-7">
		{#if products}
			<div class="grid grid-cols-3 gap-10">
				{#each products as product (product.id)}
					<Products {product} />
				{/each}
			</div>
		{:else}
			<div class="mt-56 flex justify-center items-center">
				<div class="wavecontainer">
					<div class="wave" />
					<div class="wave" />
					<div class="wave" />
					<div class="wave" />
					<div class="wave" />
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.wave {
		margin-top: 15px;
		float: left;
		width: 18px;
		height: 40px;
		box-sizing: border-box;
		border: 2px solid rgb(61, 60, 60);
		margin-left: -2px;
		-webkit-animation: slide 0.6s infinite linear;
		animation: slide 0.6s infinite linear;
	}
	.wave:first-child {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.wave:last-child {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.wave:nth-child(2n + 1) {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}
	@keyframes slide {
		50% {
			margin-top: 25px;
		}
	}
</style>
