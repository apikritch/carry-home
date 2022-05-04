<template>
  <div>
    <div class="mx-5 px-5" v-if="$store.state.isUserLoggedIn">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">Profile</h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--User Image-->
      <div class="row justify-content-sm-center mb-5">
        <font-awesome-icon
          icon="user-circle"
          class="user-img-detail text-white"
        ></font-awesome-icon>
      </div>
      <!--User Image-->

      <!--Information-->
      <div class="container mb-5">
        <div class="row justify-content-sm-center">
          <div class="col-sm-6 border-right border-secondary">
            <div class="container">
              <div class="row justify-content-end mb-4">
                <router-link href="#" to="/user/edit">
                  <h5>
                    <font-awesome-icon
                      class="text-link"
                      icon="pen"
                    ></font-awesome-icon>
                  </h5>
                </router-link>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Email:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{ user.email }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Password:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">**********</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Name:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{ user.fname }} {{ user.lname }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="container">
              <div class="row justify-content-end mb-4">
                <router-link href="#" to="/profile/create">
                  <h5 v-if="!userInfo">
                    <font-awesome-icon
                      class="text-link"
                      icon="plus"
                    ></font-awesome-icon>
                  </h5>
                </router-link>
                <router-link href="#" to="/profile/edit">
                  <h5 v-if="userInfo">
                    <font-awesome-icon
                      class="text-link"
                      icon="pen"
                    ></font-awesome-icon>
                  </h5>
                </router-link>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Phone (AU):</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{ userInfo.phoneau }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Phone (TH):</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{ userInfo.phoneth }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Social Media:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{ userInfo.social }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Information-->
    </div>
    <!--Login Section-->
    <div
      v-if="!$store.state.isUserLoggedIn"
      class="row justify-content-sm-center mt-5"
    >
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
                <button type="button" class="btn btn-dark px-5 py-2 mt-4">
                  Login
                </button>
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
import UserInfoService from "@/services/UserInfoService";
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Profile_1",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      user: "",
      userInfo: "",
      createBut: true,
      editBut: false,
    };
  },
  async mounted() {
    const userId = this.$store.state.user.id;
    this.user = (await AuthenticationService.getUserById(userId)).data;
    this.userInfo = (await UserInfoService.getUserInfoById(userId)).data;
  },
};
</script>

<style></style>
