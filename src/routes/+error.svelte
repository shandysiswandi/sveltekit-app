<script lang="ts">
  import { ArrowLeft } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/button";

  // export let error: App.Error;
</script>

<svelte:head>
  <title>Something went wrong | BigBoss Inc</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center bg-background">
  <div
    class="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
  ></div>

  <main class="container mx-auto flex flex-1 flex-col items-center justify-center p-4 text-center">
    <div class="max-w-3xl">
      <h1
        class="bg-gradient-to-r from-primary via-blue-500 to-teal-500 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl"
      >
        500
      </h1>

      <p class="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">error guys</p>

      <div class="mt-8 flex justify-center">
        <Button href="/" size="lg" class="gap-2">
          <ArrowLeft class="size-4" />
          <span>Go to Home</span>
        </Button>
      </div>
    </div>
  </main>

  <footer class="py-8 text-sm text-muted-foreground">
    <p>
      &copy; {new Date().getFullYear()}
      BigBoss Inc. All Rights Reserved.
    </p>
  </footer>
</div>
