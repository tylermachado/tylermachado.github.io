<script lang="ts">
	let {
		dark = '#042d04',
		mid = '#56ccb3',
		light = '#ffffff'
	} = $props<{
		dark?: string;
		mid?: string;
		light?: string;
	}>();
</script>

<svg
	id="visual"
	viewBox="0 0 960 60"
	width="100%"
	height="100%"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	version="1.1"
	><rect x="0" y="0" width="960" height="60" fill="{dark}"></rect><path
		d="M0 37L160 46L320 41L480 42L640 36L800 36L960 43L960 0L800 0L640 0L480 0L320 0L160 0L0 0Z"
		fill="color-mix(in srgb, {dark}, {mid})"
	></path><path
		d="M0 32L160 25L320 31L480 26L640 30L800 24L960 26L960 0L800 0L640 0L480 0L320 0L160 0L0 0Z"
		fill="{mid}"
	></path><path
		d="M0 11L160 10L320 16L480 10L640 14L800 18L960 18L960 0L800 0L640 0L480 0L320 0L160 0L0 0Z"
		fill="{light}"
	></path></svg
>
