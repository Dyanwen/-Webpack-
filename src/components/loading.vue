<template>
  <div class="loading">
    <span>loading......</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
    };
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: 14px;
  color: #ffffff;
  border-top: 5px solid #ff0000;
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  animation: r1 1s linear infinite;
}
.loading::before,.loading::after{
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
}
.loading::before{
    border-top: 5px solid #10aeff;
    transform: rotate(120deg);
}
.loading::after{
    border-top: 5px solid #5456db;
    transform: rotate(240deg);
}
.loading span{
    position: absolute;
    width: 100px;
    height: 100px;
    font-size: 13px;
    color: #ffffff;
    text-align: center;
    line-height: 100px;
    animation: r2 1s linear infinite;
}
@keyframes r1{
    to{
        transform: rotate(360deg);
    }
}
@keyframes r2{
    to{
        transform: rotate(-360deg);
    }
}

</style>