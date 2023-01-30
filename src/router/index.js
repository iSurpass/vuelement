import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/Button'
import ButtonDetail from "../components/ButtonDetail";
import UploadFile from "../components/UploadFile";
import Home from "../components/Home";

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component: Home},
    {path: '/button',component: Button},
    {path: '/buttonCreate',component: ButtonDetail},
    {path: '/upload',component: UploadFile},
  ]
})
