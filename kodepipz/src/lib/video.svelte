<script lang="ts">
  let autoplay = false;
   let videoSource = "/src/video/video.mp4";
 </script>
<div class="row container-fluid" style="padding-left: 20px;">
    <div class="col-md-6">
     <br>
     <br>
      <video {autoplay} controls>
        <source type="video/mp4" src="/src/video/video.mp4"/>
        Your browser does not support the video tag.
      </video>
      <br>
      <br>
      <br>
    </div>
    <div class="col-md-6">
     <br>
     <br>
     <br>
    <h2> Embark on Your Coding Odyssey: Join Our Web Development Bootcamp Today!</h2>
  <h5 style="font-weight: 400;">Are you ready to take the leap into the dynamic world of web development? If you're passionate about creating innovative websites and applications, our Web Development Bootcamp is the perfect launchpad for your coding journey. Brace yourself for an immersive learning experience that will not only equip you with the latest industry skills but also transform you into a proficient and sought-after web developer.</h5>
  <br>
  <button class="btn btn-primary" type="button">Apply now!</button>
  </div>
  </div>

  <style>
    video {
        width: 630px;
        height: 400px;
    }
    
  </style>