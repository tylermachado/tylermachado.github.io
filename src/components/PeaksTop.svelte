<script lang="ts">
  let {
    dark = '#042d04',
    mid = '#56ccb3',
    light = '#ffffff'
  } = $props<{
      dark?: string,
      mid?: string,
      light?: string
  }>();
</script>


<svg id="visual" viewBox="0 0 960 60" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
  <rect x="0" y="0" width="960" height="60" fill="{light}"></rect>
  <path d="M0 37L160 39L320 43L480 42L640 36L800 38L960 40L960 0L800 0L640 0L480 0L320 0L160 0L0 0Z" fill="{mid}"></path>
  <path d="M0 29L160 26L320 23L480 29L640 26L800 25L960 26L960 0L800 0L640 0L480 0L320 0L160 0L0 0Z" fill="color-mix(in srgb, {dark}, {mid})"></path>
  <path d="M0 12L160 14L320 17L480 13L640 18L800 16L960 14L960 0L800 0L640 0L480 0L320 0L160 0L0 0Z" fill="{dark}"></path>
</svg>