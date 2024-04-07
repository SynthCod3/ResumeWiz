import { Auth } from "@/app/auth/components/auth"
import { Navbar } from "@/components/navbar"



const Authpage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
        <Navbar/>
        <Auth/>
    </div>
  )
}

export default Authpage