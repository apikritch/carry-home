const AuthenticationController = require("./../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./../policies/AuthenticationControllerPolicy");
const PostsController = require("./../controllers/PostsController");
const CountriesController = require("./../controllers/CountriesController");
const StatesController = require("./../controllers/StatesController");
const ProvincesController = require("./../controllers/ProvincesController");
const UserInfoController = require("./../controllers/UserInfoController");

module.exports = app => {
  app.post(
    "/signup",
    AuthenticationControllerPolicy.signup,
    AuthenticationController.signup
  );
  app.post("/login", AuthenticationController.login);

  app.get("/posts", PostsController.getPosts);
  app.get("/posts/:postsId", PostsController.getPostById);
  app.post("/posts/:usersId", PostsController.postPosts);
  app.put("/posts/:postsId", PostsController.putPostById);
  app.delete("/posts/:postsId", PostsController.deletePostById);

  app.get("/users/:usersId", UserInfoController.getUserInfoById);
  app.post("/users/:usersId", UserInfoController.postUserInfoById);
  app.put("/users/:usersId", UserInfoController.putUserInfoById);

  app.get("/user/:usersId", AuthenticationController.getUserById);
  app.put("/user/:usersId", AuthenticationController.putUserById);
  app.put("/user/password/:usersId", AuthenticationController.putPasswordById);

  app.get("/countries", CountriesController.getAllCountries);
  app.get("/states", StatesController.getAllStates);
  app.get("/provinces", ProvincesController.getAllProvinces);

  app.get("/myposts/:usersId", PostsController.getMyPosts);
};
