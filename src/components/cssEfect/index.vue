<template>
  <div>
    <div class="form-group">
      <input
        type="password"
        class="search pwd"
        placeholder
        required
      />
    </div>
    <div class="wrapper">
      <div class="round">
        <span>东邪</span>
        <span>西毒</span>
        <span>南乞</span>
        <span>北丐</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    a() {
      console.log(22);
    },
  },
};
</script>

<style scoped>
.search {
  width: 180px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid lightcyan;
  outline: none;
  text-indent: 12px;
  color: #666;
  letter-spacing: 6px;
  font-size: 20px;
  padding: 0;
  transition: width 0.5s;
}
.search:focus {
  width: 200px;
}
.wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #3e69b9;
  color: #ffffff;
  position: relative;
  cursor: pointer;
  border: 2px solid #c00606;
}
.wrapper::after {
  position: absolute;
  content: "你猜";
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  font-size: 24px;
  color: #ffffff;
}
.round {
  position: relative;
  width: 240px;
  height: 240px;
  border: 2px solid lightgreen;
  border-radius: 50%;
}
.round span {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  background-color: #44aa4a;
  border: 2px solid lightgreen;
  color: #fff;
  position: absolute;
}
.round span:nth-child(1) {
  right: -22px;
  top: 50%;
  margin-top: -22px;
}
.round span:nth-child(2) {
  left: -22px;
  top: 50%;
  margin-top: -22px;
}
.round span:nth-child(3) {
  top: -22px;
  left: 50%;
  margin-left: -22px;
}
.round span:nth-child(4) {
  bottom: -22px;
  left: 50%;
  margin-left: -22px;
}
</style>