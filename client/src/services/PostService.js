import Api from "@/services/Api";

export default {
  getPosts(search) {
    return Api().get("posts", {
      params: {
        search: search
      }
    });
  },
  postPosts(usersId, posts) {
    return Api().post(`posts/${usersId}`, posts);
  },
  getPostById(postsId) {
    return Api().get(`posts/${postsId}`);
  },
  putPostById(postsId, posts) {
    return Api().put(`posts/${postsId}`, posts);
  },
  deletePostById(postsId) {
    return Api().delete(`posts/${postsId}`);
  },
  getMyPosts(usersId) {
    return Api().get(`myposts/${usersId}`);
  }
};
