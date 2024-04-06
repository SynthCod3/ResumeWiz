import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Auth() {
  return (
    <Tabs defaultValue="account" className="w-[400px] mt-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Sign-Up</TabsTrigger>
        <TabsTrigger value="password">Log-In</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Sign-Up</CardTitle>
            <CardDescription>
              Create a new Account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input id="name" defaultValue="johndoe@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="username" type="password" defaultValue="*******" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Confirm Password</Label>
              <Input id="username" type="password" defaultValue="*******" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Sign-Up</Button>
          </CardFooter>
          <CardFooter>
            <Button>Sign-In with LinkedIn</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Log-In</CardTitle>
            <CardDescription>
              Log-In to your Account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input id="current" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Sign-In</Button>
          </CardFooter>
          <CardFooter>
            <Button>Sign-In with LinkedIn</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
