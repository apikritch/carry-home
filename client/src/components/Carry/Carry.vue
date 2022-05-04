<template>
  <div>
    <div>
      <div class="row justify-content-sm-center">
        <h3 class="content-text text-orange mt-5 mb-5">
          <router-link href="#" to="/" class="text-link"
            >Home&nbsp;</router-link
          >
          <span class="text-white">></span>
          Carry
          <span class="text-white">></span>
          From?
        </h3>
      </div>
      <hr class="bg-light mb-3 w-50" />
      <div class="row justify-content-center">
        <div class="mt-5">
          <div class="row justify-content-center">
            <router-link href="#" to="/carry/australia">
              <h1 class="button-text text-link">Australia</h1>
            </router-link>
          </div>
          <div class="row justify-content-center">
            <h6 class="plain-text-25 text-white">To Thailand</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carry_1",
};
</script>

<style></style>
