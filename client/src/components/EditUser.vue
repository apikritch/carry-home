<template>
  <div>
    <div class="mx-5 px-5" v-if="$store.state.isUserLoggedIn">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">Profile</h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--User Image-->
      <div class="row justify-content-sm-center mb-5">
        <font-awesome-icon icon="user-circle" class="user-img-detail text-white"></font-awesome-icon>
      </div>
      <!--User Image-->

      <!--Information-->
      <div class="container mb-5">
        <div class="row justify-content-sm-center">
          <div class="container">
            <div class="row mb-2">
              <div class="col-sm-5 text-right information-left pr-3">
                <p class="text-orange">
                  <b>Email:</b>
                </p>
              </div>
              <div class="col-sm-7 text-left information-right">
                <input type="text" class="form-control block w-50" v-model="user.email" />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-5 text-right information-left pr-3">
                <p class="text-orange">
                  <b>Password:</b>
                </p>
              </div>
              <div class="col-sm-7 text-left information-right">
                <input
                  disabled
                  type="text"
                  class="form-control block w-50"
                  placeholder="**********"
                />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-5 text-right information-left pr-3">
                <p class="text-orange">
                  <b>First Name:</b>
                </p>
              </div>
              <div class="col-sm-7 text-left information-right">
                <input type="text" class="form-control block w-50" v-model="user.fname" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5 text-right information-left pr-3">
                <p class="text-orange">
                  <b>Last Name:</b>
                </p>
              </div>
              <div class="col-sm-7 text-left information-right">
                <input type="text" class="form-control block w-50" v-model="user.lname" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Information-->
      <div class="row justify-content-center">
        <router-link href="#" to="/user/password/edit" class="mr-3">
          <button type="button" class="btn btn-orange px-2 py-2">Change Password</button>
        </router-link>

        <button @click="save" class="btn btn-orange px-5 py-2">Save</button>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "CreateProfile",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      user: {
        fname: "",
        lname: "",
        email: ""
      }
    };
  },
  methods: {
    async save() {
      // Posts data
      try {
        await AuthenticationService.putUserById(
          this.$store.state.user.id,
          this.user
        );
        this.$router.push({
          name: "Profile"
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    const userId = this.$store.state.user.id;
    this.user = (await AuthenticationService.getUserById(userId)).data;
  }
};
</script>

<style>
</style>