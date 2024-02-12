<nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><span style="color:blue;">Kode</span><span style="color:red;">Pipz</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./about">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="./blog">Blog</a></li>
              <li><a class="dropdown-item" href="https://classroom.jhenbert.com/?redirect=0">Courses</a></li>
              <li><a class="dropdown-item" href="#">Coding for Kids</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="./faqs">Frequently Asked Questions</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./login">Login</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <slot/>
  <br>
  
  <footer class="py-3 my-4" style="background-color: gray;">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Careers</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Terms of Service</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Visson & Mission</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Social</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 KodePipz</p>
  </footer>
 
<style>
    body{
        padding: 0%;
        margin:0%;
        background-color: lightgray;
    }
    nav a {
        font-size: large;

    }

   
</style>