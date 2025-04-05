import { ClipboardRevert, ListHeart, ClipBoard, Danger } from "@/public/icons";
import ActivityTable from "../dr/components/Table";
import Pagination from "./components/Pagination";
import Image from "next/image";
import { Button } from "@/app/components/";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-end gap-4">
        <div className="text-lg font-bold text-primary dark:text-emerald-100">
          لیست بیماران ارجاع شده
        </div>
        <Image
          className="w-8 h-8 dark:invert"
          alt="Personal Icon"
          src={ClipBoard}
        />
      </div>

      <Pagination>
        <div className="flex justify-between items-start gap-8">
          {/* Left Sidebar with Button Pairs */}
          <div className="w-72 pt-14 flex flex-col justify-center items-start gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="self-stretch h-20 grid grid-cols-[32px_1fr_1fr] items-center gap-4"
              >
                {index < 2 && (
                  <Image
                    src={Danger}
                    alt="!"
                    className="w-8 h-8 col-start-1"
                  />
                )}
                <Button
                  text="ثبت گزارش"
                  variant="secondary"
                  icon={ListHeart}
                  className="col-start-2"
                />
                <Button
                  text="پرونده"
                  variant="secondary"
                  icon={ClipboardRevert}
                  className="col-start-3"
                />
              </div>
            ))}
          </div>
          <ActivityTable />
        </div>
      </Pagination>
    </div>
  );
};

export default AdminPage;