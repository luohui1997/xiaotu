import XtxSwiper from '../components/XtxSwiper.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}

