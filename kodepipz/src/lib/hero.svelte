<script lang="ts">
    let greet = "Are you looking for a web development course that is super affordable?";
</script>
<div class="container hero">
 <div class="row">
  <div class="col-md-6 hero1"><br>
    <h2 style="font-size: 60px;">{greet}</h2><br>
    <h5 style="font-weight: 300; font-size: 25px;">Embark on a journey to start web development with our cutting-edge courses and professional services.
      Unlock the secrets of coding, design stunning websites, and launch your career in the digital realm.
    </h5>
    <br>
    <center><button class="btn btn-primary " type="button" value="submit">GET STARTED</button></center>
    <br>
    </div>
<div class="col-md-6">
 <!-- <img src="/dualcomp.jfif" alt="image"><br><br>
  <img src="/web7.jfif" alt="image"> -->
  <img src="/web1.jfif" alt="image" height="200"><br>
  <img src="/web3.jfif" alt="image" height="200">
  <img src="/web5.jfif" alt="image" height="200">
  
<br>
<br>
</div>

 </div>
</div>
<br>
<style>
  .hero {
    background-color: white;
    padding-top: 25px;
  }
  .btn {
    padding-bottom: 9px;
       padding-top: 9px;
      
  }

  .col-md-6 {
      position: relative;
      overflow: hidden;
    }

    .col-md-6 img {
      transition: transform 0.3s ease-in-out;
    }

    .col-md-6:hover img {
      transform: translateY(-10px);
    }
    
</style>