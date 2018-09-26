import API from "@/api"
import data from "./data"
export default {
  getcomments({ id, cb, startPage, pageSize }) {
    id = id || data.id;
    API["get/api/comment/list"]({ startPage, pageSize, articleId: id, type: data.type, sort: data.sort }).then(res => {
      if (res.data.code === 0) {
        if (startPage === 1) {
          data.comments.splice(0, data.comments.length, ...res.data.data);
        } else {
          data.comments.push(...res.data.data);
        }
        //console.log(startPage);
        //console.log(res.data.data);
        cb && cb(res.data.data.length)
      }
    })
  },
  comment(obj, $paging, cb) {
    obj.type = data.type;
    API["post/api/comment/add"](obj).then(res => {
      cb && cb();
      if (res.data.code === 0) {
        this.commentsum(obj.articleId);
        $paging.init();
        //this.getcomments(obj.articleId);       
      }
    })
  },
  zan(id, cb) {
    API["post/api/comment/like"]({ commentId: id }).then(res => {
      if (res.data.code === 0) {
        //console.log(res);
        /*this.getcomments(data.id);
          this.commentsum(data.id);
        */
        cb && cb();
      }
    })

  },
  commentsum(id) {
    API["get/api/comment/sum"]({ articleId: id, type: data.type }).then(res => {
      //console.log(res);
      data.commentSum = res.data.data;
      //data.commentSum=
    })
  }
}
