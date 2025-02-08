import React, { ReactNode } from "react";
import {
  Card,
  Notice,
  StarRating,
  Timeline,
  TickRing,
  Button,
} from "@/app/components";
import ReactDOM from "react-dom";

interface Prop {
  onClose: () => void;
  children?: ReactNode;
}

const Modal = ({ onClose }: Prop) => {
  const modalContent = (
    <div className="modal-overlay">
      <Card
        title={"کاردرمانی"}
        description={"ویزیت انجام شده"}
        closeHandler={onClose}
        variant="secondary"
      >
        <div className="flex gap-3 flex-row-reverse w-[90%] justify-evenly">
          <div className="flex flex-col gap-0">
            <span className="text-black text-end text-lg">متخصص</span>
            <Notice variant="primary" value="دکتر اسدالله نوری" />
          </div>
          <div className="flex flex-col gap-0">
            <span className="text-black text-end text-lg">تاریخ</span>
            <Notice value="1403/11/05" />
          </div>
          <div className="flex flex-col gap-0">
            <span className="text-black text-end text-lg">ساعت</span>
            <Notice value="19:05" />
          </div>
        </div>
        <div className="flex flex-col gap-0 w-[95%]">
          <span className="text-black text-end text-lg">آدرس</span>
          <Notice value="وکیل آباد 53، کوچه دوم، پلاک 14" className="w-full" />
        </div>
        <div className="flex gap-2 flex-row-reverse justify-around">
          <Notice value="میزان رضایت از ویزیت" variant="secondary" />
          <Notice value={<StarRating value={0} />} variant="secondary" />
        </div>
        <div className="flex flex-row-reverse gap-4">
          <Timeline
            items={[
              {
                title: "ویزیت توسط متخصص توانبخشی",
                date: "شنبه 8 دی ماه - دکتر روحانی",
                iconSrc: TickRing,
              },
              {
                title: "جلسه تمرین گفتاردرمانی",
                date: "سه شنبه 11 دی ماه - دکتر عطایی",
                iconSrc: TickRing,
              },
              {
                title: "جلسه تمرین کاردرمانی",
                date: "پنج شنبه 13 دی ماه - دکتر نوری",
                iconSrc: TickRing,
              },
            ]}
          />
          <div className="flex flex-col gap-2">
            <span className="text-[#1A604E] text-end">نظر شما در مورد این ویزیت</span>
            <textarea
              className={`
          w-auto h-[8rem] rounded-[5px] border-[2px] border-solid text-lg 
          focus:outline-none focus:ring-2 focus:border-transparent
          border-[#1A604E]
          text-[#1A604E]
          shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff]
          placeholder:text-[#1A604EBA]
        focus:ring-[#1A604E]
        `}
            ></textarea>
            <Button text={"ثبت"} className="w-min" />
          </div>
        </div>
      </Card>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
