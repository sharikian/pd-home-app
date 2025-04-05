import Ques from "./components/Ques";
import ParkRow from "@/public/imgs/wents/parkRow.png";
import { NordicWalking, Brain } from "@/public/icons";

const FullDetail = () => {
  return (
    <div className="flex flex-col gap-6">
      <Ques title={"MMSE"} icon={Brain} />
      <Ques title={"FIM"} icon={NordicWalking} />
      <Ques title={"BDI-II"} icon={ParkRow} />
    </div>
  );
};

export default FullDetail;
