<template>
  <div>
    <div class="container" v-if="$store.state.isUserLoggedIn">
      <div class="row justify-content-sm-center">
        <h3 class="content-text text-orange mt-5 mb-5">
          <router-link href="#" to="/" class="text-link">Home&nbsp;</router-link>
          <span class="text-white">></span>
          <router-link href="#" to="/carry" class="text-link">&nbsp;Carry&nbsp;</router-link>
          <span class="text-white">></span> Australia
          <span class="text-white">></span> Choose Your Location
        </h3>
      </div>

      <hr class="bg-light mb-4 w-50" />

      <h4 class="text-orange">
        <u>Form</u>
      </h4>
      <div class="row">
        <div class="col-sm-4">
          <label for="carryAusCountry" class="text-orange d-block">Country</label>
          <select
            id="carryAusCountry"
            type="text"
            class="form-control block"
            @change="showCarryAusThaiButton"
            v-model="carryAusCountry"
          >
            <option value disabled>Choose</option>
            <option v-for="country in countries" :value="country.name" :key="country.id">
              {{
              country.name
              }}
            </option>
          </select>
        </div>
        <div class="col-sm-4">
          <label for="carryAusState" class="text-orange d-block">State</label>
          <select
            id="carryAusState"
            type="text"
            class="form-control block"
            @change="showCarryAusThaiButton"
            v-model="carryAusState"
          >
            <option value disabled>Choose</option>
            <option v-for="state in states" :value="state.name" :key="state.id">
              {{
              state.name
              }}
            </option>
          </select>
        </div>
        <div class="col-sm-4">
          <label for="carryAusSuburb" class="text-orange d-block">Suburb</label>
          <input
            id="carryAusSuburb"
            type="text"
            class="form-control"
            @keyup="showCarryAusThaiButton"
            v-model="carryAusSuburb"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <h4 class="text-orange mt-3">
            <u>To</u>
          </h4>
          <div class="row">
            <div class="col-6">
              <label for="carryAusCountryTo" class="text-orange d-block">Country</label>
              <select
                id="carryAusCountryTo"
                type="text"
                class="form-control block"
                @change="showCarryAusThaiButton"
                v-model="carryAusCountryTo"
              >
                <option value disabled>Choose</option>
                <option v-for="country in countries" :value="country.name" :key="country.id">
                  {{
                  country.name
                  }}
                </option>
              </select>
            </div>
            <div class="col-6">
              <label for="carryAusTo" class="text-orange d-block">Province</label>
              <select
                id="carryAusTo"
                type="text"
                class="form-control block"
                @change="showCarryAusThaiButton"
                v-model="carryAusTo"
              >
                <option value disabled>Choose</option>
                <option v-for="province in provinces" :value="province.name" :key="province.id">
                  {{
                  province.name
                  }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <div class="row justify-content-sm-center">
            <router-link
              href="#"
              :to="{name: 'createpostaus', params:{value1:this.carryAusCountry, value2:this.carryAusState,
            value3:this.carryAusSuburb, value4:this.carryAusCountryTo,
            value5:this.carryAusTo}}"
            >
              <button type="button" class="btn btn-orange px-5 py-2" v-if="carryAusThaiNext">Next</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--Login Section-->
    <div v-if="!$store.state.isUserLoggedIn" class="row justify-content-sm-center mt-5">
      <div class="w-75 mt-5">
        <div class="card popup-background">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 text-center content-text text-white">
                <h1 class="mt-4 mb-4">
                  <b>REQUIRE</b>
                </h1>

                <h1 class="mt-4 mb-4">LOGIN TO ACCESS THIS PAGE</h1>
              </div>
            </div>
            <hr class="bg-light mb-3 w-50" />
            <div class="row justify-content-sm-center mb-4">
              <router-link href="#" to="/login">
                <button type="button" class="btn btn-dark px-5 py-2 mt-4">Login</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Login Section-->
  </div>
</template>

<script>
import CountryService from "@/services/CountryService";
import StateService from "@/services/StateService";
import ProvinceService from "@/services/ProvinceService";

export default {
  name: "carry-aus",
  props: ["carryAusThaiNext"],
  data: function() {
    return {
      countries: null,
      states: null,
      provinces: null,
      carryAusCountry: "Australia",
      carryAusState: "",
      carryAusSuburb: "",
      carryAusCountryTo: "Thailand",
      carryAusTo: ""
    };
  },
  methods: {
    showCarryAusThaiButton: function() {
      var value1 = this.carryAusCountry;
      var value2 = this.carryAusState;
      var value3 = this.carryAusSuburb;
      var value4 = this.carryAusCountryTo;
      var value5 = this.carryAusTo;

      if (value1 == "Thailand") {
        this.$router.push({
          name: "CarryThai"
        });
      } else if (
        value1 == "" ||
        value2 == "" ||
        value3 == "" ||
        value4 == "" ||
        value5 == ""
      ) {
        this.$emit("showCarryAusThaiButton", false);
      } else {
        this.$emit("showCarryAusThaiButton", true);
      }
    }
  },
  async mounted() {
    this.countries = (await CountryService.getAllCountries()).data;
    this.states = (await StateService.getAllStates()).data;
    this.provinces = (await ProvinceService.getAllProvinces()).data;
  }
};
</script>

<style>
</style>