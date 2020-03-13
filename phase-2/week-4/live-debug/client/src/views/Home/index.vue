<template>
  <div class="home">
    <LeftMenu />
    <RightMenu />
    <div :click="toChat" class="chat">
      <img src="../../assets/dokter.png" alt="dokter-chat" />
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu'
import RightMenu from './components/RightMenu'
export default {
  name: 'Home',
  components: {
    LeftMenu,
    RightMenu
  },
  methods: {
    toChat: function () {
      this.$router.push('/tanya-dokter')
    }
  }
}
</script>

<style>
.home {
  display: flex;
}
.left-side {
  width: 70%;
  padding: 30px 30px;
}
.right-side {
  width: 30%;
  padding: 30px 30px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}
.card-menu {
  display: flex;
  margin: 15px 0;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 20px 10px;
  border-radius: 15px;
  box-shadow: 0 5px 5px #dfdfdf;
  transition: 1s;
}
.card img {
  width: 80px;
}
.card p {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
.card:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.articel-card {
  display: flex;
  margin: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 10px;
}
.articel-card img {
  width: 140px;
  height: 100px;
  object-fit: cover;
}
.articel-card h3 {
  line-height: 30px;
  font-size: 18px !important;
}
.chat {
  position: fixed;
  bottom: 0;
  right: 0;
  transition: 1s;
}
.chat img {
  width: 300px;
}
.chat:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
