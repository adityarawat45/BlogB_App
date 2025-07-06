import Auth from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = () => {
  return <div>
            <div className="md:grid md:grid-cols-2 h-screen">
               <div>
                  <Auth type={"signup"}></Auth>
               </div>
        <div className=""><Quote/></div>
    </div>
  </div> 
}
