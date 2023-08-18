export default{
        template:`

            <div class=" font-20 color-999 font-bolder mt-9"><slot></slot></div>
            <div class="d-flex align-items-center mt-6">
                <div class="rk-img mr-18 ">
                    <img :src="'/img/'+film_list[0].film_cover_image" alt="">
                </div>
                <div class="">
                    <div class="font-14 color-999">{{film_list[0].film_name}}</div>
                    <div class="font-18 color-ff0000 mt-12">{{film_list[0].film_box}}万</div>
                </div>
            </div>
                <template  v-for="(film,filmIndex) of film_list"
                    :key="'film-rk' + film.film_id">
                    <div class="d-flex align-items-center mt-9"
                        v-if="filmIndex != 0">
                        <div class="color-ff0000 font-bold">{{filmIndex +1}}</div>
                        <div class="color-999">{{film.film_name}}</div>
                        <div class="ml-auto color-ff0000">{{film.film_box}}万</div>
                    </div>
                <template>

        `,
    props:["film_list"]
}