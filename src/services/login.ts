import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

export const postLoginWxMin = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

export const postLoginWxMinSimple = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
