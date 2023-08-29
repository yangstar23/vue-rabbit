import httpInstance from '../utils/http';

//封装_获取_banner_接口
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
    })

}

//封装_获取_新鲜好物_接口
export function getNewGoodsAPI() {
    return httpInstance({
        url: '/home/new'
    })
}


//封装_获取_人气推荐_接口
export function getRecommendAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}




