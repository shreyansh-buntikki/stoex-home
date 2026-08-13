import { Advantage } from "../homeGold/Advantage";
import { Comparison } from "../homeGold/Comparison";
import { EarlyAccess } from "../homeGold/EarlyAccess";
import { FAQs } from "../homeGold/Faq";
import { HeroGold } from "../homeGold/Hero";
import { Protection } from "../homeGold/Protection";
import { Redemption } from "../homeGold/Redemption";
import Secure from "../homeGold/Secure";
import Standard from "../homeGold/Standard";
import { Steps } from "../homeGold/Steps";

export function HomePageSilver() {
  return (
    <>
      <section id="hero-section">
        <HeroGold mode="silver" />
      </section>
      <Secure mode="silver" />
      <Standard mode="silver" />
      <Advantage mode="silver" />
      <Steps mode="silver" />
      <Redemption />
      {/* <Assets /> */}
      <Comparison />
      <Protection />
      <FAQs />
      <section id="early-access-section">
        <EarlyAccess />
      </section>
    </>
  );
}

const Divider = () => {
  return (
    <div className="container mx-auto px-6 mt-8 mb-30">
      <hr
        className="border-none h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #CCA763 50%, transparent 100%)",
        }}
      />
    </div>
  );
};
