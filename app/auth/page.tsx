import { Auth } from "@/components/auth"
import { Navbar } from "@/components/navbar"



const Authpage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
        <Navbar/>
        <div className="mt-8"></div>
        <Auth/>
    </div>
  )
}

export default Authpage