import z from "zod";

//SignUp
export const signupInput = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

//SignIn
export const signinInput = z.object({
    username : z.string().email(),
    password : z.string().min(6),
})

//CreateBlog
export const createBlogInput = z.object({
    title : z.string(),
    content : z.string()
})

//Update Blog
export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
    id : z.number()
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput>
export type frontendsigninInput = z.infer<typeof signinInput>
export type frontendsignupInput = z.infer<typeof signupInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>