import API from "@/api"

function empty() {
  if (!this.isvertify) {
    return
  }
  if (this.value == "") {
    this.isvertify = false;
    this.msg = `${this.name}不能为空`;
    return false;
  } else {
    this.isvertify = true;
    return true;
  }
}

function mobile() {
  if (!this.isvertify) {
    return
  }
  if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.value)) {
    this.isvertify = false;
    this.msg = "手机号格式错误"
    return false;
  } else {
    this.isvertify = true;
    return true;
  }
}

async function nickname() {
  if (this.isvertify) {
    var nickName = this.value;
    var res = await API["get/api/u/checkNickName"]({ nickName });
    if (res.data.code !== 0) {
      this.isvertify = false;
      this.msg = res.data.msg;
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}

async function mobile1() {
  if (this.isvertify) {
    var mobile = this.value;
    var res = await API["get/api/u/checkMobile"]({ mobile, type: 1 });
    if (res.data.code !== 0) {
      this.isvertify = false;
      this.msg = res.data.msg;
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}

async function mobile2() {
  if (this.isvertify) {
    var mobile = this.value;
    var res = await API["get/api/u/checkMobile"]({ mobile, type: 2 });
    if (res.data.code !== 0) {
      this.isvertify = false;
      this.msg = "手机号未注册";
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}


export default {
  empty,
  mobile,
  nickname,
  mobile1,
  mobile2
}
