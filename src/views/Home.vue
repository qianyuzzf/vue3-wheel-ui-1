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
      <svg width="1200px" height="600px" xmlns="http://www.w3.org/2000/svg" class="showOrHide1">
        <path d="M 0 520 C 680 530, 650 50, 1000 0" stroke="#64dfb2" fill="transparent"/>
        <path d="M 0 540 C 680 560, 650 80, 1000 0" stroke="#64dfb2" fill="transparent"/>
      </svg>
      <svg width="480px" height="240px" xmlns="http://www.w3.org/2000/svg" class="showOrHide2">
        <path d="M 0 208 C 272 215, 260 20, 400 0" stroke="#64dfb2" fill="transparent"/>
        <path d="M 0 216 C 272 224, 260 32, 400 0" stroke="#64dfb2" fill="transparent"/>
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
    max-height: 100%;
    position: relative;
    overflow: hidden;
    @media (max-width: 600px) {
      width: 100%;
      height: 1000px;
    }
    @media (max-width: 350px) {
      height: 1050px;
    }

    > .topnav {
      position: absolute;
      left: 950px;
      top: 50px;
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      @media (max-width: 600px) {
        top: 30px;
        left: auto;
        right: 20px;
      }

      > a {
        display: block;
        padding: 5px;
        color: $font-color1;
        font-size: 1.2em;
        @media (max-width: 600px) {
          color: rgba(255, 255, 255, 0.8);
        }
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
      @media (max-width: 600px) {
        top: -40px;
        left: -40px;
        width: 320px;
        height: 240px;
      }
    }

    > svg {
      position: absolute;

      &.showOrHide2 {
        display: none;
      }

      @media (max-width: 600px) {
        &.showOrHide1 {
          display: none;
        }
        &.showOrHide2 {
          display: inline-block;
        }
      }
    }

    > .main {
      position: absolute;
      width: 500px;
      height: 300px;
      left: 700px;
      top: 160px;
      z-index: 100;
      @media (max-width: 600px) {
        top: 200px;
        left: auto;
        right: 0;
        width: 340px;
        height: 300px;
      }
      @media (max-width: 350px) {
        width: 280px;
      }

      > div {
        position: absolute;
        width: 400px;
        white-space: normal;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 600px) {
          width: 300px;
        }
        @media (max-width: 350px) {
          width: 260px;
        }

        p {
          color: $font-color1;
          font-size: 1.2em;
          @media (max-width: 600px) {
            font-size: 14px;
            line-height: 22px;
          }
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
        @media (max-width: 600px) {
          top: 160px;
        }
        @media (max-width: 350px) {
          top: 210px;
        }
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
      @media (max-width: 600px) {
        top: 120px;
        left: 70px;
        width: 100px;
        height: 100px;
      }

      > .image11 {
        position: absolute;
        border-radius: 50%;
        width: 180px;
        height: 180px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        overflow: hidden;
        @media (max-width: 600px) {
          left: 50%;
          top: 50%;
          width: 80px;
          height: 80px;
        }
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
      @media (max-width: 600px) {
        top: 75px;
        left: 160px;
        width: 100px;
        height: 100px;
      }

      > .image21 {
        position: absolute;
        border-radius: 50%;
        width: 160px;
        height: 160px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        overflow: hidden;
        @media (max-width: 600px) {
          left: 50%;
          top: 50%;
          width: 80px;
          height: 80px;
        }
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
      @media (max-width: 600px) {
        top: 350px;
        left: auto;
        right: 0;
        width: 100px;
        height: 100px;
      }
      @media (max-width: 350px) {
        top: 440px;
      }
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
        @media (max-width: 600px) {
          height: 140px;
          top: 480px;
          left: auto;
          right: 20px;
          border-radius: 10px;
        }
        @media (max-width: 350px) {
          top: 560px;
        }

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
          @media (max-width: 600px) {
            height: 120px;
            grid-template-rows: auto;
            grid-template-columns: auto;
            overflow: visible;
            border-radius: 10px;
          }

          > svg {
            display: block;
            grid-row: 1/2;
            grid-column: 2/3;
            height: 60px;
            width: 60px;
            @media (max-width: 600px) {
              top: 50%;
              left: -140px;
              position: absolute;
              height: 60px;
              width: 60px;
            }
          }

          > div {
            grid-row: 2/3;
            grid-column: 1/4;
            padding: 0 15px;
            @media (max-width: 600px) {
              grid-row: 1/3;
              padding: 15px;
            }

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
        @media (max-width: 600px) {
          height: 140px;
          top: 630px;
          left: auto;
          right: 20px;
        }
        @media (max-width: 350px) {
          top: 710px;
        }

        > .text21 {
          width: 200px;
          grid-template-columns: 68px auto 68px;
          @media (max-width: 600px) {
            grid-template-columns: auto;
          }
        }
      }

      > .text3 {
        left: 620px;
        width: 220px;
        @media (max-width: 600px) {
          height: 160px;
          top: 780px;
          left: auto;
          right: 20px;
        }
        @media (max-width: 350px) {
          top: 860px;
        }

        > .text31 {
          width: 200px;
          grid-template-columns: 68px auto 68px;
          @media (max-width: 600px) {
            grid-template-columns: auto;
            height: 140px;
          }
        }
      }
    }
  }
}
</style>