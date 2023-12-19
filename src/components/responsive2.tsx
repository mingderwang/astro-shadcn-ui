/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RP7cw0ejSOD
 */
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export function Responsive2() {
  return (
    <div className="grid grid-cols-[240px_1fr] gap-4 md:gap-10 h-screen">
      <div className="border-r bg-gray-100 dark:bg-gray-800 overflow-auto">
        <nav className="p-4">
          <h2 className="font-semibold text-lg mb-4">Indexes</h2>
          <ul className="space-y-2">
            <li>
              <Label className="text-gray-700 hover:text-black dark:text-gray-200 hover:underline" href="#">
                Index A
              </Label>
            </li>
            <li>
              <Label className="text-gray-700 hover:text-black dark:text-gray-200 hover:underline" href="#">
                Index B
              </Label>
            </li>
            <li>
              <Label className="text-gray-700 hover:text-black dark:text-gray-200 hover:underline" href="#">
                Index C
              </Label>
            </li>
            <li>
              <Label className="text-gray-700 hover:text-black dark:text-gray-200 hover:underline" href="#">
                Index D
              </Label>
            </li>
          </ul>
        </nav>
      </div>
      <div className="overflow-auto">
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-4">Items</h2>
          <Accordion className="w-full mb-6" collapsible type="single">
            <AccordionItem value="item-type">
              <AccordionTrigger className="text-base font-semibold">Filter by Type</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="type-1" />
                    Type 1{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="type-2" />
                    Type 2{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="type-3" />
                    Type 3{"\n                              "}
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                  <h3 className="font-semibold ml-2">Item 1</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et eros eget augue consequat dapibus.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                  <h3 className="font-semibold ml-2">Item 2</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et eros eget augue consequat dapibus.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                  <h3 className="font-semibold ml-2">Item 3</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et eros eget augue consequat dapibus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}