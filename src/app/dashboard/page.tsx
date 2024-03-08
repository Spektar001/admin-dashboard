import Card from "@/components/card/Card";
import Chart from "@/components/chart/Chart";
import RightBar from "@/components/rightbar/RightBar";
import Transactions from "@/components/transactions/Transactions";

const DashboardPage = () => {
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
      <div className="flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
