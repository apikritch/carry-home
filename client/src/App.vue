<template>
  <div id="app">
    <div class="filter position-fixed w-100 h-100"></div>
    <div class="container-fluid">
      <div>
        <top></top>
        <div class="container">
          <router-view
            :carryAusThaiNext="carryAusThaiNext"
            :carryThaiAusNext="carryThaiAusNext"
            :sendAusThaiNext="sendAusThaiNext"
            :sendThaiAusNext="sendThaiAusNext"
            @showCarryAusThaiButton="carryAusThaiButton"
            @showCarryThaiAusButton="carryThaiAusButton"
            @showSendAusThaiButton="sendAusThaiButton"
            @showSendThaiAusButton="sendThaiAusButton"
          ></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top.vue";

export default {
  name: "app",
  components: {
    Top
  },
  data: function() {
    return {
      location: false
    };
  },
  computed: {
    carryAusThaiNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    },
    carryThaiAusNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    },
    sendAusThaiNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    },
    sendThaiAusNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    carryAusThaiButton: function(showCarryAusThaiButton) {
      if (showCarryAusThaiButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    },
    carryThaiAusButton: function(showCarryThaiAusButton) {
      if (showCarryThaiAusButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    },
    sendAusThaiButton: function(showSendAusThaiButton) {
      if (showSendAusThaiButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    },
    sendThaiAusButton: function(showSendThaiAusButton) {
      if (showSendThaiAusButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    }
  }
};
</script>

<style>
</style>
