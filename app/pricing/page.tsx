import { title } from "@/components/primitives";
import ContactUsForm from "@/components/contactusform";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <ContactUsForm/>
    </div>
  );
}
