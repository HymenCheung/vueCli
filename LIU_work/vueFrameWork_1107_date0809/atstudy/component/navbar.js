export default{
        template:`
  <div class="container navbar d-flex align-items-center">
      <img src="./img/logo.png" alt="">
      <a href="index.html" :class="{'active' : index == 0}">首页</a>
      <a href="film_list.html" :class="{'active' : index == 1}">电影</a>
      <a href="cinema-list.html" :class="{'active' : index == 2}">影院</a>
      <a href="" :class="{'active' : index == 3}">演出</a>
      <a href="" :class="{'active' : index == 4}">榜单</a>
      <a href="" :class="{'active' : index == 5}">热点</a>
      <a href="" :class="{'active' : index == 6}">商城</a>
      <div class="ml-auto d-flex align-items-center mr-10">
          <input type="text" placeholder="找影院、影视、影人">
          <button>搜索</button>
      </div>
      <a href="">你好，请登录</a>
      <a href="" class="">免费注册</a>
  </div>

    `,
    props:["index"]
}