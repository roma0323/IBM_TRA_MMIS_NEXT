// import  ClientPage  from "./clientCom";
import  ClientPage  from "@/components/locomotive_depot/ClientPage";
import { getSumStatusDetailListMultiplierZeor } from "@/api/api";

export default async function Page() {
  const data = await getSumStatusDetailListMultiplierZeor();
  return <main>
      <ClientPage initialData={data.data} />
      </main>
}