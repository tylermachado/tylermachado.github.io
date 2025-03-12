<script lang="ts">
	import '../app.css';

	let {
		link = '',
		image,
		title,
		subtitle
	} = $props<{
		link: String;
		image: String;
		title: String;
		subtitle: String;
	}>();
</script>

<a href={link} class="card w-full sm:w-[calc(50%-10px)] text-stone-800 no-underline shadow-none grid grid-cols-2 gap-2 mb-2 border border-gray-200 rounded bg-white/30 hover:bg-white/60 justify-end items-end">
	<img src={`/screenshots/${image}`} alt={title} />
  <div class="p-1 flex flex-col justify-end">
    <h3 class="mb-1 text-sm leading-4 font-bold tracking-tight md:text-lg md:leading-5">
      {title}
    </h3>
    <h4 class="mb-1 text-sm leading-4 font-normal tracking-tight">
      {subtitle}
    </h4>
  </div>
</a>
