<script>
  import "../app.pcss";
  import { AppShell, AppBar } from "@skeletonlabs/skeleton";
  import { Header, Navigation, Footer, Join, Login, Register } from "$lib";
  import { page } from "$app/stores";
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
            <span class="text-blue-900">Kode</span><span class="text-red-900"
              >Pipz</span
            >
          </h3></svelte:fragment
        >
        <Navigation />
        <svelte:fragment slot="trail">(actions)</svelte:fragment>
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
