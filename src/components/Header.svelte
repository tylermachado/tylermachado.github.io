<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import PeaksTop from './PeaksTop.svelte';

  const pages = [
    {url: '', name: 'Home'},
    {url: 'portfolio', name: 'Portfolio'},
    {url: 'resume', name: "Resume/CV"},
    {url: 'contact', name: "Contact"}
  ]
</script>

<header class="bg-[var(--color-dark)]">
	<Navbar class="mx-auto max-w-5xl bg-transparent">
		<NavBrand href="/" class="text-[var(--color-light)] nav-brand">
			<img src="/images/icon.png" alt="Tyler Machado" class="mr-4 h-10 w-10 rounded-full" />
			<span class="self-center text-xl font-semibold whitespace-nowrap"
				>Tyler Machado</span
			>
		</NavBrand>
		<NavHamburger  />
		<NavUl>
      {#each pages as page}
        <NavLi
          href="{base}/{page.url}"
          class="text-[var(--color-light)]"
        >
          {page.name}
        </NavLi>
      {/each}
		</NavUl>
	</Navbar>
  <PeaksTop
    dark="var(--color-dark)"
    mid="var(--color-mid-50)"
    light="var(--color-light)"
  />
</header>