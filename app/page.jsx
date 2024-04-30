import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 px-5 mt-2 lg:px-12">
      {/* Landing Page */}
      <div className="w-full bg-gradient-to-br from-secondary to-primary h-[80vh] rounded-xl lg:rounded-3xl text-white-100 py-14 px-10 md:p-20 lg:p-24 xl:px-52 flex flex-col justify-between">
        <p className="text-[3.5rem] leading-none md:text-[5.5rem] lg:text-[6.75rem] font-bold">
          Dive into the sea of jobs all over the nation
        </p>

        <p className="opacity-85 text-xl md:text-3xl md:w-8/12 lg:text-left">
          We get the jobs straight from the top companies so you don’t have to
        </p>

        <Search />
      </div>

      {/* Categories */}
      <div></div>

      {/* Featured */}
      <div></div>
    </section>
  );
}
