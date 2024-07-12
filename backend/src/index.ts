import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';
import {Hono} from 'hono'


const app = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        Jwt_Secret : string
    }
}>

app.use("/*",cors())
app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)

export default app
