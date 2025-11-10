
import ZoningComplianceChecker from "@/components/zoning-compliance-checker/ZoningComplianceChecker"
import type { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Zoning Compliance Checker',
    description: 'Check zoning laws and compliance requirements. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function Page() {
  return <ZoningComplianceChecker />
}