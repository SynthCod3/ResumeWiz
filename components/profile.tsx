/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/SWi8NzQSLw0
 */
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Link } from "lucide-react"
import { JSX, SVGProps } from "react"

export function Profile() {
  return (
    <Card key="1" className="mt-14">
      <CardHeader className="space-y-2">
        <div className="space-y-4">
          <Card>
            <CardHeader className="space-y-2">
              <div className="flex items-center space-x-2">
                <Avatar className="w-10 h-10 overflow-hidden">
                  <img
                    alt="Avatar"
                    className="rounded-full aspect-square object-cover"
                    height={40}
                    src="/placeholder.svg"
                    width={40}
                  />
                </Avatar>
                <div className="space-y-1">
                  <h2 className="text-lg font-bold">John Doe</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">johndoe@example.com</p>
                </div>
              </div>
              <Button size="sm">Follow</Button>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  AI Resume Builder
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is my bio. I am a professional seeking new opportunities.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Joined on February 21, 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">New York City, NY</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardHeader>
    </Card>
  )
}


function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
