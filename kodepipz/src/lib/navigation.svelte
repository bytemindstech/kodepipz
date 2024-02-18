<script lang="ts">
  let activeLink: number | null = null;

  const setActive = (index: number) => {
    activeLink = index;
  };
</script>
<<<<<<< HEAD
<nav class="navbar navbar-expand-lg container-fluid">
  <div class="container">
=======

<nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid">
  <div class="container">
    <a class="navbar-brand" href="/"
      ><span style="color:blue;">Kode</span><span style="color:red;">Pipz</span
      ></a
    >
>>>>>>> 3d8238e4538b957c859f69dd0f0749bbc4250a90
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
<<<<<<< HEAD
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li></li>
=======
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
>>>>>>> 3d8238e4538b957c859f69dd0f0749bbc4250a90
        <li class="nav-item">
          <a
            class="nav-link {activeLink === 1 ? 'active' : ' '}"
            aria-current="page"
            href="/"
            on:click={() => setActive(1)}>Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link {activeLink === 2 ? 'active' : ' '}"
            href="./about"
            on:click={() => setActive(2)}>About</a
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </a>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="./blog"
                on:click={() => setActive(0)}>Blog</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://classroom.jhenbert.com/?redirect=0">Courses</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://classroom.jhenbert.com/?redirect=0"
                >Coding for Kids</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="./faqs"
                >Frequently Asked Questions</a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a
            class="nav-link {activeLink === 4 ? 'active' : ' '}"
            href="./login"
            on:click={() => setActive(4)}>Login</a
          >
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
<<<<<<< HEAD
        <button class="btn btn-outline-danger" type="submit">Search</button>
=======
        <button class="btn btn-outline-success" type="submit">Search</button>
>>>>>>> 3d8238e4538b957c859f69dd0f0749bbc4250a90
      </form>
    </div>
  </div>
</nav>

<style>
  nav a {
    font-size: large;
<<<<<<< HEAD
    color: lightcyan;
  }

nav a:active{
  color: blue;
}
nav a:hover{
  color: gray;
}
  nav {
    z-index: 1;
    
=======
  }
  nav {
    position: fixed;
    z-index: 1;
>>>>>>> 3d8238e4538b957c859f69dd0f0749bbc4250a90
  }

  .active {
    font-weight: bold;
  }
<<<<<<< HEAD
  .navbar {
    background-color:#16174d;padding-top: 15px;
    padding-bottom: 15px;

  }
  .dropdown-menu li a {
    color: black;
  }
  .span1{
color: lightblue;
  }
  .span2 {
    color: red;
  }
=======
>>>>>>> 3d8238e4538b957c859f69dd0f0749bbc4250a90
</style>
