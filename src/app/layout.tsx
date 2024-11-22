import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Chatbot from "@/components/chatbot"; // Adjust this import according to your project structure



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-dvh w-dvw  bg-background text-foreground text-base",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <main className="size-full">{children}</main>
        </ThemeProvider>
        <Chatbot />
      </body>
    </html>
  );
}
