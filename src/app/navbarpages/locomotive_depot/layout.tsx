import MidNavbar from "@/components/locomotive_depot/mid_navbar"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><MidNavbar />{children}</section>
  }