<script lang="ts">

	import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	
	let { children } = $props();
</script>

<Navbar>
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

{@render children()}
