import {atom} from "recoil";

const UserInfo = atom({
    key : 'UserInfo',
    default : {
        name : 'Anonymous',
        description : 'Hey there! I like blogging, and I love Blogster!'
    }
})

// const user = useRecoilValue(UserInfo);

// export const loadedBlogs = atom({
//     key : 'loadedBlogs',
//     default : {
//         publishedDate : "Dec 31 2024",
//         content : "Nothing to Display",
//         title : "Title of the blog" ,
//         id : "",
//         author : {
//         name : "Anonymous",
//         description : "Description | Bio"
//     }  
//     }
// })

export default UserInfo