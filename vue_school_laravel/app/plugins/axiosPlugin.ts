import axios from "axios";
export default defineNuxtPlugin(async (nuxtApp) => {
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.withCredentials = true;

    // CSRF-Cookie holen
    await axios.get("/sanctum/csrf-cookie")
});