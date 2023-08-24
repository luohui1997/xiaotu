import type { BannerItem } from "@/types/home"
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
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
