<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import Card from '../../components/Card.svelte';
  import portfolio from '../../data/portfolio.json';
  $: portfolioCategories = [...new Set(portfolio.map(item => item.category))];

  import { onMount } from 'svelte';
  
  let windowWidth = 0;

  function updateWidth() {
    windowWidth = window.innerWidth;
  }

  onMount(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });
</script>

<div class="col-span-1">
</div>

<div class="col-span-4">
  <h2>Portfolio</h2>
  <Accordion flush multiple>
    {#each portfolioCategories as category}
      <AccordionItem class="cursor-pointer">
        <span slot="header">
          <h3 class="text-lg">{category}</h3>
        </span>
        <div class="flex flex-wrap gap-4">
          {#each portfolio.filter(item => item.category === category) as item}
            <Card
              title={item.title}
              subtitle={`${item.publication}, ${item.date}`}
              image={item.screenshot}
              link={item.link}
            />
          {/each}
        </div>
      </AccordionItem>
    {/each}
  </Accordion>
  
</div>