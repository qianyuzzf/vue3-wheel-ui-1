<template>
  <div class="footer">
    <div class="content">
      <div>Vue wheel UI -Vue3</div>
      <div>Vue wheel UI -React</div>
      <div>GitHub</div>
      <div>Gitee</div>
      <div>Vue3</div>
      <div>Vue Router</div>
      <div>Vite</div>
      <div>MDN WebDocs</div>
      <div>Ant Design of Vue</div>
      <div>Vant</div>
      <div>CSDN</div>
      <div>W3school</div>
      <div>知乎</div>
      <div>掘金</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: rgba(0, 0, 0, 0.9);
  color: rgba(255, 255, 255, 0.8);

  > .content {
    padding: 50px 120px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 600px) {
      padding: 30px;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;
    }

    > div {
      font-size: 22px;
      padding: 14px 10px;
      margin: 10px 30px;
      @media (max-width: 600px) {
        padding: 0;
        margin: 0;
        line-height: 40px;
        font-size: 18px;
      }
      @media (max-width: 350px) {
        font-size: 14px;
      }
    }
  }
}
</style>