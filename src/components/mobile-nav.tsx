import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

interface MobileNavProps {
  name: string
  title: string
  bio: string
  status: string
  location: string
  links: string[]
  socialLinks: string[]
}

export function MobileNav({ name, title, bio, status, location, links, socialLinks }: MobileNavProps) {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <div className="text-center">
              <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="object-cover"
                />
              </div>
              <h2 className="mb-1 text-xl font-bold">{name}</h2>
              <p className="text-sm text-muted-foreground">{title}</p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  {status}
                </span>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <p className="text-sm text-muted-foreground">{bio}</p>

          <nav className="space-y-2">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label={`Visit ${platform} profile`}
              >
                <div className="h-5 w-5 rounded-full bg-accent" />
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
