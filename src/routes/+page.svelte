<script>
  import { base } from '$app/paths';
  import SocialIcons from '../components/SocialIcons.svelte';
</script>

<div class="col-span-1">
</div>

<div class="col-span-4">
  <img src="/images/headshot.jpg" alt="Tyler Machado" class="rounded-2xl md:w-48 md:h-48 mb-8 hidden md:block mx-auto md:float-right md:mx-8" />

  <p class="text-2xl">Hi, I'm Tyler and <span class="font-bold">I'm a freelance design technologist and UX/UI engineer</span> from Boston.</p>

  <p>I design and build data-driven web apps, dashboards and systems for nonprofit and editorial teams, bridging product, design, data, and code. Here's how I can help:</p>

  <ul>
    <li>📊 Turning complex data into <span class="font-bold">engaging, interactive narratives and decision-ready dashboards</span></li>
    <li>🎨 Crafting <span class="font-bold">branding kits, design systems and component-driven frontends</span> that align with editorial voice and brand identity</li>
    <li>📝 Developing flexible, content-first <span class="font-bold">WordPress and Next.js sites</span> for journalists, storytellers, and nonprofits</li>
  </ul>

<p>When I’m not at my desk, you’ll most likely find me at the restaurants, rock clubs, and soccer fields of New England.</p>

<p><span class="font-bold">I'm always looking to collaborate with teams that value a healthy blend of design, data, and storytelling to make an impact, and I'm currently available for freelance, contract, or full-time work!</span> <a href="{base}/contact">Want to work together?</a></p>

  <SocialIcons lightIcons={false} className={"mt-5"} size={8} />

</div>