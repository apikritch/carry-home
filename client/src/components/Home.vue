<template>
  <div>
    <div class="row justify-content-sm-center">
      <h3 class="content-text text-orange mt-5 mb-5">
        let other people take your things back to the country
      </h3>
    </div>
    <hr class="bg-light mb-3 w-50" />
    <div class="row">
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-sm-center">
          <h6 class="plain-text-25 text-white">I'll</h6>
        </div>
        <div class="row justify-content-sm-center">
          <router-link href="#" to="/carry/australia">
            <h1 class="button-text text-link">Carry</h1>
          </router-link>
        </div>
        <div class="row justify-content-sm-center">
          <h6 class="plain-text-25 text-white">Things for you</h6>
        </div>
      </div>
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-sm-center">
          <h6 class="plain-text-25 text-white">Wanna</h6>
        </div>
        <div class="row justify-content-sm-center">
          <router-link href="#" to="/post">
            <h1 class="button-text text-link">Send</h1>
          </router-link>
        </div>
        <div class="row justify-content-sm-center">
          <h6 class="plain-text-25 text-white">Things to another Country</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_1",
};
</script>

<style></style>
