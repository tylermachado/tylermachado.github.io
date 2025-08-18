<script>
  import { base } from '$app/paths';
  import SocialIcons from '../components/SocialIcons.svelte';
</script>

<div class="col-span-1">
</div>

<div class="col-span-4">
  <img src="/images/headshot.jpg" alt="Tyler Machado" class="rounded-2xl md:w-48 md:h-48 mb-8 hidden md:block mx-auto md:float-right md:mx-8" />

  <p class="text-2xl">Hi, I'm Tyler and <span class="font-bold">I'm a creative technologist</span> from Boston.</p>

  <p>I design and build digital tools — like data visualizations, dashboards, and websites — that support and elevate digital storytelling. Whether I'm visualizing complex data, developing WordPress platforms, or translating editorial needs into thoughtful UX, I'm here to help mission-driven teams communicate clearly and connect with their audiences on the modern web. My experience includes:</p>

  <ul>
    <li>📊 Shaping data into <span class="font-bold">interactive stories and dashboards</span> that make narratives from numbers</li>
    <li>🎨 Crafting <span class="font-bold">branding kits, design systems and UX/UI components</span> that align with brand identity</li>
    <li>📝 Developing flexible <span class="font-bold">CMS platforms</span> for journalists, storytellers, and nonprofits</li>
  </ul>

<p>When I’m not at my desk, you’ll most likely find me at the restaurants, rock clubs, and soccer fields of New England.</p>

<p><span class="font-bold">I'm always looking to collaborate with teams that value a healthy blend of design, data, and storytelling to make an impact.</span> I'm currently splitting my time between building WordPress sites with my friends at Modern Tribe and taking on freelance dataviz and frontend projects. <a href="{base}/contact">Want to work together?</a></p>

  <SocialIcons lightIcons={false} className={"mt-5"} size={8} />

</div>