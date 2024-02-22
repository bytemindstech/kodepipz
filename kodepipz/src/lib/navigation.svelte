<script lang="ts">
  import { page } from "$app/stores";
  import { TabAnchor, TabGroup } from "@skeletonlabs/skeleton";
</script>

<TabGroup
  justify="justify-start"
  active="variant-filled-primary"
  hover="hover:variant-soft-secondary"
  flex="flex-1 lg:flex-none"
  rounded="rounded"
  border=""
  class="bg-surface-100-800-token w-full"
>
  <TabAnchor href="/" selected={$page.url.pathname === "/"}>
    <svelte:fragment slot="lead">Home</svelte:fragment>
  </TabAnchor>

  <TabAnchor href="/about" selected={$page.url.pathname === "/about"}>
    <svelte:fragment slot="lead">About</svelte:fragment>
  </TabAnchor>

  <TabAnchor href="/" selected={$page.url.pathname === "/"}>
    <svelte:fragment slot="lead">Categories</svelte:fragment>
  </TabAnchor>
  <!-- ... -->
</TabGroup>

<style>
</style>
