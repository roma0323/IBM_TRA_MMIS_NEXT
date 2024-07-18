import Navbar from "@/components/navbar"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex flex-col h-full"><Navbar />{children}</section>
  }