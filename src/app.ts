import Router from "@koa/router";
import Koa from "koa";


const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
    let message = "Hello PIM";
    ctx.body = message;
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log("koa started")
})