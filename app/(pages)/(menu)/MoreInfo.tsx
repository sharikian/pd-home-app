import { Button } from "@/app/components";

export const MoreInfo = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full flex justify-between gap-8">
        {/* Card 1 */}
        <div className="relative w-full max-w-[calc(50%-16px)] h-[40vh] rounded-[2%]">
          <div
            className={`absolute inset-0 rounded-[2%] bg-[url(/imgs/menu/events.png)] bg-cover bg-[50%_50%]`}
          />
          <div className="absolute inset-0 rounded-[2%] [background:linear-gradient(90deg,rgb(185,208,170)_0%,rgb(185,208,170)_45.16%,rgba(185,208,170,0)_100%)]" />
          <div className="flex flex-col items-start gap-[2rem] absolute top-[10%] left-[10%]">
            <p className="text-[#1a604e] text-[2rem] leading-normal [direction:rtl]">
              <span className="font-semibold">
                رویداد ها <br />و همایش های <br />
              </span>
              <span className="font-black">
                خانواده پارکینسون
              </span>
            </p>
            <Button
              className="shadow-[-6px_7px_21px_-6px_#1a604e] bg-dark-green"
              text="اطلاعات بیشتر"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full max-w-[calc(50%-16px)] h-[40vh] rounded-[2%]">
          <div
            className={`absolute inset-0 rounded-[2%] bg-[url(/imgs/menu/kargah.png)] bg-cover bg-[50%_50%]`}
          />
          <div className="absolute inset-0 rounded-[2%] [background:linear-gradient(-90deg,rgb(26,96,78)_0%,rgb(26,96,78)_44.27%,rgba(26,96,78,0.67)_62.02%,rgba(26,96,78,0)_100%)]" />
          <div className="flex flex-col items-end gap-[2rem] absolute top-[10%] right-[10%]">
            <p className="text-white text-[2rem] leading-normal [direction:rtl]">
              <span className="font-semibold">
                کارگاه های <br />حضوری و آنلاین <br />
              </span>
              <span className="font-black">
                زندگی با پارکینسون
              </span>
            </p>
            <Button
              className="shadow-[-6px_7px_21px_-6px_#1a604e]"
              text="اطلاعات بیشتر"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
