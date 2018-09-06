import content from "./data-content"
export default {
  author: {
    name: "广东省建科建筑设计院",
    avatar: require("@/assets/home/index/avatar48.png"),
    url: "/"
  },
  title: "您了解这些建筑设计行业常识吗？",
  desc: "早上产品狗，晚上公号狗",
  createTime: "2018/08/20",
  looks: 2486,
  love: 456,
  content: content,
  comments: [{
    author: {
      avatar: require("@/assets/home/author/1.jpg"),
      name: "陕西绥德黄冰",
      url: ""
    },
    createTime: "2018.08.24 17:54",
    content: "现在读书就得要精读，要读就要读懂一本书",
    zang: 16,
    returns: 1,
    subcomments: [{
      from: {
        avatar: require("@/assets/home/author/6.png"),
        name: "断鹂",
        url: ""
      },
      to: {
        avatar: require("@/assets/home/author/1.jpg"),
        name: "陕西绥德黄冰",
        url: ""
      },
      contnet: "嗯，很有必要",
      createTime: "2018.06.26 15:14",
    }],
  }, {
    author: {
      avatar: require("@/assets/home/author/2.jpg"),
      name: "大小白杨",
      url: ""
    },
    createTime: "2018.08.24 17:33",
    content: "上当但不受骗！",
    zang: 5,
    returns: 0,
    subcomments: [],
  }, {
    author: {
      avatar: require("@/assets/home/author/3.jpg"),
      name: "筱雨馨飞",
      url: ""
    },
    createTime: "2018.08.23 22:16",
    content: "我承认我是因为标题点进来的。我还是觉得应该多读书，读好书，然后把书读好。",
    zang: 11,
    returns: 0,
    subcomments: [],
  }, {
    author: {
      avatar: require("@/assets/home/author/4.jpg"),
      name: "sbzdr",
      url: ""
    },
    createTime: "2018.08.23 15:40",
    content: "肯请老师推荐几本，最好有注释之类，帮助我理解文中的思想内容",
    zang: 56,
    returns: 2,
    subcomments: [{
      from: {
        avatar: require("@/assets/home/author/1.jpg"),
        name: "陕西绥德黄冰",
        url: ""
      },
      to: {
        avatar: require("@/assets/home/author/7.jpg"),
        name: "sbzdr",
        url: ""
      },
      contnet: "文中提到的《宋词三百首详注》和脂砚斋版《红楼梦》就很好。《追风筝的人》",
      createTime: "2018.06.26 15:14",
    }, {
      from: {
        avatar: require("@/assets/home/author/7.jpg"),
        name: "sbzdr",
        url: ""
      },
      to: {
        avatar: require("@/assets/home/author/1.jpg"),
        name: "陕西绥德黄冰",
        url: ""
      },
      contnet: "谢谢老师的不厌其烦，我会按照你推荐的认真去读",
      createTime: "2018.06.26 15:14",
    }],
  }]
}
