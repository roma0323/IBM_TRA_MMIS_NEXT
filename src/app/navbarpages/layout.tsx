import Navbar from "@/components/navbar"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className=" h-full overflow-hidden relative flex flex-col">
    <Navbar />{children}</section>
  }

