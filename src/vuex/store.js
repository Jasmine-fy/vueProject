import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import car from "../components/car/car.js";
const store=new Vuex.Store({
    modules:{
        car
    }
})
export default store;