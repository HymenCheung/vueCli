
/**筛选影片的方法
*/
export const filmFilter = async ({category_id,country_id,year,start,length} = {}) =>{
    // 准备一个json对象用于存放返回的结果
    let result  = { }
    // 创建一个数组用于存放满足筛选条件的影片数据
     result.data =[]
    //发送Ajax请求
    await fetch("../data/film_list.json")
        .then(response => response.json())
        .then(response  =>{
            //标记变量
            let flag  = 0
//先遍历所有影片
            for(let film of response){
                //判断是否存在分类要求
                if (category_id != undefined){
                    //判断是否满足条件之前将这个标记遍历出来
                    flag =0 ;
                    //遍历当前分类
                    for (let cate of film.category_list){
                        //判断传入进来的分类id是否和当前影片的遍历到的id相等
                        if (category_id == cate.category_id){
                            //说明影片满足筛选条件
                            flag = 1
                            break
                        }
                    }
                    //如果分类已经不满足这个筛选条件，接下来国家和时间就没有必要继续判断了，这个电影不要加入到返回的数据中
                    if(flag == 0 ){
                        continue
                    }


                }
                if (country_id != undefined){
                    //判断当前国家地区是否满足筛选条件
                    flag = 0
                    for (let loc of film.country_list){

                        //如果传入进来的国家id和当前遍历到的国家id相等，说明符合筛选条件
                        if (country_id == loc.country_id){
                            flag = 1
                            break
                        }
                    }
                    //
                    if (flag ==  0 ){
                        continue
                    }
                }

                if (year != undefined){
                // 判断当前影片的年份是否满足筛选条件
                    if (film.film_release_date.split("-")[0] != year){
                        continue
                    }
                }
                //代码执行到这里已经满足筛选条件
                result.data.push(film)

            }
            //将满足条件的影片数量存放到
            result.count = result.data.length
            if (start != undefined && length != undefined){
                //根据起始索引和数量 对满足条件的影片数组进行分割
                result.data = result.data.slice(start,start+length)
            }
        })
    return result
}