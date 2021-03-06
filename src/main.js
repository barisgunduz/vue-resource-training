import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root =
    "https://vuejs-vue-resource-86246-default-rtdb.europe-west1.firebasedatabase.app";

Vue.http.interceptors.push((request, next) => {
    console.log(request.method);
    // if(request.method == "POST") {
    //   request.method = "PUT"
    // }
    next((response) => {
        response.json = () => {
            return {
                userList: response.body,
            };
        };
    });
});

new Vue({
    el: "#app",
    render: (h) => h(App),
});
