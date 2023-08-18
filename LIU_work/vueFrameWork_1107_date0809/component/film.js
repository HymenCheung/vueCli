export default{
    template:`
  <div class="film">
    <img :src="'img/'+film.film_cover_image" alt="" style="width:160px">
    <div class="d-flex justify-between align-end">
      <div class="film-title">{{film.film_name}}</div>
      <div class="score">{{film.film_rank}}</div>
    </div>
    <div class="title-en">
      {{film.film_title}}
    </div>
    <div class="d-flex justify-between">
       <div>
         <span class="type"
            v-for="(cate,cateIndex) of film.category_list"
            :key="'cate' + cate.category_id">{{cate.category_name}}</span>

       </div>
      <div class="time">{{film.film_duration}}</div>
    </div>
<!-- 上映时间和地点-->
    <div class="d-flex justify-between align-end">
      <div class="date">{{film.film_release_date}}</div>
      <div class="d-flex align-end">
        <div class="loc"
            v-for="(loc,locIndex) of film.country_list"
            :key="'loc'+ loc.country_id">{{film.country_name}}</div>

      </div>
    </div>
    <div class="d-flex flex-wrap">
      <span class="actor"
        v-for="(actor,actorIndex) of film.actor_list"
        :key="'actor'+actor.actor_id">{{actor.actor_name}}</span>


    </div>
  </div>

        `,
    props:["film"]

}