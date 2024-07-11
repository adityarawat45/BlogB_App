import Auth from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return <div>
    <div className="md:grid md:grid-cols-2 h-screen">
        <div> <Auth type="signin"></Auth></div>
        <div className="">
        <Quote/>
    </div>
    </div>
    </div>
}