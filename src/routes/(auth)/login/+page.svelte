<script lang="ts">
  import { toast } from "svelte-sonner";
  import type { PageData } from "./$types.js";
  import Form from "./form.svelte";
  import { ButtonGoogle } from "$lib/components/button-google";
  let { data }: { data: PageData } = $props();

  function handleGoogleLoginMock() {
    toast.warning("OAuth flow is not implemented yet.", {
      description: "This is a mock for development purposes.",
    });
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div class="flex flex-col items-center gap-2 text-center">
    <h1 class="text-2xl font-bold">Login to your account</h1>
    <p class="text-sm text-balance text-muted-foreground">
      Enter your email below to login to your account
    </p>
  </div>

  <Form {data} />

  <div class="mt-6 flex flex-col gap-6">
    <div
      class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"
    >
      <span class="relative z-10 bg-background px-2 text-muted-foreground"> or </span>
    </div>

    <ButtonGoogle onClick={handleGoogleLoginMock} />

    <div class="text-center text-sm">
      Don&apos;t have an account?
      <a href="/register" class="underline underline-offset-4"> Sign up </a>
    </div>
  </div>
</div>
