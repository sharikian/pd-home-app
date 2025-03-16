import React, { ReactNode } from "react";
import {
  Card,
  Notice,
  Timeline,
  TickRing,
  Button,
} from "@/app/components";
import ReactDOM from "react-dom";
import { CloseRingLight } from "@/public/icons";

interface Prop {
  onClose: () => void;
  children?: ReactNode;
}

const DangerModal = ({ onClose, children }: Prop) => {
  const modalContent = (
    <div className="modal-overlay fixed inset-0 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn dark:bg-slate-900/80">
      <Card
        title={"کاردرمانی"}
        description={"ویزیت لغو شده"}
        closeHandler={onClose}
        variant="warning" // Assuming Card supports a danger variant; adjust if needed
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
                            center="text-start"
                          />
                        </div>

            {/* Confirmation Section */}
            <div className="flex flex-col gap-6">
              <Notice
                value="درصورتی که در زمان مقرر مراجعه کرده اید، تایید کنید."
                variant="warning"
                className="w-full hover:bg-[#fbe9eb] dark:hover:bg-red-900/30 hover:translate-y-[-2px] transition-all duration-200 dark:text-slate-200 text-lg"
                center="text-start"
              />
              <div className="flex flex-row-reverse gap-4 justify-end">
                <Button
                  text="مراجعه نکردم"
                  variant="warning" // Assuming Button supports this variant
                  className="hover:scale-105 hover:shadow-lg transition-transform duration-200"
                />
                <Button
                  text="مراجعه کردم"
                  className="hover:scale-105 hover:shadow-lg transition-transform duration-200"
                />
              </div>
            </div>

            {/* Bottom Section: Timeline and Reason */}
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
                      title: "ویزیت توسط متخصص کاردرمانی",
                      date: "سه شنبه 11 دی ماه - دکتر عطایی",
                      iconSrc: TickRing,
                    },
                    {
                      title: "جلسه تمرین گفتاردرمانی",
                      date: "پنج شنبه 13 دی ماه - دکتر نوری",
                      iconSrc: CloseRingLight, // Replace with your close icon if available
                    },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-6 w-1/2">
                <span className="text-end text-xl font-semibold text-black">
                  علت عدم مراجعه
                </span>
                <textarea
                dir="rtl"
                  placeholder="درصورت تمایل می توانید علت عدم مراجعه خود را با ما در میان بگذارید..."
                  className={`
                    w-full h-40 rounded-xl border-2 border-[#D85562]/30
                    focus:outline-none focus:border-[#D85562] focus:ring-2 focus:ring-[#D85562]/30
                    placeholder-black text-black
                    bg-white/90 backdrop-blur-sm
                    transition-all duration-200
                    hover:border-[#D85562] hover:shadow-md
                    resize-none p-4
                    dark:border-red-400 dark:focus:border-red-400 
                    dark:focus:ring-red-400/30 dark:text-red-100
                    dark:placeholder-red-200/60 dark:bg-slate-700/90
                    dark:hover:border-red-400/50 dark:hover:shadow-slate-700/50
                    text-start
                  `}
                />
                <Button
                  text="ثبت"
                  variant="warning" // Assuming Button supports this variant
                  className="w-min self-end hover:scale-105 hover:shadow-lg transition-transform duration-200"
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

export default DangerModal;

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
    box-shadow: 0 4px 12px rgba(216, 85, 98, 0.1);
  }

  .modal-overlay {
    z-index: 9999;
  }

  @media (prefers-color-scheme: dark) {
    .timeline-hover :global(.timeline-item:hover) {
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
    }
  }
`}</style>