<script>
    import { base } from '$app/paths';
  import { Alert } from 'flowbite-svelte';
  import SocialIcons from '../components/SocialIcons.svelte';
</script>

<div class="col-span-1">

</div>

<div class="px-5 col-span-5 mb-20">
  <img src="/images/headshot.jpg" alt="Tyler Machado" class="rounded-2xl md:w-48 md:h-48 mb-8 mt-10 hidden md:block mx-auto md:float-right md:mx-8" />

  <p class="text-2xl font-bold mt-10">Hi, I'm Tyler.</p>

  <p>I live in Boston, MA and I make websites, dashboards, data visualizations, and design systems.</p>

  <p>I’ve been a web developer and design technologist for more than a decade. I help nonprofits and independent media outlets create engaging, data-driven visual content for readers and delightful, functional CMS experiences for editors.</p>

  <p>I’m currently working on freelance projects, and I have capacity for more contract work or fractional roles for spring/summer 2025. <a href="{base}/contact">Want to work together?</a></p>

  <SocialIcons lightIcons={false} className={"mt-5"} size={8} />

</div>