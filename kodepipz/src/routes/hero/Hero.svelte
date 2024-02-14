<script>
    export {default as Hero} from './Hero.svelte';
    let greet= "Welcome to our site!";
    </script>
<br>
<br>
<br>
<br>
<br>
<div class="container">
 <div class="row">
<div class="col-md-6">
<aside style="padding-left: 40px;">
  <img src="/web1.jfif" alt="image"><br>
  <img src="/web2.jfif" alt="image" style="border-radius: 50%;">
  <img src="/web3.jfif" alt="image">
</aside>
</div>
<div class="col-md-6"><br>
<h1>{greet}</h1>
<h5 style="font-weight: 300;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eaque voluptate, eligendi omnis consequatur nihil similique totam. Magnam, doloribus. Ut corporis sapiente corrupti accusamus fugiat nesciunt ipsam inventore odio magni.</h5>
<br>
<button class="btn btn-primary" type="button" value="submit">Get Started</button>
</div>
 </div>
</div>