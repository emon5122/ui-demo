import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";
import Provider from "./provider";

export const metadata = {
    title: "Todo App",
    description: "Experimental Todo App",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <ModeToggle />
                    <main>
                        <Provider>{children}</Provider>
                    </main>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}