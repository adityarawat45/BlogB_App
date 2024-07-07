import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {Hono} from 'hono';
import { sign } from 'hono/jwt';

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        Jwt_Secret : string
    }
}>;

userRouter.post('/signup',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl : c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    try{
    const user = await prisma.user.create({
      data : {
        username : body.username,
        password : body.password,
        name : body.name
      }
    })
    const token = await sign({id : user.id},c.env.Jwt_Secret)
    return c.json({
      token
    })
  }
  catch(e) {
    c.status(411)
    return c.text("Invalid")
  }
})

userRouter.post('/signin',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
  const user = await prisma.user.findFirst({
    where : {
      username : body.email,
      password : body.password
    }
  });

  if(!user){
    c.status(403);
    return c.json({ message : "incorrect credentials"});
  }
  const jwt = await sign({ id : user.id}, c.env.Jwt_Secret);
  return c.json({jwt});
}
catch(e) {
  c.status(411);
  return c.text("Inavlid")
}
})