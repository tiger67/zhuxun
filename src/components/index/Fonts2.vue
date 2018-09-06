<template>
  <div id="fonts-example">
    <h2 class="fonts-example-title">简书字体</h2>
    <div class="container">
      <div class="font-wrap" v-for="f in fonts">
        <i class="iconfont" :class="f"></i>
        <span class="font-text">{{f}}</span>
      </div>
    </div>
  </div>
</template>
<script>
let str = "ic-info .ic-arrow .ic-search .ic-qq_connect .ic-douban .ic-location .ic-next .ic-previous .ic-unfollow .ic-phone .ic-catalog .ic-search-history .ic-share-more .ic-work .ic-share-wechat .ic-education .ic-social .ic-question .ic-google_oauth2 .ic-share-weibo .ic-edit-s .ic-wechat .ic-weibo .ic-hot .ic-feed .ic-latestcomments .ic-articles .ic-official .ic-write .ic-discover-collections .ic-discover-user .ic-back .ic-article-mark .ic-article-like .ic-collections-followed .ic-collection .ic-settings-money .ic-settings-profile .ic-settings-basic .ic-settings-verify .ic-settings-account .ic-settings-block .ic-search-collection .ic-search-notebook .ic-money .ic-comment-emotions .ic-comment-at .ic-navigation-night .ic-navigation-mark .ic-navigation-profile .ic-navigation-help .ic-navigation-settings .ic-navigation-wallet .ic-navigation-like .ic-navigation-feedback .ic-filter .ic-subscribed .ic-fail .ic-addcollection .ic-phonenumber .ic-user .ic-list-comments .ic-list-like .ic-list-read .ic-list-money .ic-followed .ic-follow .ic-friends .ic-like-active .ic-like .ic-navigation-signout .ic-others .ic-requests .ic-follows .ic-chats .ic-comments .ic-likes .ic-woman .ic-man .ic-password .ic-ios .ic-error .ic-android .ic-verify .ic-show .ic-hide .ic-previous-s .ic-next-s .ic-go .ic-none .ic-zan-active .ic-comment .ic-zan .ic-share .ic-backtop .ic-addcollectionmodal .ic-link .ic-more .ic-report .ic-block .ic-delete .ic-email .ic-recommend .ic-city .ic-recommend-collection .ic-recommend-user .ic-article-s .ic-collection-s .ic-subcomment .ic-navigation-discover .ic-navigation-notification .ic-navigation-follow .ic-navigation-download .ic-successed .ic-unblock .ic-applying .ic-addpeople .ic-mark .ic-search-user .ic-search-note .ic-picture .ic-navigation-mode .ic-mark-active .ic-note-requests .ic-latest .ic-search-change .ic-schoolyard .ic-candy .ic-qrcode .ic-paid .ic-tag .ic-club .ic-audio";
var fonts = str.split(/\s\./);
export default {
  data() {
    return { fonts: fonts }
  }
}

</script>
<style>
#fonts-example {
  width: 1275px;
  margin: 20px auto 50px;
}

#fonts-example:before,
#fonts-example:after {
  display: table;
  content: '';
  clear: both;
}

.fonts-example-title {
  color: #ea6f5a;
  font-size: 26px;
  clear: both;
}

.font-wrap {
  float: left;
  width: 180px;
  font-size: 26px;
  padding: 20px 0px;
  border: 1px solid #eee;
  text-align: center;
  margin-top: -1px;
  margin-left: -1px;
}

.font-text {
  display: block;
  text-align: center;
  font-size: 15px;
  margin-top: 5px;
  color: #888;
  text-align: center;
  margin-bottom: 10px;
}

</style>
