<template>
  <div class="swiper">
    <div class="swp-p-container">
      <router-link v-for="(img,i) in lists" to="/hsh" :key="i" :class="classobject(i)" class="swp-img-wrap">
        <img class="swp-img" :src="img.img" />
      </router-link>
    </div>
    <ul class="swp-contorl">
      <li v-for="(t,i) in lists" class="swp-contorl-cell" :class="{active:preActive==i}"></li>
    </ul>
    <a class="swp-bt swp-bt-l" @click="swiper('right')"><i class="iconfont ic-previous-s"></i></a>
    <a class="swp-bt swp-bt-r" @click="swiper('left')"><i class="iconfont ic-next-s"></i></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isswipering: false,
      direction: 'left',
      active: 0,
      next: -1,
      preActive: 0,
      lists: [{
          url: '/',
          img: require('@/assets/swiper/1.jpg')
        },
        {
          url: '/',
          img: require('@/assets/swiper/2.jpg')
        },
        {
          url: '/',
          img: require('@/assets/swiper/3.jpg')
        },
        {
          url: '/',
          img: require('@/assets/swiper/4.jpg')
        },
        {
          url: '/',
          img: require('@/assets/swiper/5.png')
        }
      ]
    }
  },
  mounted() {
    setInterval(function() {
      this.swiperRun();
    }.bind(this), 5000)
  },
  methods: {
    classobject: function(i) {
      var obj = { active: this.active == i, next: i == this.next, };
      obj[this.direction] = this.next != -1 && i == this.active || i == this.next;
      return obj;
    },
    swiperRun: function() {
      if (this.isswipering) {
        return;
      }
      this.isswipering = true;
      if (this.direction == 'left') {
        this.next = (this.active + 1) % this.lists.length;
      } else {
        this.next = this.active == 0 ? this.lists.length - 1 : this.active - 1;
      }
      this.preActive = this.next;
      setTimeout(function() {
        this.active = this.next;
        this.next = -1;
        this.isswipering = false;
      }.bind(this), 600);
    },
    swiper: function(direct) {
      this.direction = direct == "right" ? 'right' : 'left';
      this.swiperRun();
    }
  }
}

</script>
<style lang="scss">
.swiper {
  border: 0px solid green;
  /* border-radius: 6px; */
  overflow: hidden;
  position: relative;
  margin-bottom: 35px;
  .swp-p-container {
    position: relative;
    img {
      width: 100%;
      background-color: hsla(0, 1%, 71%, 0.2);
      display: block;
    }
  }

  .swp-img-wrap {
    width: 100%;
    display: none;
  }

  @keyframes swiper {
    0% {
      transform: translate(100%, 0);
    }
  }

  @keyframes swiperLeft {
    0% {
      transform: translate(100%, 0);
    }
  }

  @keyframes swiperRight {
    0% {
      transform: translate(-100%, 0);
    }
  }

  .swp-img-wrap.left {
    margin-left: -100%;
    animation: swiperLeft .6s ease-in-out;
  }

  .swp-img-wrap.right {
    margin-left: 100%;
    animation: swiperRight .6s ease-in-out;
  }

  .next.right {
    display: block;
    position: relative;
    left: -100%;
  }

  .next.left {
    display: block;
    position: relative;
    left: 100%;
  }
  .swp-contorl {
    width: 80%;
    left: 10%;
    text-align: center;
    position: absolute;
    bottom: 18px;
    z-index: 5;
  }
  .active {
    display: block;
  }
  .active.right,
  .active.left {
    position: absolute;
    left: 0;
    top: 0;
  }
  .swp-contorl-cell {
    display: inline-block;
    width: 25px;
    height: 2px;
    background-color: rgba(0, 0, 0, .3);
    margin-left: 10px;
  }

  .swp-contorl-cell:first-child {
    margin-left: 0px;
  }
  .swp-contorl-cell.active {
    background-color: #fff;
  }

  .swp-bt {
    background-color: rgba(0, 0, 0, .4);
    height: 50px;
    line-height: 50px;
    width: 40px;
    top: 40%;
    position: absolute;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    cursor: pointer;
    display: none;
  }

  &:hover .swp-bt {
    display: block;
  }

  .swp-bt-l {
    left: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .swp-bt-r {
    right: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
}

</style>
