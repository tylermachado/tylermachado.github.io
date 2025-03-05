<script>
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
          <SidebarItem label={spaceWords(section)} href={`#${section}`} class="-ms-3 leading-5">
          </SidebarItem>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</div>

<div class="col-span-5 px-5">
  <h2 id="WorkExperience">Work Experience</h2>
  <Accordion flush>
    {#each resume.WorkExperience as job}
      <AccordionItem class="text-stone-800">
        <span slot="header">
          <h3>{job.job}</h3>
          <span class="font-normal">{job.title}, {job.time}</span>
        </span>
        <ul class="text-stone-800 list-disc">
          {#each job.duties as duty}
            <li class="mb-2.5 ml-5">{duty}</li>
          {/each}
        </ul>
      </AccordionItem>
    {/each}
  </Accordion>

  <h2 id="Talks">Talks</h2>
  <Accordion flush>
    {#each resume.Talks as talk}
      <AccordionItem class="text-stone-800">
        <span slot="header">
          <h3>{talk.title}</h3>
          <span  class="font-normal">{talk.event}, {talk.date}</span>
        </span>
        <p>{talk.content}</p>
      </AccordionItem>
    {/each}
  </Accordion>

  <h2 id="VolunteerPositions">Volunteer Positions</h2>
  <Accordion flush>
    {#each resume.VolunteerPositions as job}
      <AccordionItem class="text-stone-800">
        <span slot="header">
          <h3>{job.org}</h3>
          <span class="font-normal">{job.position}, {job.date}</span>
        </span>
        <p>{job.content}</p>
      </AccordionItem>
    {/each}
  </Accordion>
</div>