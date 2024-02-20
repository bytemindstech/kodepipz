<script>
  import { page } from "$app/stores";
  import { Header, Navigation, Footer, Login, Register } from "$lib";
</script>

{#if $page.url.pathname === "/login"}
  <Login />
{:else if $page.url.pathname === "/register"}
  <Register />
{:else}
  <Header />
  <Navigation />
  <slot />
  <Footer />
{/if}
