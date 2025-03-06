<script lang="ts">

	import Fa6BrandsSquareBehance from '~icons/fa6-brands/square-behance';
	import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin';
	import Fa6BrandsSquareGithub from '~icons/fa6-brands/square-github';
	import Fa6BrandsSquareBluesky from '~icons/fa6-brands/square-bluesky';

  let { 
        lightIcons = true,
        className = '',
        size = 6
    } = $props<{
        lightIcons?: boolean,
        className?: string,
        size?: number
    }>();

  let iconColor = lightIcons ? 'text-gray-200 dark:text-gray-500' : 'text-gray-800 dark:text-gray-400';

  let sizeClasses = `w-${size} h-${size}`
  let iconClasses = `${sizeClasses} ${iconColor}`;
  </script>

<div class={`flex gap-2 ${className}`}>
  <a href='https://www.linkedin.com/in/tylermachado/' target='_blank' rel='noopener noreferrer' class='hover:text-blue-500'>
    <Fa6BrandsLinkedin class={iconClasses} />
  </a>
  <a href='//github.com/tylermachado' target='_blank' rel='noopener noreferrer' class='hover:text-gray-800 dark:hover:text-gray-400'>
    <Fa6BrandsSquareGithub class={iconClasses} />
  </a>
  <a href='https://www.behance.net/tymastudio' target='_blank' rel='noopener noreferrer' class='hover:text-blue-500'>
    <Fa6BrandsSquareBehance class={iconClasses} />
  </a>
  <a href='https://bsky.app/user/tylermachado.com' target='_blank' rel='noopener noreferrer' class='hover:text-blue-500'>
    <Fa6BrandsSquareBluesky class={iconClasses} />
  </a>
</div>