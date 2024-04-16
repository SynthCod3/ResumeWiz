import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"


const page = () => {
  return (
    <div>
        <Navbar/>
        <br />
        <About/>
        <Footer/>
    </div>
  )
}

export default page