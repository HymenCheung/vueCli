export default{
        template:`
        <div class="font-24 color-999 font-bolder mt-21 d-flex justify-content-between">
            <div><slot></slot>({{film_list.count}})部</div>
            <div class="font-14 color-999">全部>></div>
        </div>
         <div class="film-list d-flex flex-wrap">
                <film :film="film"
                v-for="(film,filmIndex) of film_list.data"
               :key="'film' + film.film_id" ></film>
            </div>

        `,
    props:["film_list"]
}