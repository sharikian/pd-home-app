"use client";
import FullCalendar from "@fullcalendar/react";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import { Calendar } from "react-multi-date-picker";
import { useState } from "react";
import Modal from "./Modal";
import { Helpers } from "./Helpers";
import { Experimental } from "./Experimental";
import useScreenSize from "@/app/hooks/useScreenSize";
import { CheckBox } from "@/app/components/ui/CheckBox";
import useDarkMode from "@/app/hooks/useDarkMode";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

const MyPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const { isDarkMode } = useDarkMode();
  const screenSize = useScreenSize();

  const filters = {
    specialty: ["دندانپزشکی", "پوست و مو", "جراحی پلاستیک", "ارتوپدی"],
    visitStatus: ["تکمیل شده", "لغو شده", "در انتظار پرداخت", "برگشت خورده"]
  };

  const toggleFilter = (filterName: string) => {
    setOpenFilter(prev => prev === filterName ? null : filterName);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>Hello from the modal!</Modal>
      )}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 dark:bg-slate-900 p-2 sm:p-4">
        {/* Experimental Section */}
        <div className="lg:col-span-1 p-2 sm:p-4 rounded-[0.8rem] text-[#1A604E] dark:text-emerald-400">
          <Experimental />
        </div>

        {/* Main Calendar Section */}
        <div className="lg:col-span-4 p-2 sm:p-4 rounded-[0.8rem] text-black dark:text-slate-200 border border-stone-300 dark:border-stone-600">
          <div className="grid grid-cols-1 xl:grid-cols-10 gap-2">
            {/* FullCalendar Container */}
            <div 
              className={`xl:col-span-7 ${isDarkMode ? 'fullcalendar-dark' : ''} `}
            >
              <FullCalendar
                plugins={[dayGridPlugin, listPlugin, multiMonthPlugin]}
                initialView={screenSize.width > 1024 ? "dayGridMonth" : "listMonth"}
                locale={faLocale}
                headerToolbar={{
                  end: screenSize.width > 768 ? "dayGridMonth,dayGridWeek,multiMonthYear" : "dayGridMonth",
                  start: "prev,next",
                  center: "title",
                }}
                height="auto"
                contentHeight="auto"
                aspectRatio={screenSize.width > 1024 ? 1.5 : 1}
                titleFormat={{ 
                  year: 'numeric', 
                  month: screenSize.width > 768 ? 'long' : 'short' 
                }}
                dayHeaderFormat={{
                  weekday: screenSize.width > 768 ? 'long' : 'narrow' 
                }}
              />
            </div>

            {/* Sidebar Section */}
            <div className="xl:col-span-3 h-full mt-4 xl:mt-0">
              <div className="grid grid-rows-[auto] lg:grid-rows-[10%_40%_50%] gap-2 h-full relative">
                {/* Add Event Button */}
                <div className="p-2 lg:p-4 !pt-0 border-b border-stone-300 dark:border-stone-600">
                  <button
                    style={{ backgroundColor: "#1A604E", color: "white" }}
                    onClick={() => setShowModal(true)}
                    className="w-full p-1.5 rounded flex items-center justify-center gap-1 text-sm lg:text-base dark:bg-emerald-700 dark:hover:bg-emerald-600"
                  >
                    <span className="text-bold">افزودن رویداد</span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:stroke-white"
                    >
                      <path
                        d="M12.03 5.5L12.0117 19.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12.5H19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Calendar Section */}
                <div className="p-2 lg:p-4 hidden md:block border-b border-stone-300 dark:border-stone-600" style={{justifySelf:'center'}}>
                  <Calendar
                    locale={gregorian_fa}
                    calendar={persian}
                    months={[
                      "فروردین",
                      "اردیبهشت",
                      "خرداد",
                      "تیر",
                      "مرداد",
                      "شهریور",
                      "مهر",
                      "آبان",
                      "آذر",
                      "دی",
                      "بهمن",
                      "اسفند"
                    ]}
                    className={`rmdp-rtl teal ${isDarkMode ? 
                      'bg-dark' : 
                      'bg-light'} ${screenSize.width < 1024 ? 'w-full' : ''}`}
                  />
                </div>

                {/* Filter Section */}
                <div className="p-2 pt-4 lg:pt-2 lg:p-4 flex align-start flex-col gap-3 lg:gap-4 md:mt-18">
                  <span className="text-gray-500 dark:text-slate-300 self-end">فیلتر</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 items-end">
                    {/* Specialty Filter */}
                    <div className="w-full">
                      <div 
                        className="flex gap-2 dark:text-slate-300 cursor-pointer justify-end" 
                        onClick={() => toggleFilter('specialty')}
                      >
                        <p>تخصص</p>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ${openFilter === 'specialty' ? 'rotate-180' : ''}`}
                        >
                          <path
                            d="M12.03 5.5L12.0117 19.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-opacity duration-300 ${openFilter === 'specialty' ? 'opacity-0' : 'opacity-100'}`}
                          />
                          <path
                            d="M5 12.5H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFilter === 'specialty' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col gap-2 mt-2 pr-4">
                          {filters.specialty.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 justify-end">
                              <span className="dark:text-slate-300 text-sm">{item}</span>
                              <CheckBox />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visit Status Filter */}
                    <div className="w-full">
                      <div 
                        className="flex gap-2 dark:text-slate-300 cursor-pointer justify-end" 
                        onClick={() => toggleFilter('visitStatus')}
                      >
                        <p>وضعیت مراجعه</p>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ${openFilter === 'visitStatus' ? 'rotate-180' : ''}`}
                        >
                          <path
                            d="M12.03 5.5L12.0117 19.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-opacity duration-300 ${openFilter === 'visitStatus' ? 'opacity-0' : 'opacity-100'}`}
                          />
                          <path
                            d="M5 12.5H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFilter === 'visitStatus' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col gap-2 mt-2 pr-4">
                          {filters.visitStatus.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 justify-end">
                              <span className="dark:text-slate-300 text-sm">{item}</span>
                              <CheckBox />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helpers />
    </>
  );
};

export default MyPlan;