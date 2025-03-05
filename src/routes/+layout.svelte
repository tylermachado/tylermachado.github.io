<script lang="ts">

	import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import SocialIcons from '../components/SocialIcons.svelte';
	
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

<div class="grid md:grid-cols-6 gap-4 max-w-5xl mx-auto content">
{@render children()}
</div>

<footer class="h-[100px] w-full mt-32 bg-green-950 text-white align-right">
	<div class="max-w-5xl mx-auto">
    <span>© 2025 Tyler Machado</span>
		<SocialIcons lightIcons={false} />
	</div>
	</footer>