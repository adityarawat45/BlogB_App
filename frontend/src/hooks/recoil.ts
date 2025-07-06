import {atom} from "recoil";

export const UserInfo = atom({
    key : 'UserInfo',
    default : {
        name : 'Anonymous',
        description : 'Hey there! I like blogging, and I love Blogster!'
    }
})

export const AuthInfo = atom<"signin" | "signup" | false>({
    key: "AuthInfo",
    default: false, 
  });

// export default UserInfo