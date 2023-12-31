/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pH9go8Cx9pY
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

export function Mini() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-md">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold leading-none md:text-4xl">Web Scripting Mastery</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Learn the ins and outs of web scripting with our comprehensive guide. Expand your knowledge and take your
          coding skills to the next level.
        </p>
        <Label
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700"
          href="#"
        >
          Get Started
        </Label>
      </div>
      <div className="flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="px-4 py-2">
            <h3 className="text-lg font-bold leading-none">Course Outline</h3>
          </CardHeader>
          <CardContent className="px-4 py-2">
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <Badge className="mr-2" color="green">
                  Module 1
                </Badge>
                Introduction to JavaScript
              </li>
              <li>
                <Badge className="mr-2" color="green">
                  Module 2
                </Badge>
                Exploring ES6 and Beyond
              </li>
              <li>
                <Badge className="mr-2" color="green">
                  Module 3
                </Badge>
                Understanding the DOM
              </li>
              <li>
                <Badge className="mr-2" color="green">
                  Module 4
                </Badge>
                Working with APIs
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
