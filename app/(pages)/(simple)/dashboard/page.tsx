import { Together } from './Together';
import { Activities } from './Activities';
import { NotDoIt } from './NotDoIt';
import { DatePicker } from '../../../components';
import { ArrowDown } from '@/public/icons';
import Image from 'next/image';
import DoctorPic from '@/public/imgs/dashboard/doctor.png'
import OmidPic from '@/public/imgs/dashboard/omid.png'

const DashBoardPage = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 p-4 md:p-6 dark:bg-slate-800">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center border-b border-[#00000030] dark:border-slate-700 pb-6">
        <div className="w-full lg:w-3/5 relative aspect-[1.5] md:aspect-[2]">
          <Image
            src={OmidPic}
            alt='omid dashte bash'
            fill
            className='rounded-3xl dark:brightness-90'
          />
        </div>
        <Together className="w-full lg:w-2/5 h-full min-h-[200px]" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
        {/* Doctor Section */}
        <div className="bg-[#eaeef1] dark:bg-slate-700 rounded-2xl p-4 md:p-6 shadow-lg ml-5">
          <h2 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-4 md:mb-6 text-end">
            مشاور متخصص من
          </h2>
          <div className="flex flex-col items-center gap-8 rounded-[14px] border border-solid border-[#1a604e] dark:border-emerald-400 bg-[#eaeef1] dark:bg-slate-600 p-6 sm:p-4">
            <div className="mt-7 flex w-[44%] flex-col items-center justify-center gap-3.5 lg:w-full md:w-full">
              <Image 
                src={DoctorPic}
                width={240} 
                height={240} 
                alt="doctor"
                className="dark:brightness-95"
              />
              <h3 className="text-[#000000] dark:text-white lg:text-[2.06rem] truncate">
                دکتر زهره حمیدی
              </h3>
            </div>
            <h4 className="self-stretch text-center text-[1.25rem] font-medium leading-[1.81rem] text-[#000000] dark:text-slate-200 lg:text-[1.06rem]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </h4>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row-reverse items-center justify-between mb-4">
              <h2 className="text-md md:text-2xl font-medium text-black dark:text-white">
                فعالیت های پیش رو
              </h2>
              <div className="flex items-center gap-2 text-[#1a604e] dark:text-emerald-400">
                <Image 
                  src={ArrowDown} 
                  alt="arrow" 
                  className="w-5 h-5 transform rotate-90 dark:invert"
                />
                <span className="text-sm md:text-base">شرح فعالیت ها</span>
              </div>
            </div>
            <DatePicker />
          </div>
        </div>
      </div>

      <Activities />
      <NotDoIt />
    </div>
  );
};


export default DashBoardPage;