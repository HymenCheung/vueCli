export const  cinema_filter = async ({brand_id,location_id,hall_category_id,service_id} ={} ) =>{
    //声名一个数组用于存放符合条件的结果
    let result = []
    //
   await fetch("./data/cinema_list.json")
        .then(response=>response.json())
        .then(response=>{
            let flag = 0

            //遍历所有影院
            for (let cinema of response) {
//遍历当前影院的品牌和传入进来的品牌id 不相等，那么结束这轮循环（品牌不满足筛选条件，那么后面的筛选条件也不考虑）
                if(brand_id != undefined){
                    if (brand_id != cinema.brand_id){
                        continue
                    }

                }

                //判断是否存在地区的筛选条件
                if (location_id != undefined){
                    if (cinema.location_id != location_id){
                        continue

                    }
                }
                //判断是否存在放映厅
                if (hall_category_id != undefined){
                    flag = 0
                    for (let cate of cinema.hall_category_list){
                        if (cate.hall_category_id == hall_category_id){
                            flag = 1
                            break
                        }
                    }
                    if (flag == 0 ){
                        //说明不满足条件
                        continue
                    }
                }

                //判断石佛存在服务要求
                if (service_id != undefined){
                    flag = 0
                    for (let service of cinema.service_list){
                        if (service.service_id == service_id){
                            flag=1
                            break
                        }
                    }
                    if (flag == 0){
                        //影片不满足筛选条件
                        continue
                    }

                }
                result.push(cinema)
            }

        })
        return result
}