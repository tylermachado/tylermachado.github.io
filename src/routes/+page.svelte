<script>
  import { base } from '$app/paths';
  import SocialIcons from '../components/SocialIcons.svelte';
</script>

<div class="col-span-1">
</div>

<div class="col-span-4">
  <img src="/images/headshot.jpg" alt="Tyler Machado" class="rounded-2xl md:w-48 md:h-48 mb-8 hidden md:block mx-auto md:float-right md:mx-8" />

  <p class="text-2xl">Hi, I'm Tyler and <span class="font-bold">I'm a creative technologist</span> from Boston.</p>
  
  <p>I make websites, dashboards, data visualizations, and design systems that help mission-driven organizations and publishers make the most of visual, digital storytelling. Across 10+ years of working on the web, my career has included:</p>

  <ul>
    <li>📊 Designing, building and writing data stories and interactives that turn numbers into engaging visual narratives</li>
    <li>🎨 Working on UX, frontend, and branding to help organizations connect with their communities</li>
    <li>📝 Customizing content management systems (especially WordPress) to help journalists do their jobs in the most web-savvy, pain-free ways possible</li>
  </ul> 

<p>When I’m not at my desk, you’ll most likely find me at the restaurants, rock clubs, and soccer fields of New England.</p>

<p>I'm currently splitting my time between building WordPress sites with my friends at Modern Tribe and taking on freelance dataviz and frontend projects. <a href="{base}/contact">Want to work together?</a></p>

  <SocialIcons lightIcons={false} className={"mt-5"} size={8} />

</div>