<script>
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
  } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";
  import { AppShell, AppBar } from "@skeletonlabs/skeleton";
  import { Header, Navigation, Footer, Join, Login, Register } from "$lib";
  import { page } from "$app/stores";
  import "../app.pcss";

  //requirement for popup
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

{#if $page.url.pathname === "/login"}
  <Login />
{:else if $page.url.pathname === "/register"}
  <Register />
{:else}
  <AppShell>
    <svelte:fragment slot="header">
      <AppBar>
        <svelte:fragment slot="lead"
          ><h3 class="text-4xl font-bold mx-5">
            <span class="text-primary-800">Kode</span><span class="text-red-700"
              >Pipz</span
            >
          </h3></svelte:fragment
        >
        <Navigation />
        <svelte:fragment slot="trail"
          ><a href="/login"
            ><button class="btn variant-filled-primary">Login</button></a
          ></svelte:fragment
        >
      </AppBar>
    </svelte:fragment>

    <!-- Router Slot -->
    <slot />
    <Join />
    <!-- ---- / ---- -->
    <svelte:fragment slot="pageFooter">
      <Footer />
    </svelte:fragment>
    <!-- (footer) -->
  </AppShell>
{/if}
