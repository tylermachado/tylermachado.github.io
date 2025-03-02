<script>
  import { Card, AccordionItem, Accordion } from 'flowbite-svelte';
  import portfolio from '../../data/portfolio.json';
  $: portfolioCategories = [...new Set(portfolio.map(item => item.category))];
</script>

<div class="col-span-1">
</div>

<div class="col-span-5">
  <Accordion flush>
    {#each portfolioCategories as category}
      <AccordionItem>
        <span slot="header">
          <h3>{category}</h3>
        </span>
        {#each portfolio.filter(item => item.category === category) as item}
          <div class="space-y-4">
          <Card img={`../../screenshots/${item.screenshot}`} size="md">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <h4 class="mb-2 text-lg font-normal text-gray-700 dark:text-gray-400">
              {item.publication}, {item.date}
            </h4>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              {item.blurb}
            </p>
          </Card>
        </div>
        {/each}
      </AccordionItem>
    {/each}
  </Accordion>
  
</div>