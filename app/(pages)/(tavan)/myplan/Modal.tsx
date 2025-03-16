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

const Modal = ({ onClose, children }: Prop) => {
  const modalContent = (
    <div className="modal-overlay fixed inset-0 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn dark:bg-slate-900/80">
      <Card
        title={"کاردرمانی"}
        description={"ویزیت انجام شده"}
        closeHandler={onClose}
        variant="secondary"
        className="max-w-3xl w-full bg-white dark:bg-slate-800 rounded-3xl shadow-lg"
      >
        {children ? (
          children
        ) : (
          <div className="flex flex-col gap-8">
            {/* Top Section: متخصص, تاریخ, ساعت */}
            <div className="flex flex-row-reverse gap-6 justify-between">
              {['متخصص', 'تاریخ', 'ساعت'].map((title, idx) => (
                <div key={title} className="flex flex-col gap-3 w-1/3">
                  <span className="text-[#1A604E] dark:text-emerald-400 text-end text-xl font-semibold">
                    {title}
                  </span>
                  <Notice
                    value={
                      idx === 0
                        ? "دکتر اسدالله نوری"
                        : idx === 1
                        ? "1403/11/05"
                        : "19:05"
                    }
                    className="w-full hover:bg-[#d4ede5] dark:hover:bg-emerald-900/30 hover:translate-y-[-2px] transition-all duration-200 dark:text-slate-200 text-lg"
                  />
                </div>
              ))}
            </div>

            {/* Address Section */}
            <div className="flex flex-col gap-3">
              <span className="text-[#1A604E] dark:text-emerald-400 text-end text-xl font-semibold">
                آدرس
              </span>
              <Notice
                value="وکیل آباد 53، کوچه دوم، پلاک 14"
                className="w-full hover:bg-[#d4ede5] dark:hover:bg-emerald-900/30 hover:translate-y-[-2px] transition-all duration-200 dark:text-slate-200 text-lg"
              />
            </div>

            {/* Satisfaction Section */}
            <div className="flex flex-row-reverse gap-6 justify-between">
              <Notice
                value="میزان رضایت از ویزیت"
                variant="secondary"
                className="w-1/2 hover:bg-[#d4ede5] dark:hover:bg-emerald-900/30 hover:translate-y-[-2px] transition-all duration-200 dark:text-slate-200 text-lg"
              />
              <Notice
                value={<StarRating value={0} />}
                variant="secondary"
                className="w-1/2 hover:bg-[#d4ede5] dark:hover:bg-emerald-900/30 hover:translate-y-[-2px] transition-all duration-200"
              />
            </div>

            {/* Bottom Section: Timeline and Comment */}
            <div className="flex flex-row-reverse gap-8">
              <div className="w-1/2">
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
              </div>
              <div className="flex flex-col gap-6 w-1/2">
                <span className="text-[#1A604E] dark:text-emerald-400 text-end text-xl font-semibold">
                  نظر شما در مورد این ویزیت
                </span>
                <textarea
                  placeholder="اینجا بنویسید..."
                  className={`
                    w-full h-40 rounded-xl border-2 border-[#1A604E]/30
                    focus:outline-none focus:border-[#1A604E] focus:ring-2 focus:ring-[#1A604E]/30
                    text-[#1A604E] placeholder-[#1A604E]/60
                    bg-white/90 backdrop-blur-sm
                    transition-all duration-200
                    hover:border-[#1A604E]/50 hover:shadow-md
                    resize-none p-4
                    dark:border-emerald-400/30 dark:focus:border-emerald-400 
                    dark:focus:ring-emerald-400/30 dark:text-emerald-100
                    dark:placeholder-emerald-200/60 dark:bg-slate-700/90
                    dark:hover:border-emerald-400/50 dark:hover:shadow-slate-700/50
                    text-end
                  `}
                />
                <Button
                  text={"ثبت"}
                  className="w-min self-end hover:scale-105 hover:shadow-lg transition-transform duration-200 dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}
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

  @media (prefers-color-scheme: dark) {
    .timeline-hover :global(.timeline-item:hover) {
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
    }
  }
`}</style>