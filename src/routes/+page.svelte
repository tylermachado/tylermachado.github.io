<script>
  import { base } from '$app/paths';
  import SocialIcons from '../components/SocialIcons.svelte';
</script>

<div class="col-span-1">
</div>

<div class="col-span-4">
  <img src="/images/headshot.jpg" alt="Tyler Machado" class="rounded-2xl md:w-48 md:h-48 mb-8 hidden md:block mx-auto md:float-right md:mx-8" />

  <p class="text-2xl">Hi, I'm Tyler and <span class="font-bold">I'm a freelance design technologist and front-end engineer</span> from Boston.</p>

  <p>I'm interested in digital/visual stories, and the systems and platforms that power them. I design and build data-driven web apps, dashboards and systems for mission-driven organizations and editorial teams, bridging product, design, data, and code. You may know me from such hits as <a href="https://pudding.cool/2024/10/nba-uniforms/">the Pudding's NBA uniforms deep dive</a>, the <a href="https://www.tylermachado.com/nicar-schedule/">alternative conference schedule grid for NICAR 2026</a>, and <a href="https://www.tylermachado.com/archive/dash-brief.pdf">Northeastern's campus COVID testing dashboard</a>.</p>
    
  <p>What I can help with:</p>

  <ul>
    <li>📊 Transform complex datasets into <span class="font-bold">engaging, clarifying, interactive narratives and dashboards</span></li>
    <li>🎨 Crafting <span class="font-bold">branding kits, design systems and component-driven frontends</span> that support standout editorial voice and brand identity</li>
    <li>📝 Developing flexible, content-first <span class="font-bold">WordPress and Next.js sites</span> for journalists, storytellers, and nonprofits</li>
  </ul>

<p>When I’m not at my desk, you’ll most likely find me at the restaurants and rock clubs of New England, or cheering on our local women's soccer team with the <a href="//bostonisa.com/">Boston ISA</a>.</p>

<p><span class="font-bold">I'm always looking to collaborate with teams that value a healthy blend of design, data, and storytelling to make an impact.</span> <a href="{base}/contact">Want to work together?</a></p>

  <SocialIcons lightIcons={false} className={"mt-5"} size={8} />

</div>