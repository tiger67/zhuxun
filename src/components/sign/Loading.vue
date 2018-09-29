<template>
  <span class="btn-loading">
  </span>
</template>
<style lang="scss">
@keyframes rolling {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.btn-loading {
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: -4px;
    margin-right: 10px;
    /* display: none; */
    display: inline-block;
    &:before {
        box-sizing: border-box;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border-radius: 10px;
        border: 2px solid #fff;
        border-bottom-color: transparent;
        vertical-align: middle;
        animation: rolling .8s infinite linear;
        z-index: 1;
    }
    &:after {
        box-sizing: border-box;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
}

</style>
