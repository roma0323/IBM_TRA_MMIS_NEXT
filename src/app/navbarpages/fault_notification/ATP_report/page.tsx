import ClientPage from "@/components/fault_notification/ATP_report/ClientPage";
import { getSumFailYearTypeA } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage />
    </main>
  );
}