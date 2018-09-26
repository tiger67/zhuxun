import c from "data"
import $router from "@/router"
/*情况内存的登录信息*/


let isclearing = false;
let istimeouting = false;
const clear = () => {
  if (isclearing) {
    return
  }
  isclearing = true
  c.isSignIned = false;
  c.u = {};
  //sessionStorage.removeItem("user");
  clearUser
  isclearing = false;
}
const timeout = function() {
  if (istimeouting) {
    return
  }
  istimeouting = true
  clear();
  $router.push("/sign_in");
  istimeouting = false;
}
const STORAGEtYPE = "session"; //local,session
const getUser = () => {
  //return JSON.parse(sessionStorage.getItem("user"))
  return STORAGEtYPE === "local" ? JSON.parse(localStorage.getItem("user")) || {} : JSON.parse(sessionStorage.getItem("user")) || {};
}
const setUser = (user) => {
  STORAGEtYPE === "local" ? localStorage.setItem("user", JSON.stringify(user)) : sessionStorage.setItem("user", JSON.stringify(user));
}
const clearUser = () => {
  STORAGEtYPE === "local" ? localStorage.removeItem("user") : sessionStorage.removeItem("user");
}
const putUser = (user) => {
  //console.log(user);
  c.u = { ...c.u, ...user };
  setUser(c.u);
}
export default {
  clear,
  timeout,
  getUser,
  setUser,
  putUser
}
