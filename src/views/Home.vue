<template>
  <div class="body">
    <div class="page">
      <div class="topnav">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="https://gitee.com/" target="_blank">Gitee</a>
        <div class="logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ui"/>
          </svg>
        </div>
      </div>
      <div class="bigImage">
        <img src="../images/2.jpg" alt/>
      </div>
      <svg width="1200px" height="600px" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 520 C 680 530, 650 50, 1000 0" stroke="#64dfb2" fill="transparent"/>
        <path d="M 0 540 C 680 560, 650 80, 1000 0" stroke="#64dfb2" fill="transparent"/>
      </svg>
      <div class="main">
        <div>
          <p>在开始之前，推荐先学习 Vue 和 ES2015，并安装和配置了 Node.js v10.0 或以上。</p>
          <p>假设你已了解关于 HTML、CSS 和 JavaScript 的相关知识，并且已经掌握了 Vue 的开发方式。</p>
          <p>如果你想要交流学习，那么看源代码也是一个很好的主意。</p>
        </div>
        <router-link to="/doc">开始</router-link>
      </div>
      <div class="image1">
        <div class="image11">
          <img src="../images/5.jpg" alt/>
        </div>
      </div>
      <div class="image2">
        <div class="image21">
          <img src="../images/6.jpg" alt/>
        </div>
      </div>
      <div class="image3">
        <img src="../images/4.jpg" alt/>
      </div>
      <div class="texts">
        <div class="text1">
          <div class="text11">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vue"/>
            </svg>
            <div class="content">
              <h2>基于 Vue3</h2>
              <p>使用了 Vue3 部分 API</p>
            </div>
          </div>
        </div>
        <div class="text2">
          <div class="text21">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-javascript"/>
            </svg>
            <div class="content">
              <h2>基于 Javascript</h2>
              <p>源代码符合 Javascript 规范</p>
            </div>
          </div>
        </div>
        <div class="text3">
          <div class="text31">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ts"/>
            </svg>
            <div class="content">
              <h2>基于 Typescript</h2>
              <p>源代码在 Javascript 的基础上采用 Typescript 书写格式</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
      left: 950px;
      top: 50px;
      width: 200px;
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
        width: 32px;
        height: 32px;

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    > .bigImage {
      overflow: hidden;
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
        background: #4ac668;
        color: #e3edeb;
        font-size: 1.2em;
        border-radius: 8px;
        padding: 6px 20px;
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
          grid-template-rows: 60px 116px;
          grid-template-columns: 58px auto 58px;
          justify-content: center;
          z-index: 1;

          > svg {
            display: block;
            grid-row: 1/2;
            grid-column: 2/3;
            height: 60px;
            width: 60px;
          }

          > div {
            grid-row: 2/3;
            grid-column: 1/4;
            padding: 0 15px;

            h2 {
              color: $font-color1;
            }

            p {
              line-height: 26px;
              padding: 3px 0;
              color: $font-color1;
            }
          }
        }
      }

      > .text2 {
        left: 350px;
        width: 220px;

        > .text21 {
          width: 200px;
          grid-template-columns: 68px auto 68px;
        }
      }

      > .text3 {
        left: 620px;
        width: 220px;

        > .text31 {
          width: 200px;
          grid-template-columns: 68px auto 68px;
        }
      }
    }
  }
}
</style>