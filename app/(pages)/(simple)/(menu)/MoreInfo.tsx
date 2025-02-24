import { Button } from "@/app/components";

export const MoreInfo = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-8">
      {/* Card 1 */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[40vh] rounded-xl md:rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url(/imgs/menu/events.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B9D0AA] via-[#B9D0AA]/90 to-transparent dark:from-emerald-900 dark:via-emerald-900/90" />
        
        <div className="relative h-full flex flex-col justify-center items-start p-4 md:p-6 lg:p-8">
          <p className="text-[#1a604e] dark:text-emerald-300 text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-semibold block mb-2">
              رویداد ها و همایش های
            </span>
            <span className="font-black block">خانواده پارکینسون</span>
          </p>
          <Button
            className="mt-4 md:mt-6 shadow-lg bg-dark-green dark:bg-emerald-700"
            text="اطلاعات بیشتر"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[40vh] rounded-xl md:rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url(/imgs/menu/kargah.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1A604E] via-[#1A604E]/90 to-transparent dark:from-slate-800 dark:via-slate-800/90" />
        
        <div className="relative h-full flex flex-col justify-center items-end p-4 md:p-6 lg:p-8">
          <p className="text-white dark:text-slate-100 text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-semibold block mb-2">
              کارگاه های حضوری و آنلاین
            </span>
            <span className="font-black block">زندگی با پارکینسون</span>
          </p>
          <Button
            className="mt-4 md:mt-6 shadow-lg"
            text="اطلاعات بیشتر"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};