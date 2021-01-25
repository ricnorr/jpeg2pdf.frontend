import VueRouter from "vue-router";
import UploadForm from "@/components/body/UploadForm";
import PageNotFound from "@/components/body/NotFound";

export default new VueRouter({
    mode: "history",
    routes: [
        { path: '/', component: UploadForm },
        {path: '*', component: PageNotFound}
    ]
})