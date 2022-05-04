<template>
  <div>
    <div class="mx-5 px-5">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">Send</h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--From-->
      <!-- <h4 class="text-orange">
        <u>Form</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <label for="filter-from-country" class="text-orange d-block"
            >Country</label
          >
          <select
            id="filter-from-country"
            type="text"
            class="form-control block"
          >
            <option value selected>Choose</option>
            <option></option>
          </select>
        </div>
        <div class="col-sm-4">
          <label for="filter-from-state" class="text-orange d-block"
            >State</label
          >
          <select id="filter-from-state" type="text" class="form-control block">
            <option value selected>Choose</option>
            <option></option>
          </select>
        </div>
        <div class="col-sm-4">
          <label for="filter-from-city" class="text-orange d-block">City</label>
          <select id="filter-from-city" type="text" class="form-control block">
            <option value selected>Choose</option>
            <option></option>
          </select>
        </div>
      </div>-->
      <!--From-->

      <!--To-->
      <!--<div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <h4 class="text-orange">
            <u>To</u>
          </h4>
          <label for="filter-to-country" class="text-orange d-block"
            >Country</label
          >
          <select id="filter-to-country" type="text" class="form-control block">
            <option value selected>Choose</option>
            <option></option>
          </select>
        </div>
        <div class="col-sm-4">
          <label for="filter-to-city" class="text-orange d-block">City</label>
          <select id="filter-to-city" type="text" class="form-control block">
            <option value selected>Choose</option>
            <option></option>
          </select>
        </div>
      </div>-->
      <!--To-->

      <!--Depart-->
      <!--<div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <h4 class="text-orange mb-3">
            <u>Sort by</u>
          </h4>
          <select id="filter-depart" type="text" class="form-control block">
            <option value selected>Choose</option>
            <option></option>
          </select>
        </div>
      </div>-->
      <!--Depart-->

      <!-- <hr class="bg-light mb-5" />-->

      <!--Search-->
      <Search class="mb-3"></Search>
      <!--Search-->

      <!--Create Button-->
      <div class="container" v-if="$store.state.isUserLoggedIn">
        <div class="row justify-content-end">
          <router-link href="#" to="/post/aus/create">
            <button type="button" class="btn btn-orange px-3 py-2 create-but">
              <font-awesome-icon icon="plus"></font-awesome-icon>&nbsp;Create
              Post
            </button>
          </router-link>
        </div>
      </div>
      <!--Create Button-->

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
                      <font-awesome-icon icon="paper-plane"></font-awesome-icon
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
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PostService from "@/services/PostService";
import Search from "@/components/Search";

export default {
  name: "Post_1",
  components: {
    FontAwesomeIcon,
    Search,
  },
  data() {
    return {
      posts: null,
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.posts = (await PostService.getPosts(value)).data;
        console.log(this.posts)
      },
    },
  },
};
</script>

<style></style>
