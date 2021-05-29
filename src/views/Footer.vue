<template>
  <div class="footer">
    <div class="remind">
      <h3>提别提醒：以下内容为占位符，用于日后补充信息，可忽略</h3>
    </div>
    <div class="content">
      <div>message1</div>
      <div>message2</div>
      <div>message3</div>
      <div>message4</div>
      <div>message5</div>
      <div>message6</div>
      <div>message7</div>
      <div>message8</div>
      <div>message9</div>
      <div>message10</div>
      <div>message11</div>
      <div>message12</div>
      <div>message13</div>
      <div>message14</div>
      <div>message15</div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  background: rgba(0, 0, 0, 0.9);
  color: rgba(255, 255, 255, 0.8);

  > .remind {
    padding: 50px 120px 0 120px;
    @media (max-width: 600px) {
      padding: 50px 20px 0 20px;
      > h3 {
        font-size: 16px;
      }
    }
    @media (max-width: 350px) {
      padding: 30px 20px 0 20px;
    }
  }

  > .content {
    padding: 50px 120px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 600px) {
      padding: 50px 30px;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 350px) {
      padding: 30px;
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