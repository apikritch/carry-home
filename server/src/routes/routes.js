const AuthenticationController = require("./../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./../policies/AuthenticationControllerPolicy");
const PostsController = require("./../controllers/PostsController");
const CountriesController = require("./../controllers/CountriesController");
const StatesController = require("./../controllers/StatesController");
const ProvincesController = require("./../controllers/ProvincesController");
const UserInfoController = require("./../controllers/UserInfoController");

module.exports = app => {
  app.post(
    "/server/carry-home/signup",
    AuthenticationControllerPolicy.signup,
    AuthenticationController.signup
  );
  app.post("/server/carry-home/login", AuthenticationController.login);

  app.get("/server/carry-home/posts", PostsController.getPosts);
  app.get("/server/carry-home/posts/:postsId", PostsController.getPostById);
  app.post("/server/carry-home/posts/:usersId", PostsController.postPosts);
  app.put("/server/carry-home/posts/:postsId", PostsController.putPostById);
  app.delete("/server/carry-home/posts/:postsId", PostsController.deletePostById);

  app.get("/server/carry-home/users/:usersId", UserInfoController.getUserInfoById);
  app.post("/server/carry-home/users/:usersId", UserInfoController.postUserInfoById);
  app.put("/server/carry-home/users/:usersId", UserInfoController.putUserInfoById);

  app.get("/server/carry-home/user/:usersId", AuthenticationController.getUserById);
  app.put("/server/carry-home/user/:usersId", AuthenticationController.putUserById);
  app.put("/server/carry-home/user/password/:usersId", AuthenticationController.putPasswordById);

  app.get("/server/carry-home/countries", CountriesController.getAllCountries);
  app.get("/server/carry-home/states", StatesController.getAllStates);
  app.get("/server/carry-home/provinces", ProvincesController.getAllProvinces);

  app.get("/server/carry-home/myposts/:usersId", PostsController.getMyPosts);
};
