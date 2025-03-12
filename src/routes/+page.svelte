<script>
    import { base } from '$app/paths';
  import { Alert } from 'flowbite-svelte';
  import SocialIcons from '../components/SocialIcons.svelte';
</script>

<div class="col-span-1">

</div>

<div class="px-5 col-span-5 mb-20">
  <img src="/images/headshot.jpg" alt="Tyler Machado" class="rounded-2xl md:w-48 md:h-48 mb-8 hidden md:block mx-auto md:float-right md:mx-8" />

  <p class="text-2xl font-bold">Hi, I'm Tyler.</p>

  <p>I live in Boston, MA and I make websites, dashboards, data visualizations, and design systems.</p>

  <p>I’ve been a web developer and design technologist for more than a decade, helping mission-driven organizations tell stories and inform people through digital, visual, data-driven experiences. For me that’s meant creating data-driven interactive essays, fleshing out design systems for modern rebrands, auditing and implementing web accessibility improvements, and hacking on WordPress to help customize and improve the CMS experience — to name just some of the work that I like to do.</p>

  <p>I’m currently working on freelance projects, and I have capacity for more contract work or fractional roles for spring/summer 2025. <a href="{base}/contact">Want to work together?</a></p>

  <SocialIcons lightIcons={false} className={"mt-5"} size={8} />

</div>