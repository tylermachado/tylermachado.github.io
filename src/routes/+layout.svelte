<script lang="ts">

	import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	
	let { children } = $props();
</script>

<div class="nav-container bg-gray-100 dark:bg-gray-800">
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

<div class="grid grid-cols-6 gap-4 max-w-5xl mx-auto">
{@render children()}
</div>