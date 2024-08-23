import MidNavbar from "@/components/fault_notification/mid_navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <MidNavbar />
      {children}
    </section>
  );
}
