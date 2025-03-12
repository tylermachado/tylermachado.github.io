<script lang="ts">
	import '../app.css';
  import SocialIcons from './SocialIcons.svelte';
  import PeaksBottom from './PeaksBottom.svelte';

</script>
<footer class="align-right w-full bg-[var(--color-dark)] text-white">
  <PeaksBottom
    dark="var(--color-dark)"
    mid="var(--color-mid-50)"
    light="var(--color-light)"
  />
	<div class="mx-auto mt-4 mb-4 max-w-5xl">
		<span class="text-sm">© Designed and built by Tyler Machado in 2025.</span>
		<SocialIcons lightIcons className="mt-2" />
	</div>
</footer>