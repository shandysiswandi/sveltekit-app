<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import * as Form from "$lib/components/ui/form";
  import { formSchema, type FormSchema } from "./schema";
  import { type SuperValidated, type Infer, superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { toast } from "svelte-sonner";

  let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } = $props();

  const form = superForm(data.form, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance, message } = form;

  $effect(() => {
    if ($message) {
      toast.error("Login Failed", {
        description: $message,
      });
    }
  });
</script>

<form method="POST" use:enhance>
  <div class="grid gap-6">
    <div class="grid gap-3">
      <Form.Field {form} name="email">
        <Form.Control>
          {#snippet children({ props })}
            <Form.Label>Username</Form.Label>
            <Input
              {...props}
              bind:value={$formData.email}
              autocomplete="off"
              placeholder="m@example.com"
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors class="text-xs" />
      </Form.Field>
    </div>

    <div class="grid gap-3">
      <Form.Field {form} name="password">
        <Form.Control>
          {#snippet children({ props })}
            <div class="flex items-center">
              <Form.Label for={props.id}>Password</Form.Label>
              <a href="/forgot-password" class="ml-auto text-sm underline-offset-4 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input
              {...props}
              bind:value={$formData.password}
              type="password"
              autocomplete="current-password"
              placeholder="••••••••"
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors class="text-xs" />
      </Form.Field>
    </div>

    <Form.Button class="w-full">Log In</Form.Button>
  </div>
</form>
