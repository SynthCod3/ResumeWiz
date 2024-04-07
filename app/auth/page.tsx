<<<<<<< HEAD
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

=======
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

>>>>>>> a7fec8488aa0d0b000adfe51324f28b8252937f2
export default Authpage