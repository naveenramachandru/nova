// app/page/[id]/page.tsx
import ServiceClient from "./service-client";

export async function generateStaticParams() {
  const ids = [
    // Digital Signatures
    "dsc-overview",
    "dsc-types",
    "dsc-selector",
    "dsc-apply",
    "dsc-renew",
    "dsc-faqs",

    // USB Hardware Tokens
    "token-overview",
    "token-compare",
    "token-fips",
    "token-brands",
    "token-compatibility",
    "token-bulk",

    // Signing Solutions
    "signer-desktop",
    "signer-paperless",
    "signer-web-cloud",
    "signer-api",
    "signer-workflow",
    "signer-demo",

    // Corporate Tech & Partnerships
    "rojgaar-ai",
    "reseller",
    "distributor",
    "referral",
    "tech",

    // Financial Services
    "fin-gst-reg",
    "fin-gst-filing",
    "fin-gst-lut",
    "fin-itr-self",
    "fin-itr-expert",
    "fin-itr-notice",
    "fin-business-pvtltd",
    "fin-business-llp",
    "fin-business-prop",
    "fin-reg-msme",
    "fin-reg-fssai",
    "fin-reg-trademark",
    "fin-acct-bookkeeping",
    "fin-acct-payroll",
    "fin-acct-audit",
    "fin-tenders-prep",
    "fin-tenders-project-report",
    "fin-tenders-cma",
  ];

  return ids.map((id) => ({
    id,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ServiceClient id={id} />;
}