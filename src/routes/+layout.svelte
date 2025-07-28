<script lang="ts">
  import { onMount } from "svelte";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import { ModeWatcher } from "mode-watcher";
  import NProgress from "nprogress";
  import { Toaster } from "$lib/components/ui/sonner";
  import "../app.css";

  let { children } = $props();

  onMount(() => {
    NProgress.configure({ showSpinner: false });

    beforeNavigate(() => {
      NProgress.start();
    });

    afterNavigate(async () => {
      NProgress.done();
    });
  });
</script>

<ModeWatcher />
{@render children?.()}
<Toaster position="top-right" richColors />
