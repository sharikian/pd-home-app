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
    <div className="modal-overlay fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <Card
        title={"کاردرمانی"}
        description={"ویزیت انجام شده"}
        closeHandler={onClose}
        variant="secondary"
      >
        <div className="flex gap-3 flex-row-reverse w-[90%] justify-evenly mb-6">
          {['متخصص', 'تاریخ', 'ساعت'].map((title, idx) => (
            <div key={title} className="flex flex-col gap-2">
              <span className="text-[#1A604E] text-end text-lg font-medium">{title}</span>
              <Notice 
                value={idx === 0 ? "دکتر اسدالله نوری" : idx === 1 ? "1403/11/05" : "19:05"}
                className="hover:bg-[#d4ede5] hover:translate-y-[-2px] transition-all duration-200"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-[95%] mb-6">
          <span className="text-[#1A604E] text-end text-lg font-medium">آدرس</span>
          <Notice 
            value="وکیل آباد 53، کوچه دوم، پلاک 14" 
            className="w-full hover:bg-[#d4ede5] hover:translate-y-[-2px] transition-all duration-200"
          />
        </div>

        <div className="flex gap-2 flex-row justify-around mb-6">
          <Notice 
            value={<StarRating value={0} />} 
            variant="secondary" 
            className="hover:bg-[#d4ede5] hover:translate-y-[-2px] transition-all duration-200"
          />
          <Notice 
            value="میزان رضایت از ویزیت" 
            variant="secondary" 
            className="hover:bg-[#d4ede5] hover:translate-y-[-2px] transition-all duration-200"
          />
        </div>

        <div className="flex flex-row-reverse gap-6">
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
          
          <div className="flex flex-col gap-4 flex-1">
            <span className="text-[#1A604E] text-end font-medium text-lg">
              نظر شما در مورد این ویزیت
            </span>
            <textarea
              className={`
                w-full h-32 rounded-xl border-2 border-[#1A604E]/30
                focus:outline-none focus:border-[#1A604E] focus:ring-2 focus:ring-[#1A604E]/30
                text-[#1A604E] placeholder-[#1A604E]/60
                bg-white/90 backdrop-blur-sm
                transition-all duration-200
                hover:border-[#1A604E]/50 hover:shadow-md
                resize-none p-3
              `}
            />
            <Button 
              text={"ثبت"} 
              className="w-min self-end hover:scale-105 hover:shadow-lg transition-transform duration-200"
            />
          </div>
        </div>
      </Card>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;

// Add these global styles for animations
<style jsx global>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  .timeline-hover :global(.timeline-item) {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .timeline-hover :global(.timeline-item:hover) {
    transform: translateX(-5px);
    box-shadow: 0 4px 12px rgba(26, 96, 78, 0.1);
  }

  .modal-overlay {
    z-index: 9999;
  }
`}</style>