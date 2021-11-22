<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
/*eslint-disable  */
export default {
  name: "app",
  created() {
    const whiteUrl = ["/login"];
    const url = "/book/home/v2";
    const request = axios.create({
      baseURL: "https://test.youbaobao.xyz:18081",
      timeout: 5000,
    });
    request.interceptors.request.use(
      (config) => {
        console.log(config);
        const url = config.url.replace(config.baseURL, "");
        if (whiteUrl.some((wl) => url === wl)) {
          return config;
        }
        // throw new Error('abc')
        config.headers['token']='abc'
        return config;
      },
      (err) => {
        // console.log(err)
        Promise.reject(err)
      }
    );
    request.interceptors.response.use(
      response=>{
        console.log(response)
        if(response.data && response.data.error_code===0){
          return response.data
        } else {
          Promise.reject(response.data.msg)
        }
      },
      err=>{
        Promise.reject(err)
      }
    )
    request({
      url,
      methods: "get",
      params: {
        openId: "1234",
      },
    }).then((response) => {
      console.log(response);
    }).catch(err=>{
      console.log(err)
    })
    ;
    // axios.get(url, {
    //   params:{
    //     openId:1234
    //   },
    //   headers:{
    //     token:'abc'
    //   }
    // }).then(response=>{
    //   console.log(response)
    // }).catch(err=>{
    //   console.log(err)
    // })
  },
};
</script>

<style></style>
