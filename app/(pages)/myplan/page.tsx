'use client'
import FullCalendar from "@fullcalendar/react";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";
import persian from "react-date-object/calendars/persian"
import gregorian_fa from "react-date-object/locales/gregorian_fa"

import Calender from "react-multi-date-picker";

import { Helpers } from "./Helpers";
import { Experimental } from "./Experimental";

const MyPlan = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 p-4 rounded-[0.8rem] text-[#1A604E]">
          <Experimental />
        </div>
        <div className="col-span-4 p-4 rounded-[0.8rem] text-black">
          <div className="grid grid-cols-10 gap-1">
            <div className="col-span-7">
              <FullCalendar
                plugins={[dayGridPlugin, listPlugin, multiMonthPlugin]}
                initialView="dayGridMonth"
                locale={faLocale}
                headerToolbar={{
                  end: "dayGridMonth,dayGridWeek,dayGridDay,list,multiMonthYear",
                  start: "prev,next",
                  center: "title",
                }}
              />
            </div>
            <div className="col-span-3 h-full">
              <div className="grid grid-rows-[10%_40%_50%] gap-0 h-full relative">
                <div className="p-4">
                  <button
                    style={{ backgroundColor: "#1A604E", color: "white" }}
                    className="w-full p-1 rounded flex items-center justify-center gap-1"
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
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12.5H19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="border-t-2 border-gray-300 w-full absolute top-[10%]"></div>
                <div className="p-4">
                  <Calender
                    locale={gregorian_fa}
                    calendar={persian}
                    type="Calender"
                  />
                </div>
                <div className="border-t-2 border-gray-300 w-full absolute top-[50%]"></div>
                <div className="p-4 flex align-start flex-col gap-6">
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
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 12.5H19"
                          stroke="black"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
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
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 12.5H19"
                          stroke="black"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
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
