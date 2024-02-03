import { Inter } from "next/font/google";
import MainPage from "@/components/MainPage";
import "@/styles/globals.css";

type PageProps = {
  searchParams: Record<string, string>;
};
const inter = Inter({ subsets: ["latin"] });

export default function Page(props: PageProps): JSX.Element {
  return (
      <main className={inter.className}>
        <MainPage/>
      </main>
  )
}
