<script lang="ts">
	import '../app.css';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<Header />

<main class="site-container">
	<div class="content mx-auto my-10 max-w-5xl grid gap-4 md:grid-cols-6 px-5 md:px-0">
		{@render children()}
	</div>
</main>


<Footer />
