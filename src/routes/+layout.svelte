<script lang="ts">
	import { base } from '$app/paths';

	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import SocialIcons from '../components/SocialIcons.svelte';

	let { children } = $props();
</script>

<header>
	<Navbar class="mx-auto max-w-5xl bg-transparent">
		<NavBrand href="/">
			<img src="/images/icon.png" alt="Tyler Machado" class="mr-4 h-10 w-10 rounded-full" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>Tyler Machado</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi href="{base}/">Home</NavLi>
			<NavLi href="{base}/portfolio">Portfolio</NavLi>
			<NavLi href="{base}/resume">Resume/CV</NavLi>
			<NavLi href="{base}/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</header>

<main class="site-container">
	

	<div class="content mx-auto grid max-w-5xl gap-4 md:grid-cols-6">
		{@render children()}
	</div>
</main>

<footer class="align-right h-[100px] w-full bg-green-950 px-10 py-5 text-white">
	<div class="mx-auto max-w-5xl">
		<span class="text-sm">© 2025 Tyler Machado</span>
		<SocialIcons lightIcons />
	</div>
</footer>
