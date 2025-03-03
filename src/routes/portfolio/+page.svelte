<script>
  import { Card, AccordionItem, Accordion } from 'flowbite-svelte';
  import portfolio from '../../data/portfolio.json';
  $: portfolioCategories = [...new Set(portfolio.map(item => item.category))];
</script>

<div class="col-span-1">
</div>

<div class="col-span-5">
  <Accordion flush multiple>
    {#each portfolioCategories as category}
      <AccordionItem>
        <span slot="header">
          <h3>{category}</h3>
        </span>
        <div class="flex flex-wrap gap-4">
          {#each portfolio.filter(item => item.category === category) as item}
            <Card img={`../../screenshots/${item.screenshot}`} class="md:w-[calc(25%-1rem)] w-full shadow-none rounded-none">
              <h3 class="mb-1 text-lg leading-5 font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <h4 class="mb-1 text-sm leading-4 font-normal tracking-tight text-gray-700 dark:text-gray-400">
                {item.publication}, {item.date}
              </h4>
            </Card>
          {/each}
        </div>
      </AccordionItem>
    {/each}
  </Accordion>
  
</div>