'use client';
import theme from '@/theme';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import AppToolbar from "@/components/AppToolbar/AppToolbar";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const queryClient = new QueryClient();
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <CssBaseline/>
                    <html lang="en">
                    <body>
                    <header>
                        <AppToolbar/>
                    </header>
                    <main>
                        <Container maxWidth="xl">
                            {children}
                        </Container>
                    </main>
                    </body>
                    </html>
                </QueryClientProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}