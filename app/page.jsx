"use client";

import CompanyCard from "@/components/CompanyCard";
import Search from "@/components/Search";
import Image from "next/image";
import { companies } from "@/constants/companies";
import Link from "next/link";
import { shuffle } from "@/utils/shuffle";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomCompanies, setRandomCompanies] = useState([])

  useEffect(() => {
    const entries = Object.entries(companies);
    const shuffledEntries = shuffle(entries);
    const selectedEntries = shuffledEntries.slice(0, 4);
    setRandomCompanies(selectedEntries);
  }, [])
  

  return (
    <section className="flex flex-col gap-10 px-12 mt-3">
      {/* Landing Page */}
      <div className="w-full bg-gradient-to-br from-secondary to-primary h-[80vh] text-white-100 rounded-3xl px-40 py-20">
        <p className="text-[3.5rem] leading-tight md:text-[5.5rem] lg:text-[6.25rem] font-bold">
          Dive into the sea of jobs all over the nation
        </p>

        <p className="opacity-85 text-4xl w-7/12 leading-normal mt-3">
          We get the jobs straight from the top companies so you don’t have to
        </p>

        <Search />
      </div>

      {/* Companies */}
      <div className="flex flex-col gap-10 mt-16">
        <div className="flex justify-between items-center">
          <p className="text-4xl font-bold">Explore By Company</p>

          <Link href={"/companies"}>
            <div className="flex gap-1 items-center opacity-50 hover:opacity-65">
              <p className="text-base font-medium">Explore All Companies</p>
              <Image
                src={"/assets/icons/arrow.svg"}
                width={20}
                height={20}
                alt="arrow"
              />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-10 w-full h-auto">
          {randomCompanies &&
            randomCompanies.map(([key, company]) => (
              <CompanyCard
                key={key}
                name={company.name}
                image={company.image}
              />
            ))}
        </div>
      </div>

      {/* Featured */}
      <div></div>
    </section>
  );
}
