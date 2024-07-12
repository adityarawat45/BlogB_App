import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "../zod";
const currentDate = new Date();

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        Jwt_Secret : string
    }
    Variables : {
        userId : string
    }
}>;

blogRouter.use("/*", async(c,next)=> {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader,c.env.Jwt_Secret)
        if(user){
            //@ts-ignore
            c.set("userId",user.id)
            await next();
        }
        else {
            c.status(403);
            return c.json({
                message : "Authentication Error"
            })
        }
    }
    catch(e){
        c.status(403)
        return c.text("Authentication Error")
    }
})

blogRouter.post('/', async (c)=> {
    const body = await c.req.json();
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const {success} = createBlogInput.safeParse(body)
      if(!success){
        c.status(411);
        return c.json({
          message : "Inputs are not correct"
        })
      }
    try {
        const blog = await prisma.post.create({
            data : {
                title : body.title,
                content : body.content,
                publishedDate : body.publishedDate,
                authorId : parseInt(authorId)
            }
        })
        return c.json({
            id : blog.id
        })
    }
    catch (e) {
        c.status(411);
        return c.json({
            message : "Error occured"
        })
    }
})


blogRouter.put('/', async (c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const {success} = updateBlogInput.safeParse(body)
    if(!success){
      c.status(411);
      return c.json({
        message : "Inputs are not correct"
      })
    }
    try {
        const blog = await prisma.post.update({
            where : {
                id : body.id
            },
            data : {
                title : body.title,
                content : body.content,
            }
        })
        return c.json({
            id : blog.id
        })
    }
    catch (e) {
        c.status(411);
        return c.json({
            message : "Error occured"
        })
    }
})

blogRouter.get('/bulk', async (c)=> {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
       const blogs = await prisma.post.findMany({
        select : {
            content : true,
            title :true,
            id : true,
            publishedDate : true,
            author : {
                select : {
                    name : true
                }
            }
        }
       });
       return c.json({
        blogs
    })
    }
   catch(e){
    return c.json({
        message : "Error occured"
    })
   }
})

blogRouter.get('/:id', async (c)=>{
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    try {
        const blog = await prisma.post.findFirst({
            where : {
                id : parseInt(id)
            },
            select : {
                id: true,
                title : true,
                content : true,
                publishedDate : true,
                author : {
                    select  : {
                        name : true,
                    }
                }
            }
        })
        return c.json({
            blog
        })
    }

    catch(e){
        c.status(411)
        return c.json({
            message : "Error occured"
        })
    }
})


