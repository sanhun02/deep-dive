import "@/styles/globals.css";
import Provider from "@/components/Provider";
import Nav from "@/components/Nav";
import { getProviders } from "next-auth/react";

export const metadata = {
  title: "DEEPDIVE",
  description:
    "Job search engine that gets the job post straight from the source",
};

export default async function RootLayout({ children }) {
  try {
    const providers = await getProviders();

    return (
      <html lang="en" className="bg-white-100">
        <body>
          <Provider>
            <main className="app">
              <Nav providers={providers} />
              {children}
            </main>
          </Provider>
        </body>
      </html>
    );
  } catch (error) {
    console.log(error)
  }
}
