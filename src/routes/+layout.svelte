<script lang="ts">
    import { base } from '$app/paths';

	import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import SocialIcons from '../components/SocialIcons.svelte';
	
	let { children } = $props();
</script>

<main class="site-container">
<div class="nav-container">
	<Navbar class="max-w-5xl mx-auto bg-transparent">
		<NavBrand href="/">
			<img src="/images/icon.png" alt="Tyler Machado" class="h-10 w-10 rounded-full mr-4" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tyler Machado</span>
		</NavBrand>
		<NavHamburger  />
		<NavUl>
			<NavLi href="{base}/">Home</NavLi>
			<NavLi href="{base}/portfolio">Portfolio</NavLi>
			<NavLi href="{base}/resume">Resume/CV</NavLi>
			<NavLi href="{base}/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</div>

<div class="grid md:grid-cols-6 gap-4 max-w-5xl mx-auto content">
{@render children()}
</div>
</main>

<footer class="h-[100px] w-full px-10 py-5 bg-green-950 text-white align-right">
	<div class="max-w-5xl mx-auto">
    <span>© 2025 Tyler Machado</span>
		<SocialIcons lightIcons />
	</div>
	</footer>