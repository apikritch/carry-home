<template>
  <div>
    <div v-if="$store.state.isUserLoggedIn">
      <div class="mx-5 px-5">
        <div class="row justify-content-sm-start">
          <h3 class="content-text text-orange ml-3">My Post</h3>
        </div>

        <hr class="bg-light mb-5" />

        <!--Post 1-->
        <div
          class="row justify-content-sm-center mb-3"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="col-sm-12">
            <div class="w-100">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-2">
                      <div class="row justify-content-sm-center">
                        <font-awesome-icon
                          icon="user-circle"
                          class="user-img"
                        ></font-awesome-icon>
                      </div>
                    </div>
                    <div class="col-sm-4 border-left border-secondary">
                      <h6 class="text-orange">
                        <b>Depart:</b>
                      </h6>
                      <h6>
                        {{ moment(post.depart).format("dddd, DD MMM YYYY") }}
                      </h6>
                      <h6 class="text-orange">
                        <b>From:</b>
                      </h6>
                      <h6>{{ post.suburb }}</h6>
                    </div>
                    <div
                      class="col-sm-4 border-left border-right border-secondary"
                    >
                      <h6 class="text-orange">
                        <b>To:</b>
                      </h6>
                      <h6>{{ post.province }}</h6>
                      <h6 class="text-orange">
                        <b>Postage Option:</b>
                      </h6>
                      <h6>
                        <font-awesome-icon
                          icon="paper-plane"
                        ></font-awesome-icon
                        >&nbsp;Thailand Post |
                        <span class="text-danger">Free</span>
                      </h6>
                    </div>
                    <div class="col-sm-2">
                      <div class="row justify-content-sm-center">
                        <div class="text-center price-per-kilo">
                          <h4>
                            {{ post.price }}
                            <span class="text-orange">$/Kg</span>
                          </h4>
                          <router-link href="#" :to="'/post/' + post.id">
                            <button type="button" class="btn btn-orange">
                              Select
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Post 1-->
      </div>
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
import PostService from "@/services/PostService";

export default {
  name: "MyPost_1",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      posts: "",
    };
  },
  async mounted() {
    const userId = this.$store.state.user.id;
    this.posts = (await PostService.getMyPosts(userId)).data;
  },
};
</script>

<style></style>
