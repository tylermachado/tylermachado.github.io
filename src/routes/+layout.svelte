<script lang="ts">

	import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
	import Fa6BrandsSquareBehance from '~icons/fa6-brands/square-behance';
	import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin';
	import Fa6BrandsSquareGithub from '~icons/fa6-brands/square-github';
	import Fa6BrandsSquareBluesky from '~icons/fa6-brands/square-bluesky';
	
	let { children } = $props();
</script>

<div class="nav-container">
	<Navbar class="max-w-5xl mx-auto bg-transparent">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tyler Machado</span>
		</NavBrand>
		<NavHamburger  />
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/portfolio">Portfolio</NavLi>
			<NavLi href="/resume">Resume/CV</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</div>

<div class="grid md:grid-cols-6 gap-4 max-w-5xl mx-auto">
{@render children()}
</div>

<footer class="h-[100px] w-full mt-32 bg-gray-800 text-white">
	<div class="max-w-5xl mx-auto">
    <span>© 2025 Tyler Machado</span>
		<div class="flex gap-2">
    	<Fa6BrandsLinkedin class="w-6 h-6 text-gray-400 dark:text-gray-500" />
    	<Fa6BrandsSquareGithub class="w-6 h-6 text-gray-400 dark:text-gray-500" />
    	<Fa6BrandsSquareBehance class="w-6 h-6 text-gray-400 dark:text-gray-500" />
			
    	<Fa6BrandsSquareBluesky class="w-6 h-6 text-gray-400 dark:text-gray-500" />
			
	</div>
	</footer>