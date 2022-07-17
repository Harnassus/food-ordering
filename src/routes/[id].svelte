<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import axios from 'axios';

	import MdArrowBack from 'svelte-icons/md/MdArrowBack.svelte'

	import { addItem } from '../store/cart';
	import type { ProductType } from '../types/ProductType.type';

	let product: ProductType;

	const getProduct = () => {
		axios(`http://localhost:3000/products/${$page.params.id}`)
			.then((res) => {
				product = res.data;
			})
			.catch((err) => {
				console.log(err);
			});
	};

	onMount(() => getProduct());
</script>

<svelte:head>
	{#if product}
		<title>{product.name}</title>
	{:else}
		<title>Product not found</title>
	{/if}
</svelte:head>

<div class="flex justify-center items-center m-32">
	{#if product}
		<div class="w-[500px] h-[400px] rounded">
			<img src={product.image} class="w-full h-full rounded" alt="" />
		</div>
		<div class="m-7 flex flex-col gap-10 w-[50%] ">
			<div class="flex flex-col gap-7">
				<h1 class="font-bold text-4xl text-gray-700">{product.name}</h1>
				<p class="font-bold text-gray-500">Price: &#8358;{product.price}</p>
			</div>
			<div class="flex flex-col gap-4">
				<h1 class="font-bold text-xl text-gray-700 ">Description</h1>
				<p class="text-md text-gray-500">{product['full-description']}</p>
			</div>
			<div class="flex justify-between items-center">
				<div class="w-10 h-6 flex items-center text-gray-600">
					<a href="/">
					 <MdArrowBack  />
					</a>
					
				</div>
				<button
					on:click={() => addItem(product)}
					class="bg-slate-500 p-3 text-white rounded hover:bg-slate-700">Add to cart</button
				>
			</div>
		</div>
	{/if}
</div>
