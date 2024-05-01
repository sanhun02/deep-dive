import Image from "next/image";
import React from "react";
import Link from "next/link";

const CompanyCard = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-opacity-15 rounded-2xl h-80 shadow-lg">
      <Link href={"/companies/" + name}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center border border-opacity-30 h-32 w-32 rounded-full overflow-hidden">
            <Image src={image} alt={name + "logo"} height={100} width={100} />
          </div>

          <div>
            <p className="text-2xl font-medium">{name}</p>
          </div>
        </div>
      </Link>

      <div className="border border-opacity-15 w-full my-5"></div>

      <Link href={'/jobs'}>
        <div className="flex gap-1 items-center justify-center opacity-60 hover:opacity-80">
          <p className="text-xl">See All Jobs</p>

          <Image
            src={"/assets/icons/arrow.svg"}
            width={20}
            height={20}
            alt="arrow"
          />
        </div>
      </Link>
    </div>
  );
};

export default CompanyCard;
