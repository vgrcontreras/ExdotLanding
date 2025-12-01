import * as React from "react"
import { cn } from "@/lib/utils"

interface SafariMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  src?: string
  embedUrl?: string
  children?: React.ReactNode
}

export const SafariMockup = React.forwardRef<HTMLDivElement, SafariMockupProps>(
  ({ className, url = "exdot.com.br/dashboard", src, embedUrl, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Browser Header */}
        <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
          {/* Traffic Lights */}
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 mx-4">
            <div className="flex items-center gap-2 rounded-md bg-background px-3 py-1.5 text-sm text-muted-foreground border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 truncate">{url}</span>
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="relative bg-background overflow-hidden">
          {embedUrl ? (
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <iframe
                src={embedUrl}
                className="absolute top-0 left-0"
                style={{
                  transform: 'scale(1.25) translate(-10%, -1%)',
                  width: '100%',
                  height: '100%',
                  transformOrigin: 'top left'
                }}
                frameBorder="0"
                allowFullScreen
                title="Power BI Dashboard"
              />
            </div>
          ) : src ? (
            <img
              src={src}
              alt="Dashboard preview"
              className="w-full h-auto object-cover"
            />
          ) : (
            children
          )}
        </div>
      </div>
    )
  }
)

SafariMockup.displayName = "SafariMockup"
