import MidNavbar from "@/components/inventory_performance/mid_navbar"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><MidNavbar />{children}</section>
  }