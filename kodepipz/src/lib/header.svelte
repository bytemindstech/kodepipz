<div class="header">
  <div class="row">
    <div class="col-md-6">
      <h3><span class="span1">Kode</span><span class="span2">Pipz</span></h3>
    </div>
    <div class="col-md-6" style="padding-top: 8px;">
      <button
        class="btn btn-danger"
        style="padding-top: 7px; padding-bottom: 7px;">Our Promo</button
      >
      <button
        class="btn btn-info"
        style="padding-top: 7px; padding-bottom: 7px;">Inquire now</button
      >
    </div>
  </div>
  <!-- svelte-ignore a11y-distracting-elements -->
  <marquee
    ><img src="/promo.jfif" alt="" />WE HAVE A
    <strong>PROMO</strong> FOR YOU TO START LEARNING WEB DEVELOPMENT AND OTHER COURSES
    WE HAVE.
  </marquee>
</div>

<style>
  .header {
    padding-left: 100px;
    background-color: white;
    padding-top: 5px;
  }
  .span1 {
    color: blue;
    font-size: 40px;
  }
  .span2 {
    color: red;
    font-family: cursive;
    font-size: 40px;
  }
  .btn {
    font-size: large;
  }

  marquee {
    color: black;
    font-size: 18px;
    font-weight: 500;
  }

  marquee img {
    height: 30px;
  }

  marquee strong {
    color: red;
    font-weight: bold;
  }
</style>
