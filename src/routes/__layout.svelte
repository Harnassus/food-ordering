<script lang="ts">
	import { onMount } from 'svelte';


	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import { initializeCart } from '../store/cart';

	onMount(() => {
		initializeCart();
	});
</script>

<Navbar />
<slot />
