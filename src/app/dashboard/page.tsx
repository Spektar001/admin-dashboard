import Card from "@/components/card/Card";
import Chart from "@/components/chart/Chart";
import Transactions from "@/components/transactions/Transactions";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  } else {
    return (
      <div className="flex gap-5 mt-5">
        <div className="flex flex-col gap-2 flex-[3]">
          <div className="flex gap-5 justify-between">
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
      </div>
    );
  }
};

export default DashboardPage;
