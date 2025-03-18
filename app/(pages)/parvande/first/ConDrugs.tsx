import Image from "next/image";
import { FileCollection } from "@/public/icons";
import { CustomDropBox } from "./components/DropBox";
import { Button } from "@/app/components";
import { Plus } from "@/public/icons";

const ConDrugs = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary">سابقه بیماری ها</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={FileCollection} />
      </div>
      <CustomDropBox title={'گوارشی'} items={[
        {
            checkboxName: 'پنتوپرازول',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },
        {
            checkboxName: 'فاموتیدین',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },{
            checkboxName: 'سی لاکس',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },{
            checkboxName: 'پلی اتیلن گلیکول',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        }
        
      ]}/>
      <CustomDropBox title={'روانپزشکی'} items={[
        {
            checkboxName: 'آسنترا',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },
        {
            checkboxName: 'دولوکستین',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },{
            checkboxName: 'گاباپنتین',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        }
      ]}/>
      <CustomDropBox title={'دیابت'} items={[
        {
            checkboxName: 'انسولین',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },
        {
            checkboxName: 'داروی خوراکی',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        }
      ]}/>
      <CustomDropBox title={'خواب'} items={[
        {
            checkboxName: 'ملاتونبن',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },
        {
            checkboxName: 'زولپیدم',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },{
            checkboxName: 'بنزودیازپین',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        }
      ]}/>
      <CustomDropBox title={'مکمل ها'} items={[
        {
            checkboxName: 'ویتامین دی ',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        },
        {
            checkboxName: 'کلسیم',
            firstInput: 'دوز دارو',
            secondInput: 'تعداد'
        }
      ]}/>
      {/* Add Button */}
            <Button
              text={"اضافه کردن دارو"}
              variant="secondary"
              className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
              icon={Plus}
            />
      <hr className="h-[0.1rem] bg-slate-300 mt-2" />
    </div>
  );
};

export default ConDrugs;
