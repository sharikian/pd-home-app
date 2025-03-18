import Ques from "./components/Ques";
import ParkRow from "@/public/imgs/wents/parkRow.png";
import { NordicWalking, Brain } from "@/public/icons";

const FullDetail = () => {
  return (
    <>
      <Ques title={"MMSE"} icon={Brain} />
      <Ques title={"FIM"} icon={NordicWalking} />
      <Ques title={"BDI-II"} icon={ParkRow} />
    </>
  );
};

export default FullDetail;
