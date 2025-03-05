<script lang="ts">

	import Fa6BrandsSquareBehance from '~icons/fa6-brands/square-behance';
	import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin';
	import Fa6BrandsSquareGithub from '~icons/fa6-brands/square-github';
	import Fa6BrandsSquareBluesky from '~icons/fa6-brands/square-bluesky';

  let { 
        lightIcons = true 
    } = $props<{
        lightIcons?: boolean
    }>();

  let iconColor = lightIcons ? 'text-gray-200 dark:text-gray-500' : 'text-gray-800 dark:text-gray-400';
  </script>

<div class="flex gap-2">
  <Fa6BrandsLinkedin class={`w-6 h-6  ${iconColor}`} />
  <Fa6BrandsSquareGithub class={`w-6 h-6  ${iconColor}`} />
  <Fa6BrandsSquareBehance class={`w-6 h-6  ${iconColor}`} />
  <Fa6BrandsSquareBluesky class={`w-6 h-6  ${iconColor}`} />
</div>