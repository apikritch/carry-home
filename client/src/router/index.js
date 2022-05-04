import Vue from "vue";
//Import Vue Router
import Router from "vue-router";

//Import Component
import Home from "@/components/Home.vue";
import Carry from "@/components/Carry/Carry.vue";
import CarryAus from "@/components/Carry/CarryAus.vue";
import CarryThai from "@/components/Carry/CarryThai.vue";
import Send from "@/components/Send/Send.vue";
import SendAus from "@/components/Send/SendAus.vue";
import SendThai from "@/components/Send/SendThai.vue";
import CreatePostAus from "@/components/CreatePostAus.vue";
import CreatePostThai from "@/components/CreatePostThai.vue";
import EditPost from "@/components/EditPost.vue";
import Post from "@/components/Post/Post.vue";
import ViewPost from "@/components/Post/PostDetail/ViewPost.vue";
import Profile from "@/components/Profile.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import NotFound from "@/components/NotFound.vue";
import CreateProfile from "@/components/CreateProfile.vue";
import EditProfile from "@/components/EditProfile.vue";
import EditUser from "@/components/EditUser.vue";
import EditPassword from "@/components/EditPassword.vue";
import MyPost from "@/components/MyPost.vue";

//Use Vue Router
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Home,
      props: true
    },
    {
      path: "/carry",
      name: "Carry",
      component: Carry,
      props: true
    },
    {
      path: "/carry/australia",
      name: "CarryAus",
      component: CarryAus,
      props: true
    },
    {
      path: "/carry/thailand",
      name: "CarryThai",
      component: CarryThai,
      props: true
    },
    {
      path: "/send",
      name: "Send",
      component: Send,
      props: true
    },
    {
      path: "/send/australia",
      name: "SendAus",
      component: SendAus,
      props: true
    },
    {
      path: "/send/thailand",
      name: "SendThai",
      component: SendThai,
      props: true
    },
    {
      path: "/post/aus/create",
      name: "createpostaus",
      component: CreatePostAus,
      props: true
    },
    {
      path: "/post/thai/create",
      name: "createpostthai",
      component: CreatePostThai,
      props: true
    },
    {
      path: "/post",
      name: "post",
      component: Post,
      props: true
    },
    {
      path: "/post/:postId",
      name: "viewpost",
      component: ViewPost,
      props: true
    },
    {
      path: "/post/:postId/edit",
      name: "editpost",
      component: EditPost,
      props: true
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      props: true
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      props: true
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
      props: true
    },
    { path: "*", component: NotFound },
    {
      path: "/profile/create",
      name: "CreateProfile",
      component: CreateProfile,
      props: true
    },
    {
      path: "/profile/edit",
      name: "EditProfile",
      component: EditProfile,
      props: true
    },
    {
      path: "/user/edit",
      name: "EditUser",
      component: EditUser,
      props: true
    },
    {
      path: "/user/password/edit",
      name: "EditPassword",
      component: EditPassword,
      props: true
    },
    {
      path: "/mypost",
      name: "MyPost",
      component: MyPost,
      props: true
    }
  ]
});
