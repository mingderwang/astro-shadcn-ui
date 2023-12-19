/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/X3KES532opH
 */
import { Button } from "@/components/ui/button"

export function Responsive() {
  return (
    <div className="flex min-h-screen bg-[#1a1c2c] items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden flex">
        <div className="w-1/2">
          <div
            className="h-full w-full bg-cover"
            style={{
              backgroundImage: "url('/placeholder.svg?height=224&width=384')",
            }}
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">ALICE IS MISSING</h2>
            <p className="text-sm text-gray-600 mb-8">A SILENT ROLE PLAYING GAME</p>
            <div className="space-y-4">
              <Button className="w-full bg-[#4285F4] text-white" variant="default">
                Continue with Google
              </Button>
              <Button className="w-full bg-black text-white" variant="default">
                Continue with Apple
              </Button>
              <Button className="w-full bg-[#7289da] text-white" variant="default">
                Log In with Discord
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-xs text-gray-500">
            <p>Need help? Email support@pixeltable.net</p>
            <p>Powered by PixelTable.net | All Rights Reserved 2023-2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}