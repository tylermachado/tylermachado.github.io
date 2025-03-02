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
      <SidebarGroup>
        {#each resumeSections as section}
          <SidebarItem label={spaceWords(section)} href={`#${section}`}>
          </SidebarItem>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</div>

<div class="col-span-5">
  <h2 id="WorkExperience">Work Experience</h2>
  <Accordion flush>
    {#each resume.WorkExperience as job}
      <AccordionItem>
        <span slot="header">
          <h3>{job.job}</h3>
          <span>{job.title}, {job.time}</span>
        </span>
        <ul>
          {#each job.duties as duty}
            <li>{duty}</li>
          {/each}
        </ul>
      </AccordionItem>
    {/each}
  </Accordion>

  <h2 id="Talks">Talks</h2>
  <Accordion flush>
    {#each resume.Talks as talk}
      <AccordionItem>
        <span slot="header">
          <h3>{talk.title}</h3>
          <span>{talk.event}, {talk.date}</span>
        </span>
        <p>{talk.content}</p>
      </AccordionItem>
    {/each}
  </Accordion>

  <h2 id="VolunteerPositions">Volunteer Positions</h2>
  <Accordion flush>
    {#each resume.VolunteerPositions as job}
      <AccordionItem>
        <span slot="header">
          <h3>{job.org}</h3>
          <span>{job.position}, {job.date}</span>
        </span>
        <p>{job.content}</p>
      </AccordionItem>
    {/each}
  </Accordion>
</div>