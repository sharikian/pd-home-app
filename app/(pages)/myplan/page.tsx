"use client";
import FullCalendar from "@fullcalendar/react";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import Calendar from "react-multi-date-picker";
import { useState } from "react";
import Modal from "./Modal"; // Ensure you have a Modal component
import { Helpers } from "./Helpers";
import { Experimental } from "./Experimental";
import useScreenSize from "@/app/hooks/useScreenSize";

const MyPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const screenSize = useScreenSize();

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>Hello from the modal!</Modal>
      )}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Experimental Section */}
        <div className="md:col-span-1 p-4 rounded-[0.8rem] text-[#1A604E]">
          <Experimental />
        </div>

        {/* Main Calendar Section */}
        <div className="md:col-span-4 p-4 rounded-[0.8rem] text-black">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-1">
            {/* FullCalendar Container */}
            <div className="md:col-span-7" onClick={() => setShowModal(true)}>
              <FullCalendar
                plugins={[dayGridPlugin, listPlugin, multiMonthPlugin]}
                initialView="dayGridMonth"
                locale={faLocale}
                headerToolbar={{
                  end: "dayGridMonth,dayGridWeek,multiMonthYear",
                  start: "prev,next",
                  center: "title",
                }}
                height="auto"
                contentHeight="auto"
                aspectRatio={1.5}
                titleFormat={{ year: 'numeric', month: 'long' } }
                dayHeaderFormat={{'weekday': screenSize.width > 992 ? 'long' : 'narrow' }}
              />
            </div>

            {/* Sidebar Section */}
            <div className="md:col-span-3 h-full mt-4 md:mt-0">
              <div className="grid grid-rows-[10%_40%_50%] gap-0 h-full relative">
                {/* Add Event Button */}
                <div className="p-2 md:p-4">
                  <button
                    style={{ backgroundColor: "#1A604E", color: "white" }}
                    className="w-full p-1 rounded flex items-center justify-center gap-1 text-sm md:text-base"
                  >
                    <span className="text-bold">افزودن رویداد</span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                <div className="p-2 md:p-4 hidden md:block">
                  <Calendar
                    locale={gregorian_fa}
                    calendar={persian}
                    type="Calender"
                    className="rmdp-rtl"
                    style={{ width: '100%' }}
                  />
                </div>

                {/* Filter Section */}
                <div className="p-2 pt-10 md:pt-2 md:p-4 flex align-start flex-col gap-3 md:gap-6">
                  <span style={{ color: "gray", alignSelf: "end" }}>فیلتر</span>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2" style={{ alignSelf: "end" }}>
                      <p>تخصص</p>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.03 5.5L12.0117 19.5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 12.5H19"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-2" style={{ alignSelf: "end" }}>
                      <p>وضعیت مراجعه</p>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.03 5.5L12.0117 19.5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 12.5H19"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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