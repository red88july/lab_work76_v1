import { Inter } from "next/font/google";
import theme from '@/theme';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import AppToolbar from "@/components/AppToolbar/AppToolbar";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </AppRouterCacheProvider>
  );
}
