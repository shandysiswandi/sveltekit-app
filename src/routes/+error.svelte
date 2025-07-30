<script lang="ts">
  import { AlertTriangle, ArrowLeft, Compass } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>Something went wrong | BigBoss Inc</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
  <main class="flex w-full max-w-lg flex-col items-center space-y-6 px-6 text-center">
    {#if page.status === 404}
      <Compass class="size-16 text-muted-foreground" stroke-width="1.5" />
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Page Not Found</h1>
        <p class="text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    {:else}
      <AlertTriangle class="size-16 text-destructive" stroke-width="1.5" />
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Internal Server Error</h1>
        <p class="text-lg text-muted-foreground">
          Something went wrong on our end. We've been notified and are looking into it.
        </p>
      </div>
    {/if}

    <div class="w-full rounded-lg border bg-muted p-4 text-left">
      <p class="font-mono text-lg font-semibold">Status: {page.status}</p>
      {#if page.error?.message}
        <p class="mt-2 font-mono text-sm text-muted-foreground">
          <span class="font-semibold">Message:</span>
          {page.error?.message}
        </p>
      {/if}
    </div>

    <Button href="/" size="lg" class="gap-2">
      <ArrowLeft class="size-4" />
      <span>Go Back Home</span>
    </Button>
  </main>
</div>
