<script lang="ts">
  import webdevIcon from "/src/images/webdevicon.png";
  import htmlcssjs from "/src/images/htmlcssjs.png";
  import onlineTeacher from "/src/images/online-teacher.jpg";
  import onlineLearning from "/src/images/onlinelearning.png";
  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<section class="my-10">
  <div class="container mx-auto">
    <div class="md:flex md:items-center md:justify-center p-4">
      <div class="md:w-1/2 md:pr-8">
        <div class="flex items-center gap-2">
          <Avatar
            src={webdevIcon}
            alt="webdev-icon"
            width="w-16"
            rounded="rounded-full"
          />
          <h2>Why study web development?</h2>
        </div>

        <h5 class="text-xl text-justify mt-5">
          In today's digital age, businesses and organizations of all sizes rely
          heavily on an online presence. This has led to a significant demand
          for skilled web developers who can design, build, and maintain
          websites and web applications.
        </h5>

        <button class="btn variant-filled-primary mt-5" type="submit"
          >Apply now!</button
        >
      </div>

      <div class="md:w-1/2 md:mt-0">
        <!-- <img src={htmlcssjs} alt="htmlcssjs-png" /> -->
        <div class="md:flex md:items-center mt-5 gap-3 space-y-3">
          <div>
            <div class="flex items-center gap-2 mt-5">
              <Avatar
                src={onlineLearning}
                alt="learning-img"
                width="w-16"
                rounded="rounded-full"
              />
              <h2>Online Learning</h2>
            </div>
            <h5 class="text-lg text-justify mt-5">
              At KodePipz, we also offer online tutorial for kids and adults on
              different subjects. You can pick your preferred teachers or
              tutors. Do you want to check our available teachers/tutors as well
              as the subjects we're currently offering?
            </h5>
            <button class="btn variant-filled-primary mt-5">Signup now!</button>
          </div>
          <img
            src={onlineTeacher}
            alt="teacher-img"
            class="flex-auto w-1/2 mt-4 mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
</style>
