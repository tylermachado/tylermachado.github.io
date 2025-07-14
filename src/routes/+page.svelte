<script>
  import { base } from '$app/paths';
  import SocialIcons from '../components/SocialIcons.svelte';
</script>

<div class="col-span-1">
</div>

<div class="col-span-4">
  <img src="/images/headshot.jpg" alt="Tyler Machado" class="rounded-2xl md:w-48 md:h-48 mb-8 hidden md:block mx-auto md:float-right md:mx-8" />

  <p class="text-2xl">Hi, I'm Tyler and <span class="font-bold">I'm a creative technologist</span> from Boston.</p>

  <p>I design and build digital tools — including data visualizations, dashboards, and websites — that help mission-driven organizations tell stories and engage their communities. Across 10+ years of working on the web, my career has included:</p>

  <ul>
    <li>📊 Designing, building and writing <span class="font-bold">data stories and interactives</span> that turn numbers into engaging visual narratives</li>
    <li>🎨 Working on <span class="font-bold">UX, frontend, and branding</span> to help organizations connect with their communities</li>
    <li>📝 Customizing <span class="font-bold">content management systems (especially WordPress)</span> to help journalists do their jobs in the most web-savvy, pain-free ways possible</li>
  </ul>

<p>When I’m not at my desk, you’ll most likely find me at the restaurants, rock clubs, and soccer fields of New England.</p>

<p>I'm currently splitting my time between building WordPress sites with my friends at Modern Tribe and taking on freelance dataviz and frontend projects. <a href="{base}/contact">Want to work together?</a></p>

  <SocialIcons lightIcons={false} className={"mt-5"} size={8} />

</div>