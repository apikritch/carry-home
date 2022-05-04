<template>
  <div>
    <div class="row justify-content-sm-center">
      <h3 class="content-text text-orange mt-5 mb-5">
        <router-link href="#" to="/" class="text-link">Home&nbsp;</router-link>
        <span class="text-white">></span>
        Send
        <span class="text-white">></span>
        From?
      </h3>
    </div>
    <hr class="bg-light mb-3 w-50" />
    <div class="row">
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-sm-center">
          <router-link href="#" to="/send/australia">
            <h1 class="button-text text-link">Australia</h1>
          </router-link>
        </div>
        <div class="row justify-content-sm-center">
          <h6 class="plain-text-25 text-white">To Thailand</h6>
        </div>
      </div>
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-sm-center">
          <router-link href="#" to="/send/thailand">
            <h1 class="button-text text-link">Thailand</h1>
          </router-link>
        </div>
        <div class="row justify-content-sm-center">
          <h6 class="plain-text-25 text-white">To Australia</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Send_1",
};
</script>

<style></style>
