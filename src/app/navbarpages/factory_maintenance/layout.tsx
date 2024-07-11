import MidNavbar from "@/components/factory_maintenance/mid_navbar"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><MidNavbar />{children}</section>
  }