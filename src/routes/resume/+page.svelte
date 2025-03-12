<script>
// @ts-nocheck

  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { spaceWords } from '../../lib/spaceWords';
  import resume from '../../data/resume.json';
  const resumeSections = Object.keys(resume);
</script>

<div class="col-span-1">
  <Sidebar class="w-auto">
    <SidebarWrapper class="bg-transparent">
      <SidebarGroup class="m-0">
        {#each resumeSections as section}
          <SidebarItem label={spaceWords(section)} href={`#${section}`} class="-ms-3 leading-5 no-underline">
          </SidebarItem>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</div>

<div class="col-span-4">
  {#each resumeSections as section}
    <h2 id="{section}">{spaceWords(section)}</h2>
    <Accordion flush class="mb-10">
      {#each resume[section] as job}
        <AccordionItem class="cursor-pointer">
          <span slot="header" class="leading-[1.25]">
            {#if ['WorkExperience'].includes(section)}
              <h3 class="text-lg">{job.job}</h3>
              <div class="font-normal">{job.title}</div>
              <div class="font-normal">{job.time}</div>
            {:else if ['Talks'].includes(section)}
              <h3 class="text-lg">{job.title}</h3>
              <div class="font-normal">{job.event}</div>
              <div class="font-normal">{job.date}</div>
            {:else if ['VolunteerPositions'].includes(section)}
              <h3 class="text-lg">{job.org}</h3>
              <div class="font-normal">{job.position}</div>
              <div class="font-normal">{job.date}</div>
            {/if}
          </span>
          {#if ['WorkExperience'].includes(section)}
            <ul class="text-stone-800 list-disc mt-0">
              {#each job.duties as duty}
                <li class="mb-2.5 ml-5">{duty}</li>
              {/each}
            </ul>
          {:else}
            <p class="mt-0">{job.content}</p>
          {/if}
        </AccordionItem>
      {/each}
    </Accordion>
  {/each}
</div>
