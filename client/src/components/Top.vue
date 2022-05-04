<template>
  <div>
    <!--Login Button-->
    <div class="row justify-content-end pt-3 mr-3">
      <div class="position-absolute">
        <div>
          <div
            v-if="!$store.state.isUserLoggedIn"
            class="row justify-content-sm-end"
          >
            <router-link
              href="#"
              class="login-section border-right border-white"
              to="/login"
            >
              <p class="plain-text-20 text-white mr-3 white-link">Log In</p>
            </router-link>
            <router-link href="#" class="login-section" to="/signup">
              <p class="plain-text-20 text-white ml-3 white-link">Sign Up</p>
            </router-link>
          </div>
        </div>
        <!--Login Button-->

        <!--Login Image-->
        <div v-if="$store.state.isUserLoggedIn">
          <div class="row justify-content-sm-end mb-3">
            <a class="login-section pointer" @click="showDropdown()">
              <font-awesome-icon
                icon="user-circle"
                class="text-white user-img-login login-section"
              ></font-awesome-icon>
            </a>
          </div>
        </div>
        <!--Login Image-->

        <!--Login Dropdown-->
        <div v-if="dropdownBox">
          <div
            class="row justify-content-sm-end login-section"
            :class="dropdownBoxState"
          >
            <div class="card popup-background login-section">
              <div class="card-body">
                <p class="text-center text-white">{{ fname }} {{ lname }}</p>
                <p class="text-center">{{ email }}</p>
                <hr class="bg-light" />
                <router-link href="#" to="/profile" class="text-link-dark">
                  <p>My Profile</p>
                </router-link>
                <router-link href="#" to="/mypost" class="text-link-dark">
                  <p>My Post</p>
                </router-link>

                <hr class="bg-light" />
                <a class="text-link-dark" @click="logout">
                  <p class="text-center pointer">Log Out</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Login Dropdown-->

    <div class="container">
      <div class="position-relative">
        <!--Logo-->
        <div class="row justify-content-sm-center mt-3 mb-3">
          <div class="col-3 align-self-center border-right border-white mr-4">
            <router-link href="#" to="/carry/australia">
              <h5 class="text-white float-right mr-5 white-link">Carry</h5>
            </router-link>
          </div>
          <div class="col-2 align-self-center text-center p-0">
            <router-link href="#" to="/">
              <h1 class="logo-font text-white w-100 white-link">CH</h1>
            </router-link>
          </div>
          <div class="col-3 align-self-center border-left border-white ml-4">
            <router-link href="#" to="/post">
              <h5 class="text-white float-left ml-5 white-link">Send</h5>
            </router-link>
          </div>
        </div>
        <!--Logo-->
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Top_1",
  components: {
    FontAwesomeIcon,
  },
  data: function () {
    return {
      dropdownBox: false,
      fname: null,
      lname: null,
      email: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.dropdownBox = !this.dropdownBox;
      this.$router.push({ name: "root" });
    },
    dropdownBoxState: function () {
      return this.dropdownBox ? "d-flex" : "d-none";
    },
    showDropdown: function () {
      this.fname = this.$store.state.user.fname;
      this.lname = this.$store.state.user.lname;
      this.email = this.$store.state.user.email;

      return (this.dropdownBox = !this.dropdownBox);
    },
  },
};
</script>

<style></style>
