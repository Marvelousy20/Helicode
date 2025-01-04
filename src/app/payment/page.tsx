import { Suspense } from "react";
import ContactInfo from "@/components/Payment";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactInfo />
    </Suspense>
  );
}
