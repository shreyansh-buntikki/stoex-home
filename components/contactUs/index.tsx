import { ContactForm } from "./ContactForm";
import { Offices } from "./Offices";
import { CtaBanner } from "./CtaBanner";

export const ContactUs = () => {
  return (
    <div className="flex flex-col bg-[#f8f6f6]">
      <div className="flex flex-col gap-8 py-25">
        <ContactForm />
        <Offices />
      </div>
      <CtaBanner />
    </div>
  );
};
