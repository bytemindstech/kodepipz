<script lang="ts">
  import { page } from "$app/stores";
  import {
    TabAnchor,
    TabGroup,
    ListBox,
    ListBoxItem,
    popup,
  } from "@skeletonlabs/skeleton";

  import type { PopupSettings } from "@skeletonlabs/skeleton";

  let comboboxValue: string;

  const popupCombobox: PopupSettings = {
    event: "click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item",
  };
</script>

<TabGroup
  justify="justify-start"
  active="variant-filled-primary"
  hover="hover:variant-soft-secondary"
  flex="flex-1 lg:flex-none"
  rounded="rounded"
  border=""
  spacing="space-x-3"
  class="bg-surface-100-800-token w-full"
>
  <TabAnchor href="/" selected={$page.url.pathname === "/"}>
    <svelte:fragment slot="lead">Home</svelte:fragment>
  </TabAnchor>

  <TabAnchor href="/about" selected={$page.url.pathname === "/about"}>
    <svelte:fragment slot="lead">About</svelte:fragment>
  </TabAnchor>

  <button
    class="btn variant-ghost-primary w-40 justify-between ms-5"
    use:popup={popupCombobox}
  >
    <span class="capitalize">{comboboxValue ?? "Explore"}</span>
    <span>↓</span>
  </button>

  <div class="card w-40 shadow-xl py-2" data-popup="popupCombobox">
    <ListBox rounded="rounded-none">
      <ListBoxItem bind:group={comboboxValue} name="medium" value=""
        ><a href="/blog">Blog</a>
      </ListBoxItem>
      <ListBoxItem bind:group={comboboxValue} name="medium" value=""
        ><a href="/register">Register</a>
      </ListBoxItem>
      <ListBoxItem bind:group={comboboxValue} name="medium" value="others"
        >Others</ListBoxItem
      >
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
  </div>

  <!-- ... -->
</TabGroup>

<style>
</style>
