import { Input } from "@/app/components";

const WorkDays = () => {
  const days = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  const DayRow = ({ day }: { day: string }) => (
    <div className="w-full flex justify-between items-center pr-5">
      <div className="flex items-center gap-32">
        {/* End Time */}
        <div className="flex items-center gap-8">
          <Input
            title=""
            placeholder=" "
            maxWidth="w-80"
            className="h-12"
            bgIndex={1}
          />
          <div className="text-lg font-medium text-black font-[Pelak]">
            تا ساعت
          </div>
        </div>

        {/* Start Time */}
        <div className="flex items-center gap-8">
          <Input
            title=""
            placeholder=" "
            maxWidth="w-80"
            className="h-12"
            bgIndex={1}
          />
          <div className="text-lg font-medium text-black font-[Pelak]">
            از ساعت
          </div>
        </div>
      </div>

      {/* Day Name */}
      <div className="text-xl font-medium text-black font-[Pelak]">
        {day}
      </div>
    </div>
  );

  return (
    <div className="w-full pt-9 pb-12 border-b border-black/20 flex flex-col items-end gap-8">
      {/* Header */}
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold text-teal-800 font-[Pelak]">
          ساعات کاری مطب
        </h2>
        <div className="relative w-9 h-9">
          <div className="w-8 h-8 border-[3px] border-teal-800 absolute left-[3px] top-[3px]" />
          <div className="w-1.5 h-4 border-[3px] border-teal-800 absolute left-[19px] top-[9px]" />
        </div>
      </div>

      {/* Days Schedule */}
      <div className="w-full flex flex-col gap-4">
        {days.map((day) => (
          <DayRow key={day} day={day} />
        ))}
      </div>
    </div>
  );
};

export default WorkDays;