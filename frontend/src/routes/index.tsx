import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { HeroHighlight, Highlight } from "@/components/ui/highlight";
import { motion } from "framer-motion";
import { userQueryOptions } from "@/lib/api";

function NavBar() {
  const { setTheme } = useTheme();

  return (
    <div className="p-2 flex justify-between max-w-2xl m-auto items-baseline">
      <Link to="/">
        <h1 className="text-2xl font-bold">Uitgave app</h1>
      </Link>
      <div className="flex gap-2">
        {}
        <Link to="/totalexpeses" className="[&.active]:font-bold">
          Dashboard
        </Link>

        <div className=" ml-12">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;

    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      console.log(data);
      return data;
    } catch (error) {
      return { user: null };
    }
  },
  component: Homepage,
});

function Homepage() {
  const user = Route.useRouteContext();
  console.log(user);
  return (
    <div>
      <NavBar />
      {/* Eerste sectie */}

      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Voeg <br />
            <Highlight className="text-black dark:text-white">
              sneller en veiliger
            </Highlight>
            <br />
            uitgaves toe <br />
            <Button asChild className="w-1/2 text-xl font-bold">
              {user.user ? (
                <a href="/expenses">Dasboard</a>
              ) : (
                <a href="/api/login">Login</a>
              )}
            </Button>
          </motion.h1>
        </HeroHighlight>
      </div>
    </div>
  );
}
