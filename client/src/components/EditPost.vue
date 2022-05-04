<template>
  <div v-if="$store.state.isUserLoggedIn">
    <div class="mx-5 px-5">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">Edit Post</h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--Depart-->
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <h4 class="text-orange mb-3">
            <u>Depart</u>
          </h4>
          <b-form-input
            required
            type="date"
            id="add-depart"
            v-model="$v.post.depart.$model"
            :state="$v.post.depart.$dirty ? !$v.post.depart.$error : null"
            aria-describedby="depart-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="depart-feedback"
          >This field is required.</b-form-invalid-feedback>
        </div>
      </div>
      <!--Depart-->

      <hr class="bg-light mb-5" />

      <!--Infomation Row 1-->
      <h4 class="text-orange">
        <u>Information</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-6">
          <label for="add-firstname" class="text-orange d-block">First Name</label>

          <b-form-input
            disabled
            required
            type="text"
            id="add-firstname"
            v-model="$v.user.fname.$model"
            :state="$v.user.fname.$dirty ? !$v.user.fname.$error : null"
            aria-describedby="fname-feedback"
          />

          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="fname-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>

        <div class="col-sm-6">
          <label for="add-lastname" class="text-orange d-block">Last Name</label>
          <b-form-input
            disabled
            required
            type="text"
            id="add-lastname"
            v-model="$v.user.lname.$model"
            :state="$v.user.lname.$dirty ? !$v.user.lname.$error : null"
            aria-describedby="lname-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="lname-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
      </div>
      <!--Infomation Row 1-->

      <!--Infomation Row 2-->
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <label for="add-email" class="text-orange d-block">Email</label>
          <b-form-input
            disabled
            required
            type="email"
            id="add-email"
            v-model="$v.user.email.$model"
            :state="$v.user.email.$dirty ? !$v.user.email.$error : null"
            aria-describedby="email-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="email-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
        <div class="col-sm-4">
          <label for="add-social-media-text" class="text-orange d-block">Social Media</label>
          <div class="input-group">
            <div class="input-group-prepend input-width">
              <select id="add-social-media" type="text" class="input-group-text social-drop">
                <option value selected>Line</option>
              </select>
              <input
                disabled
                type="text"
                class="social-input form-control"
                id="add-social-media-text"
                placeholder="Optional"
                v-model="userInfo.social"
              />
            </div>
          </div>
        </div>
      </div>
      <!--Infomation Row 2-->

      <!--Infomation Row 3-->
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <label for="add-aus-phone" class="text-orange d-block">Phone (Australia)</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text social-drop">AU</span>
            </div>
            <b-form-input
              disabled
              required
              type="text"
              class="social-input form-control"
              id="add-aus-phone"
              v-model="$v.userInfo.phoneau.$model"
              :state="$v.userInfo.phoneau.$dirty ? !$v.userInfo.phoneau.$error : null"
              aria-describedby="phoneau-feedback"
            />
            <b-form-invalid-feedback
              class="text-white bg-danger rounded p-1"
              id="phoneau-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-sm-4">
          <label for="add-thai-phone" class="text-orange d-block">Phone (Thailand)</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text social-drop">TH</span>
            </div>
            <b-form-input
              disabled
              required
              type="text"
              class="social-input form-control"
              id="add-aus-phone"
              v-model="$v.userInfo.phoneth.$model"
              :state="$v.userInfo.phoneth.$dirty ? !$v.userInfo.phoneth.$error : null"
              aria-describedby="phoneth-feedback"
            />
            <b-form-invalid-feedback
              class="text-white bg-danger rounded p-1"
              id="phoneth-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </div>
        </div>
      </div>
      <!--Infomation Row 3-->

      <hr class="bg-light mb-5" />

      <!--Address In Australia 1-->
      <h4 class="text-orange">
        <u>Address in Australia</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <label for="add-aus-address1" class="text-orange d-block">Address 1</label>
          <b-form-input
            required
            type="text"
            id="add-aus-address1"
            v-model="$v.post.address1au.$model"
            :state="$v.post.address1au.$dirty ? !$v.post.address1au.$error : null"
            aria-describedby="address1au-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="address1au-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
        <div class="col-sm-4">
          <label for="add-aus-address2" class="text-orange d-block">Address 2</label>
          <input type="text" class="form-control" id="add-aus-address2" placeholder="Optional" />
        </div>
        <div class="col-sm-4">
          <label for="add-aus-suburb" class="text-orange d-block">Suburb</label>
          <b-form-input
            required
            type="text"
            id="add-aus-suburb"
            v-model="$v.post.suburb.$model"
            :state="$v.post.suburb.$dirty ? !$v.post.suburb.$error : null"
            aria-describedby="suburb-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="suburb-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
      </div>
      <!--Address In Australia 1-->

      <!--Address In Australia 2-->
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <label for="add-aus-state" class="text-orange d-block">State</label>

          <b-form-select
            required
            id="add-aus-state"
            v-model="$v.post.state.$model"
            :state="$v.post.state.$dirty ? !$v.post.state.$error : null"
            aria-describedby="state-feedback"
          >
            <option value disabled>Choose</option>
            <option v-for="state in states" :value="state.name" :key="state.id">
              {{
              state.name
              }}
            </option>
          </b-form-select>

          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="state-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
        <div class="col-sm-4">
          <label for="add-aus-postcode" class="text-orange d-block">Postcode</label>
          <b-form-input
            required
            type="text"
            id="add-aus-postcode"
            v-model="$v.post.postcodeau.$model"
            :state="$v.post.postcodeau.$dirty ? !$v.post.postcodeau.$error : null"
            aria-describedby="postcodeau-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="postcodeau-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
      </div>
      <!--Address In Australia 2-->

      <hr class="bg-light mb-5" />

      <!--Address In Thailand 1-->
      <h4 class="text-orange">
        <u>Address in Thailand</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-12">
          <label for="add-thai-address" class="text-orange d-block">Address</label>
          <b-form-input
            required
            type="text"
            id="add-thai-address"
            v-model="$v.post.addressth.$model"
            :state="$v.post.addressth.$dirty ? !$v.post.addressth.$error : null"
            aria-describedby="addressth-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="addressth-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
      </div>
      <!--Address In Thailand 1-->

      <!--Address In Thailand 2-->
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <label for="add-thai-province" class="text-orange d-block">Province</label>
          <b-form-select
            required
            id="add-thai-province"
            v-model="$v.post.province.$model"
            :state="$v.post.province.$dirty ? !$v.post.province.$error : null"
            aria-describedby="province-feedback"
          >
            <option value disabled>Choose</option>
            <option v-for="province in provinces" :value="province.name" :key="province.id">
              {{
              province.name
              }}
            </option>
          </b-form-select>

          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="province-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
        <div class="col-sm-4">
          <label for="add-thai-postcode" class="text-orange d-block">Postcode</label>
          <b-form-input
            required
            type="text"
            id="add-thai-postcode"
            v-model="$v.post.postcodeth.$model"
            :state="$v.post.postcodeth.$dirty ? !$v.post.postcodeth.$error : null"
            aria-describedby="postcodeth-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="postcodeth-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
      </div>
      <!--Address In Thailand 2-->

      <hr class="bg-light mb-5" />

      <!--Pickup Location-->
      <h4 class="text-orange mb-3">
        <u>Pickup Location</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-5">
          <input type="text" class="form-control" id="add-pickup" v-model="post.pickup" />
        </div>
      </div>
      <!--Pickup Location-->

      <hr class="bg-light mb-5" />

      <!--Price-->
      <h4 class="text-orange mb-3">
        <u>Price</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-4">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text social-drop">
                <b>$</b>
              </span>
            </div>
            <b-form-input
              required
              type="text"
              class="social-input form-control"
              id="add-price"
              v-model="$v.post.price.$model"
              :state="$v.post.price.$dirty ? !$v.post.price.$error : null"
              aria-describedby="price-feedback"
            />
            <b-form-invalid-feedback
              class="text-white bg-danger rounded p-1"
              id="price-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="postage-check" />
            <label class="custom-control-label text-orange" for="postage-check">Included Postage</label>
          </div>
        </div>
      </div>
      <!--Price-->

      <hr class="bg-light mb-5" />

      <!--Postage Option-->
      <h4 class="text-orange mb-3">
        <u>Postage Option</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-1">
        <div class="col-sm-4">
          <input type="text" class="form-control" id="add-postage" v-model="post.postopt" />
        </div>
      </div>
      <div class="text-orange">
        <a href="#" class="text-link">
          <h4 class="d-inline">+</h4>
        </a>&nbsp;
        <div class="d-inline">Add Other Option</div>
      </div>
      <!--Postage Option-->

      <hr class="bg-light mb-5" />

      <!--Description-->
      <h4 class="text-orange mb-3">
        <u>Description</u>
      </h4>
      <div class="row justify-content-sm-start align-items-end mb-3">
        <div class="col-sm-12">
          <textarea class="form-control" id="add-description" rows="3" v-model="post.description"></textarea>
        </div>
      </div>
      <!--Description-->

      <hr class="bg-light mb-5" />

      <div class="row justify-content-sm-center">
        <button @click="save" class="btn btn-orange px-5 py-2">Submit</button>
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

import AuthenticationService from "@/services/AuthenticationService";
import UserInfoService from "@/services/UserInfoService";
import PostService from "@/services/PostService";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "CreatePostAus",
  data() {
    return {
      states: null,
      provinces: null,
      user: {
        id: "",
        fname: "",
        lname: "",
        email: ""
      },
      userInfo: {
        phoneau: "",
        phoneth: "",
        social: ""
      },
      post: {
        depart: "",
        address1au: "",
        address2au: "",
        suburb: "",
        state: "",
        postcodeau: "",
        addressth: "",
        province: "",
        postcodeth: "",
        pickup: "",
        price: "",
        postopt: "",
        description: ""
      },
      fromcountry: "",
      tocountry: ""
    };
  },
  mixins: [validationMixin],
  validations: {
    user: {
      fname: {
        required,
        minLength: minLength(3)
      },
      lname: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        minLength: minLength(3)
      }
    },
    userInfo: {
      phoneau: {
        required,
        minLength: minLength(3)
      },
      phoneth: {
        required,
        minLength: minLength(3)
      }
    },
    post: {
      depart: {
        required
      },
      address1au: {
        required,
        minLength: minLength(3)
      },
      suburb: {
        required,
        minLength: minLength(3)
      },
      state: {
        required,
        minLength: minLength(3)
      },
      postcodeau: {
        required,
        minLength: minLength(3)
      },
      addressth: {
        required,
        minLength: minLength(3)
      },
      province: {
        required,
        minLength: minLength(3)
      },
      postcodeth: {
        required,
        minLength: minLength(3)
      },
      price: {
        required,
        minLength: minLength(1)
      }
    }
  },
  methods: {
    async save() {
      // Validiaton Check
      this.$v.post.$touch();
      if (this.$v.post.$anyError) {
        return;
      }
      // Posts data
      try {
        await PostService.putPostById(
          this.$store.state.route.params.postId,
          this.post
        );
        this.$router.push({
          name: "viewpost",
          params: {
            postId: this.$store.state.route.params.postId
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    this.countries = (await CountryService.getAllCountries()).data;
    this.states = (await StateService.getAllStates()).data;
    this.provinces = (await ProvinceService.getAllProvinces()).data;

    const postId = this.$store.state.route.params.postId;
    this.post = (await PostService.getPostById(postId)).data;

    const userId = this.post.userId;
    this.userInfo = (await UserInfoService.getUserInfoById(userId)).data;
    this.user = (await AuthenticationService.getUserById(userId)).data;
  }
};
</script>


<style>
</style>