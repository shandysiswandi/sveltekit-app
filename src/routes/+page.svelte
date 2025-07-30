<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight } from "@lucide/svelte";
  import { SplashCursor } from "$lib/components/splash-cursor";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<SplashCursor />

<div class="flex min-h-screen flex-col items-center justify-center bg-background">
  <div
    class="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
  ></div>

  <main class="container mx-auto flex flex-1 flex-col items-center justify-center p-4 text-center">
    <div class="max-w-3xl">
      <h1
        class="bg-gradient-to-r from-primary via-blue-500 to-teal-500 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl"
      >
        Build and Deploy with Confidence
      </h1>

      <p class="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
        You've set up a powerful, modern, and scalable foundation for your next big idea. Let's get
        started.
      </p>

      <div class="mt-8 flex justify-center">
        <Button href="/login" size="lg" class="gap-2">
          <span>Get Started</span>
          <ArrowRight class="size-4" />
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
