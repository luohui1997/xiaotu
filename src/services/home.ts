import type { BannerItem, CategoryItem, HotItem } from "@/types/home"
import { http } from "@/utils/http"


export const getHomeBanner = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}

export const getHomeCategory = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

export const getHotList = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

export const getHomeGoodsGuessLike = () => {
  return http({
    method: 'GET',
    url: '/home/goods/guessLike'
  })
}
