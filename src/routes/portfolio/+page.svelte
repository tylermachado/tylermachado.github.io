<script>
  import { Card, AccordionItem, Accordion } from 'flowbite-svelte';
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

<div class="col-span-5 px-5">
  <h2>Portfolio</h2>
  <Accordion flush multiple>
    {#each portfolioCategories as category}
      <AccordionItem class="cursor-pointer">
        <span slot="header">
          <h3>{category}</h3>
        </span>
        <div class="flex flex-wrap gap-4">
          {#each portfolio.filter(item => item.category === category) as item}
            <Card horizontal href={item.link} img={`../../screenshots/${item.screenshot}`} padding="sm" class="shadow-none rounded-none no-underline text-stone-800">
              <h3 class="mb-1 text-sm md:text-lg leading-4 md:leading-5 font-bold tracking-tight">
                {item.title}
              </h3>
              <h4 class="mb-1 text-sm leading-4 font-normal tracking-tight">
                {item.publication}, {item.date}
              </h4>
            </Card>
          {/each}
        </div>
      </AccordionItem>
    {/each}
  </Accordion>
  
</div>