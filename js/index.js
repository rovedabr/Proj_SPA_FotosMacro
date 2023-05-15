import {Router} from "./router.js";

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/home", "/pages/home.html")
router.add("/light", "/pages/light.html")
router.add("/colors", "/pages/colors.html")
router.add("/whiteAndBlack", "/pages/whiteAndBlack.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
