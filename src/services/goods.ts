import { http } from "@/utils/http"


export const getGoodsById = (id: string) => {
  return http({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
