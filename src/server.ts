import { app } from "./app";
import { env } from "./dotenv";
import { AppErrorMiddleware } from "./middlewares/AppError";

app.listen(env.PORT,()=>{
    console.log(env.BASE_URL)
})


app.use(AppErrorMiddleware)