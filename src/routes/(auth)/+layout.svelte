<script lang="ts">
  import { ThemeToogle } from "$lib/components/theme-toggle";
  import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";

  let { children } = $props();
</script>

<div class="grid min-h-svh lg:grid-cols-2">
  <div class="flex flex-col gap-4 p-6 md:p-10">
    <div class="flex justify-between gap-2">
      <a href="/" class="flex items-center gap-2 font-medium">
        <div
          class="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground"
        >
          <GalleryVerticalEndIcon class="size-4" />
        </div>
        BigBoss Inc.
      </a>

      <ThemeToogle />
    </div>
    <div class="flex flex-1 items-center justify-center">
      <div class="w-full max-w-xs">
        {@render children?.()}
      </div>
    </div>
  </div>
  <div class="relative hidden bg-muted lg:block">
    <img src="/auth.svg" alt="placeholder" class="absolute inset-0 h-full w-full object-cover" />
  </div>
</div>
