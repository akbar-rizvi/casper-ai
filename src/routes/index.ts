import express from "express";
const router = express.Router();
import user from "./user"
import auth from './auth'
import article from './article'


const defaultRoutes = [
  {
    path: "/user",
    route: user,
  },{
    path: "/auth",
    route: auth,
  },{
    path:"/article",
    route:article
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.get("/", async(req, res):Promise<any> => {
  return res.send("Server is running");
});


export default router;
