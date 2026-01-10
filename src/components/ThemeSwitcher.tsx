"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark");
    setIsDark(currentTheme);

    // Listener for changes to theme in other windows
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "theme") {
        const newTheme = event.newValue === "dark";
        setIsDark(newTheme);
        if (newTheme) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        isDark ? "bg-secondary" : "bg-input",
        className
      )}
      checked={!isDark}
      onCheckedChange={toggleTheme}
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform",
          isDark ? "translate-x-6" : "translate-x-0"
        )}
      >
        {!isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </div>
    </SwitchPrimitives.Root>
  );
});

ThemeSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ThemeSwitch };