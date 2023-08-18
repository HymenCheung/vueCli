export default{
    template:`
        <!--        一个影片-->

        <a href="film.html" class="film hover-shadow-red my-6 ">
            <img :src="'/img/'+film.film_cover_image" alt="" class="film-img">
<!--            中文标题评分-->
            <div class="d-flex justify-content-between align-items-end">
                <div class="font-12 color-333">{{film.film_name}}</div>
                <div class="color-ff0000 font-24">{{film.film_rank}}</div>
            </div>
            <div class="font-12 color-999 text-ellipsis">{{film.film_title}}</div>
<!--            分类-->
            <div class="d-flex justify-content-between font-12 color-999">
                <div class="d-flex">
                    <span class="mr-4"
                        v-for="(cate,cateIndex) of film.category_list"
                        :key="'cate' + cate.category_id">{{cate.category_name}}</span>

                </div>
                <div class="">{{film.film_duration}}</div>
            </div>
<!--            上世纪按地点-->
            <div class="d-flex justify-content-between font-12 color-999">
                <div>{{film.film_release_date}}</div>
                <div>
                    <span class="mr-4"
                        v-for="(loc,locIndex) of film.country_list"
                        :key="'loc'+ loc.country_id">{{film.country_name}}</span>

                </div>
            </div>
            <div class="d-flex  font-12 color-999 flex-wrap">
                <div class="mr-4"
                    v-for="(actor,actorIndex) of film.actor_list"
                    :key="'actor'+actor.actor_id">{{actor.actor_name}}</div>

            </div>
        </div>



            `,
    props:["film"]

}