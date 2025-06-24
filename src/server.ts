import { app } from "./app";
import { env } from "./dotenv";

app.listen(env.PORT,()=>{
    console.log(env.BASE_URL)
})