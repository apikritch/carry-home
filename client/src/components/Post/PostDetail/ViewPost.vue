<template>
  <div>
    <div class="mx-5 px-5">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">
          <router-link href="#" to="/post" class="text-link"
            >Send&nbsp;</router-link
          >
          <span class="text-white">></span> Detail
        </h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--Edit Button-->
      <div class="container" v-if="show">
        <div class="row justify-content-end">
          <router-link href="#" :to="'/post/' + post.id + '/edit'">
            <button type="button" class="btn btn-orange px-3 py-2 create-but">
              <font-awesome-icon icon="pen"></font-awesome-icon>&nbsp;Edit Post
            </button>
          </router-link>
          <button
            @click="deletePost"
            type="button"
            class="btn btn-orange px-3 py-2 create-but ml-3"
          >
            <font-awesome-icon icon="trash"></font-awesome-icon>&nbsp;Delete
            Post
          </button>
        </div>
      </div>
      <!--Create Button-->

      <!--Post Information-->
      <div class="row justify-content-sm-center mb-3">
        <div class="col-sm-12">
          <div class="w-100">
            <div class="card">
              <div class="card-body">
                <div class="container">
                  <!--User Image-->
                  <div class="row justify-content-sm-center">
                    <font-awesome-icon
                      icon="user-circle"
                      class="user-img-detail"
                    ></font-awesome-icon>
                  </div>
                  <!--User Image-->

                  <hr class="bg-dark mb-5" />

                  <!--Information-->
                  <div class="container mb-5">
                    <div class="row justify-content-sm-center">
                      <div class="col-sm-6 border-right border-secondary">
                        <div class="container">
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Name:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ user.fname }} {{ user.lname }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Email:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ user.email }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Phone (AU):</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ userInfo.phoneau }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Phone (TH):</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ userInfo.phoneth }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Social Media:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ userInfo.social }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Pickup Location:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ post.pickup }}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="container">
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Depart:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>
                                {{
                                  moment(post.depart).format(
                                    "dddd, DD MMMM YYYY"
                                  )
                                }}
                              </h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>From:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ post.suburb }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>To:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ post.province }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Postage Option:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>{{ post.postopt }}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Postage Fee:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>Not Include</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-orange">
                    <b>Description:</b>
                  </h6>
                  <div class="row justify-content-sm-start mb-3">
                    <div class="container">
                      <div class="col-sm-12">
                        <div class="w-100">
                          <div class="card border-orange">
                            <div class="card-body description">
                              {{ post.description }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row justify-content-sm-center">
                    <div class="text-center">
                      <h4>
                        {{ post.price }}
                        <span class="text-orange">$/Kg</span>
                      </h4>
                    </div>
                  </div>

                  <div class="row justify-content-center mt-3">
                    <router-link to="/post/">
                      <button type="button" class="btn btn-orange mb-2">
                        Back
                      </button>
                    </router-link>
                  </div>
                  <!--Information-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Post Information-->
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PostService from "@/services/PostService";
import AuthenticationService from "@/services/AuthenticationService";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "ViewPost",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      post: "",
      user: "",
      userInfo: "",
      show: false,
    };
  },
  methods: {
    async deletePost() {
      try {
        const postId = this.$store.state.route.params.postId;
        await PostService.deletePostById(postId);
        this.$router.push({
          name: "post",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    const postId = this.$store.state.route.params.postId;
    this.post = (await PostService.getPostById(postId)).data;

    const userId = this.post.userId;
    this.userInfo = (await UserInfoService.getUserInfoById(userId)).data;
    this.user = (await AuthenticationService.getUserById(userId)).data;

    if (this.$store.state.user.id == this.post.userId) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
};
</script>

<style></style>
