import {
    createApp,
    ref,
  } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
  
  createApp({
    setup() {
      const user = ref({
        username: "",
        password: "",
      });
  
      const login = (res) => {
        const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";
        axios.post(api, user.value).then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
          window.location = "products.html";
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      };
  
      return {
        user,
        login,
      };
    },
  }).mount("#app");
  // setup()
  
  // const login()
  // const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";
  
  //取出token，解構的寫法
  
  // 儲存登入的cookie token資訊
  // expires 設置有效時間 unix timestamp
  
  //轉址的動作
  
  //失敗結果
  