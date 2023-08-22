/*
  拦截器拦截request请求，拦截uploadFile请求
*/

import { useMemberStore } from "@/stores"

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }

    options.timeout = 10000

    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }

    const memberStore = useMemberStore()
    const token = memberStore.profile?.token

    if (token) {
      options.header.Authorization = token
    }

    console.log(options)
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
