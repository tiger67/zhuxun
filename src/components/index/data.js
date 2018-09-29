import sign from "@/components/sign/common"
let user = sign.getUser();
//console.log(user);
export default {
  isSignIned: user.appId ? true : false,
  hasEdit: false,
  showPopSign: false,
  u: user,
  afterSigninRun: null
}
