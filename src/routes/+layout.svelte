<script lang="ts">
	import '../app.css';
	import SocialIcons from '../components/SocialIcons.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<Header />

<main class="site-container">
	<div class="content mx-auto grid max-w-5xl gap-4 md:grid-cols-6">
		{@render children()}
	</div>
</main>


<Footer />
