export default{
    template:`
    <!--        一个评论-->
        <div class="mt-21 d-flex" style="width:740px">
          <div class="w-10">
            <img :src="'/img/'+ info.comment_cover_image" alt="" class="radius-50" style="width:100%">
          </div>
          <div class="w-90 pl-5 color-999 font-14">
            <div class="color-666 font-16">{{info.comment_customer_name}}</div>
            <div class="d-flex mt-6">
              <div class="mr-8">{{info.comment_time}}</div>

              <div>
                <img v-if=" info.comment_score >=2 "src="/img/star_yellow.png" alt="" style="width:12px">
                <img v-if=" info.comment_score >=1 && info.comment_score <2"src="/img/star_half.png" alt="" style="width:12px">
                <img v-if=" info.comment_score < 1 "src="/img/star_off.png" alt="" style="width:12px">

                <img v-if=" info.comment_score >=4 " src="/img/star_yellow.png" alt="" style="width:12px">
                <img v-if=" info.comment_score >=3 && info.comment_score <4 " src="/img/star_half.png" alt="" style="width:12px">
                <img v-if=" info.comment_score < 3 " src="/img/star_off.png" alt="" style="width:12px">

                <img v-if=" info.comment_score >=6 " src="/img/star_yellow.png" alt="" style="width:12px">
                <img v-if=" info.comment_score >=5 && info.comment_score <6  " src="/img/star_half.png" alt="" style="width:12px">
                <img v-if=" info.comment_score < 5 " src="/img/star_off.png" alt="" style="width:12px">

                <img v-if=" info.comment_score >=8 " src="/img/star_yellow.png" alt="" style="width:12px">
                <img v-if=" info.comment_score >=7 && info.comment_score <8  " src="/img/star_half.png" alt="" style="width:12px">
                <img v-if=" info.comment_score < 7 " src="/img/star_off.png" alt="" style="width:12px">

                <img v-if=" info.comment_score >=10"  src="/img/star_yellow.png" alt="" style="width:12px">
                <img v-if=" info.comment_score >=9 && info.comment_score <10  " src="/img/star_half.png" alt="" style="width:12px">
                <img v-if=" info.comment_score < 9 " src="/img/star_off.png" alt="" style="width:12px">


              </div>
            </div>
            <div class="mt-21">
              {{info.comment_content}}
            </div>
          </div>
        </div>
        `,
    props:["info"]
}