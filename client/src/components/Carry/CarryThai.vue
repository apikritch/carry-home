<template>
  <div>
    <div class="row justify-content-sm-center">
      <h3 class="content-text text-orange mt-5 mb-5">
        <router-link href="#" to="/" class="text-link">Home&nbsp;</router-link>
        <span class="text-white">></span>
        <router-link href="#" to="/carry" class="text-link">&nbsp;Carry&nbsp;</router-link>
        <span class="text-white">></span> Thailand
        <span class="text-white">></span> Choose Your Location
      </h3>
    </div>
    <hr class="bg-light mb-3 w-50" />
    <div class="row">
      <div class="col mt-3">
        <div class="row justify-content-sm-center mb-3">
          <div>
            <label for="carryThaiFrom" class="text-orange d-block">From</label>
            <select
              id="carryThaiFrom"
              type="text"
              class="form-control block"
              @change="showCarryThaiAusButton"
            >
              <option value selected>Choose</option>
              <option v-for="state in states" :value="state.name" :key="state.name">
                {{
                state.name
                }}
              </option>
            </select>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-6">
            <div class="row justify-content-sm-end mr-1">
              <div>
                <label for="carryThaiState" class="text-orange d-block">To State</label>
                <select
                  id="carryThaiState"
                  type="text"
                  class="form-control block"
                  @change="showCarryThaiAusButton"
                >
                  <option value selected>Choose</option>
                  <option v-for="state in states" :value="state.name" :key="state.name">
                    {{
                    state.name
                    }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row justify-content-sm-start ml-1">
              <div>
                <label for="carryThaiCity" class="text-orange d-block">City</label>
                <select
                  id="carryThaiCity"
                  type="text"
                  class="form-control block"
                  @change="showCarryThaiAusButton"
                >
                  <option value selected>Choose</option>
                  <option v-for="state in states" :value="state.name" :key="state.name">
                    {{
                    state.name
                    }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-sm-center">
          <router-link href="#" to="/post/aus/create">
            <button type="button" class="btn btn-orange px-5 py-2" v-if="carryThaiAusNext">Next</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carry-thai",
  props: ["states", "carryThaiAusNext"],
  methods: {
    showCarryThaiAusButton: function() {
      var value1 = document.getElementById("carryThaiFrom").value;
      var value2 = document.getElementById("carryThaiState").value;
      var value3 = document.getElementById("carryThaiCity").value;
      if (value1 == "" || value2 == "" || value3 == "") {
        this.$emit("showCarryThaiAusButton", false);
      } else {
        this.$emit("showCarryThaiAusButton", true);
      }
    }
  }
};
</script>

<style>
</style>