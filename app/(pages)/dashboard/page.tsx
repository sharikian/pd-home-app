import { Together } from './Together';
import { ArrowLeft } from '@/public/icons';
import { DatePicker } from '../../components';
import { Activities } from './Activities';
import { NotDoIt } from './NotDoIt';
import Image from 'next/image';

const DashBoardPage = () => {
  return (
    <>
    <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0, 0, 0, 0.19)',
        }}>
        <Image src='/imgs/dashboard/omid.png' width={720} height={464} alt='omid dashte bash'/>
        <Together />
    </div>
    <div className="border-[#00000030] py-[0.88rem] flex  border-b border-solid items-start gap-10 ">
      <div className="mb-[0.25rem] flex flex-col gap-[1.75rem] w-1/2">
        <div className="flex justify-end px-[1.75rem] py-[0.63rem] sm:px-[1.00rem]">
          <p className='lg:text-[1.25rem] text-[1.50rem] !text-[#000000] font-medium'>
            مشاور متخصص من
          </p>
        </div>
        <div className="rounded-[34px] bg-[#eaeef1] p-5 shadow-lg">
        <div className="flex flex-col items-center gap-8 rounded-[14px] border border-solid border-[#1a604e] bg-[#eaeef1] p-6 sm:p-4">
          <div className="mt-7 flex w-[44%] flex-col items-center justify-center gap-3.5 lg:w-full md:w-full">
            <Image src='/imgs/dashboard/doctor.png' width={240} height={240} alt="doctor" />
            <h3 className="!text-[#000000] lg:text-[2.06rem] truncate">
              دکتر زهره حمیدی
            </h3>
          </div>
          <h4 className="self-stretch text-center text-[1.25rem] font-medium leading-[1.81rem] !text-[#000000] lg:text-[1.06rem]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </h4>
        </div>
      </div>

      </div>
      <div className="gap-[1.75rem] flex flex-col w-1/2">
        <div className="p-[0.38rem] flex items-center justify-center md:flex-col">
          <div className="flex flex-1 items-center justify-center md:self-stretch">
            <Image alt='<' src={ArrowLeft} style={{transform:'rotate(90deg)'}} />
            <div className="py-[0.38rem] flex flex-1">
              <p className=" lg:text-[0.81rem] text-[1.00rem] !text-[#1a604e] font-normal">شرح فعالیت ها</p>
            </div>
          <p className=" lg:text-[1.25rem] text-[1.50rem] !text-[#000000] font-medium">فعالیت های پیش رو</p>
         </div>
      </div>
      <div className="rounded-[34px] shadow-[-8px_23px_81px_0_#1a604e19] bg-[#ffffff] mx-[1.75rem] py-[0.88rem] px-[1.25rem] h-[36rem] relative content-center lg:h-auto md:mx-0 md:h-auto">
        <DatePicker/>
      </div>
   </div>
    </div>

    <Activities/>
    <NotDoIt/>
    </>
  );
};

export default DashBoardPage;
