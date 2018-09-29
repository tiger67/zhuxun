function checkMobile(sMobile) {
  return /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(sMobile);
}
import d from "./data"
export default {
  mobilevty: {
    inserted(el) {
      el.addEventListener("blur", () => {
        console.log(checkMobile(d.mobile));
      })
    }
  }
}
