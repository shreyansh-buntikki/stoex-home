import { AboutMMTC } from "./AboutMMTC";
import { BuiltStoex } from "./BuiltStoex";
import { AboutUsHero } from "./Hero";
import { Institutions } from "./Institutions";
import { Principles } from "./Principles";

export const AboutUs = () => {
  return (
    <div className="flex flex-shrink-0 flex-col gap-20 lg:gap-62 overflow-x-clip pb-14 lg:pb-40">
      <AboutUsHero />
      <AboutMMTC />
      <BuiltStoex />
      <Institutions />
      <Principles />
    </div>
  );
};
