<template>
  <div class="body">
    <div class="page">
      <div class="topnav">
        <a href>GitHub</a>
        <a href>Gitee</a>
        <div class="logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue" />
          </svg>
        </div>
      </div>
      <div class="bigImage">
        <img src="../images/1.jpg" alt />
      </div>
      <svg width="1200px" height="600px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 520 C 680 530, 650 50, 1000 0" stroke="#64dfb2" fill="transparent" />
        <path d="M 0 540 C 680 560, 650 80, 1000 0" stroke="#64dfb2" fill="transparent" />
      </svg>
      <div class="main">
        <div>
          <p>在开始之前，推荐先学习 Vue 和 ES2015，并正确安装和配置了 Node.js v8.9 或以上。</p>
          <p>官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。</p>
          <p>如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。</p>
        </div>
        <a href>开始</a>
      </div>
      <div class="image1">
        <div class="image11">
          <img src="../images/1.jpg" alt />
        </div>
      </div>
      <div class="image2">
        <div class="image21">
          <img src="../images/1.jpg" alt />
        </div>
      </div>
      <div class="image3">
        <img src="../images/1.jpg" alt />
      </div>
      <div class="texts">
        <div class="text1">
          <div class="text11">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vue" />
            </svg>
            <div class="content">
              <p>JavaScript,已萨达撒大声地啊答但是</p>
            </div>
          </div>
        </div>
        <div class="text2">
          <div class="text21">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vue" />
            </svg>
            <div class="content">
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div class="text3">
          <div class="text31">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vue" />
            </svg>
            <div class="content">
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
@import '../styles/var.scss';

img {
  width: 100%;
}
.body {
  display: flex;
  justify-content: center;
  > .page {
    background: linear-gradient(225deg, rgba(179, 235, 214, 1) 0%, rgba(216, 237, 228, 1) 100%);
    width: $width1;
    min-height: 800px;
    position: relative;
    overflow: hidden;
    > .topnav {
      position: absolute;
      left: 930px;
      top: 20px;
      width: 250px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      > a {
        display: block;
        padding: 5px;
        color: $font-color1;
        font-size: 1.2em;
      }
      > .logo {
        width: 64px;
        height: 64px;
        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    > .bigImage {
      overflow: hidden;
      background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
      position: absolute;
      top: -100px;
      left: -100px;
      width: 800px;
      height: 600px;
      border-radius: 0 0 300% 50%;
    }
    > svg {
      position: absolute;
    }
    > .main {
      position: absolute;
      width: 500px;
      height: 300px;
      left: 700px;
      top: 160px;
      z-index: 100;
      > div {
        position: absolute;
        width: 400px;
        white-space: normal;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        p {
          color: $font-color1;
          font-size: 1.2em;
        }
      }
      > a {
        position: absolute;
        display: block;
        background: #6cdb87;
        color: #d4f1ea;
        font-size: 1.5em;
        border-radius: 15px;
        padding: 6px 25px;
        width: 100px;
        height: 50px;
        top: 220px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    > .image1 {
      position: absolute;
      border-radius: 50%;
      top: 330px;
      left: 300px;
      width: 200px;
      height: 200px;
      z-index: 20;
      > .image11 {
        position: absolute;
        border-radius: 50%;
        width: 180px;
        height: 180px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        overflow: hidden;
      }
    }
    > .image2 {
      position: absolute;
      border-radius: 50%;
      top: 200px;
      left: 480px;
      width: 180px;
      height: 180px;
      z-index: 20;
      > .image21 {
        position: absolute;
        border-radius: 50%;
        width: 160px;
        height: 160px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        overflow: hidden;
      }
    }
    > .image3 {
      position: absolute;
      overflow: hidden;
      left: 900px;
      bottom: 0;
      width: 300px;
      height: 300px;
      border-radius: 100% 60% 0;
      z-index: 20;
    }
    > .texts {
      > div {
        border: 2px solid $line-color1;
        position: absolute;
        border-radius: 15%;
        bottom: 30px;
        left: 100px;
        width: 200px;
        height: 200px;
        z-index: 30;
        > div {
          border: 2px solid $line-color1;
          position: absolute;
          border-radius: 15%;
          width: 180px;
          height: 180px;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          overflow: hidden;
          display: grid;
          grid-template-rows: 80px 96px;
          grid-template-columns: 48px auto 48px;
          justify-content: center;
          z-index: 1;
          > svg {
            display: block;
            grid-row: 1/2;
            grid-column: 2/3;
            height: 80px;
            width: 80px;
          }
          > div {
            grid-row: 2/3;
            grid-column: 1/4;
            padding: 0 15px;
            p {
              color: $font-color1;
            }
          }
        }
      }
      > .text2 {
        left: 350px;
      }
      > .text3 {
        left: 600px;
      }
    }
  }
}
</style>