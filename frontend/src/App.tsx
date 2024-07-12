import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Signup} from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogpage } from "./pages/Blogpage";
import { Publish } from "./pages/Publish";
import Landing from "./pages/Landing";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
    <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/blog/:id" element={<Blogpage></Blogpage>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/publish" element={<Publish></Publish>}></Route>
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
  )
}

export default App