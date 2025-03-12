<script>
  import { Card, AccordionItem, Accordion } from 'flowbite-svelte';
  import portfolio from '../../data/portfolio.json';
  $: portfolioCategories = [...new Set(portfolio.map(item => item.category))];
</script>

<div class="col-span-1">
</div>

<div class="col-span-5">
  <h2>Contact</h2>
  <p>I'm currently booking more freelance/contract/fractional work for early-to-mid 2025. Want to work together? Here's where you can find me:</p>
  <ul class="list-disc list-inside mt-4">
    <li><a href="mailto:tyler.machado@gmail.com">Email</a>
    </li>
    <li><a href="https://linked.com/in/tylermachado">LinkedIn</a></li>
    <li><a href="//github.com/tylermachado">GitHub</a></li>
    <li><a href="//bsky.app/user/tylermachado">Bluesky</a></li>
      </ul>
  
</div>