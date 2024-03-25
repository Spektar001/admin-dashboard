import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="min-h-screen flex-1 bg-[--bgSoft] p-5">
        <Sidebar />
      </div>
      <div className="flex-[4] flex flex-col justify-between p-5">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
