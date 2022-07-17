<script lang="ts">
	import { cart } from '../store/cart';
	import Modal from '../routes/CreateProduct.svelte'
	import {openModal} from 'svelte-modals'

	let quantity = 0;

	$: {
		let total = 0;
		$cart.forEach((products) => {
			total += products.quantity;
		});
		quantity = total;
	}
	function handleClick() {openModal(Modal)}

</script>

<div
	class="bg-gray-200 w-full py-4 shadow-grey-600 shadow-sm">
	<div class=" max-w-5xl mx-auto flex justify-between items-center">
		<div>
			<a href="/" class="text-4xl text-gray-600 font-bold logo">Product store</a>
		</div>
		<div>
			<nav class="flex items-center space-x-10">
				<a href="/" class="font-bold text-gray-700 hover:border-b-4 border-gray-500">Home</a>
				<a href="/About" class="font-bold text-gray-700 hover:border-b-4 border-gray-500">About</a>
				<button on:click={handleClick}>Create</button>
				<a
					href="/Cart"
					class="font-bold text-white px-3 py-2
                    bg-slate-500 p-2 rounded hover:bg-slate-700" 
                    >
                    Cart(<span class="font-bold">{quantity}</span>)
                </a>
			</nav>
		</div>
	</div>
</div>

<style>
	@import url('http://fonts.cdnfonts.com/css/sf-espresso-shack');

	.logo {
		font-family: 'SF Espresso Shack', sans-serif;
	}
</style>