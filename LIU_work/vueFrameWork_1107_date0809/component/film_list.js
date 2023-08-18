export default{
    template:`
            <div class="film-list">
                <film v-for="(film,filmIndex) of film_list"
                    :key="'film' + film.film_id" :film="film"></film>
            </div>






            `,
            /* 外界会将这个传过来*/
        props:["film_list"]

    }