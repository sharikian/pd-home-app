"use client";
import FullCalendar from "@fullcalendar/react";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import { Calendar } from "react-multi-date-picker";
import { useState } from "react";
import Modal from "./Modal";
import DangerModal from "./DangerModal";
import { Helpers } from "./Helpers";
import { Experimental } from "./Experimental";
import useScreenSize from "@/app/hooks/useScreenSize";
import { CheckBox } from "@/app/components/ui/CheckBox";
import useDarkMode from "@/app/hooks/useDarkMode";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { motion } from "framer-motion";
import { Chip } from "./Chip";
import BloodIcon from '@/public/imgs/myplan/blood.svg';
import { MRI } from "@/public/icons";
import { Button, Input } from "@/app/components";
import { toast } from "react-toastify";

const MyPlan = () => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const { isDarkMode } = useDarkMode();
  const screenSize = useScreenSize();
  const [eventTitle, setEventTitle] = useState<string>(""); // State for event input

  const filters = {
    specialty: ["دندانپزشکی", "پوست و مو", "جراحی پلاستیک", "ارتوپدی"],
    visitStatus: ["تکمیل شده", "لغو شده", "در انتظار پرداخت", "برگشت خورده"],
  };

  const toggleFilter = (filterName: string) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  const events = [
    {
      start: '2025-03-17',
      chipText: 'CT',
      icon: BloodIcon,
      chipVariant: 'secondary',
      modalContent: (
        <div>
          <h2 className="text-xl font-bold">جزئیات اسکن CT</h2>
          <p>تاریخ: 17 اسفند 1403</p>
          <p>نوع آزمایش: اسکن توموگرافی کامپیوتری (CT)</p>
          <p>مکان: بیمارستان مرکزی</p>
          <p>توضیحات: لطفاً 30 دقیقه قبل از زمان مقرر در محل حضور یابید.</p>
        </div>
      ),
    },
    {
      start: '2025-03-04',
      chipText: 'MRI',
      icon: MRI,
      chipVariant: 'danger',
      modalContent: (
        <div>
          <h2 className="text-xl font-bold">جزئیات ام آر آی</h2>
          <p>تاریخ: 4 اسفند 1403</p>
          <p>نوع آزمایش: تصویربرداری رزونانس مغناطیسی (MRI)</p>
          <p>مکان: کلینیک تصویربرداری پیشرفته</p>
          <p>توضیحات: لطفاً از پوشیدن زیورآلات فلزی خودداری کنید.</p>
        </div>
      ),
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Handler for event click
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEventClick = (info: any) => {
    setSelectedEvent(info.event);
  };

  // Handler to close modal
  const closeModal = () => {
    setSelectedEvent(null);
    setEventTitle(""); // Reset event title on close
  };

  // Handler for adding a new event
  const handleAddEvent = () => {
    if (eventTitle.trim() === "") {
      toast.error("لطفا عنوان رویداد را وارد کنید"); // Please enter the event title
    } else {
      toast.success("رویداد با موفقیت اضافه شد"); // Event added successfully
      // Add logic here to save the event (e.g., update events array)
      closeModal();
    }
  };

  return (
    <>
      {selectedEvent && (
        <>
          {selectedEvent.extendedProps.chipText === "CT" && (
            <Modal onClose={closeModal}>
              {selectedEvent.extendedProps.modalContent}
            </Modal>
          )}
          {selectedEvent.extendedProps.chipText === "MRI" && (
            <DangerModal onClose={closeModal}>
              {selectedEvent.extendedProps.modalContent}
            </DangerModal>
          )}
          {selectedEvent.extendedProps.chipText === "Add Event" && (
            <Modal onClose={closeModal}>
              <h1 style={{ color: 'black', fontSize: '2rem' }}>رویداد وارد کنید</h1>
              <Input
                title={"رویداد"}
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
              <Button
                text={"افزودن"}
                onClick={handleAddEvent}
              />
            </Modal>
          )}
        </>
      )}
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-12 gap-4 dark:bg-slate-900 p-2 sm:p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="lg:col-span-2 p-2 sm:p-4 rounded-[0.8rem] text-[#1A604E] dark:text-emerald-400"
          variants={itemVariants}
        >
          <Experimental />
        </motion.div>
        <motion.div
          className="lg:col-span-10 p-2 sm:p-4 rounded-[0.8rem] text-black dark:text-slate-200 border border-stone-300 dark:border-stone-600"
          variants={itemVariants}
        >
          <motion.div
            className="grid grid-cols-1 xl:grid-cols-11 gap-2"
            variants={containerVariants}
          >
            <motion.div
              className={`xl:col-span-8 ${isDarkMode ? "fullcalendar-dark" : ""}`}
              variants={itemVariants}
            >
              <FullCalendar
                plugins={[dayGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                locale={faLocale}
                headerToolbar={{
                  end:
                    screenSize.width > 768
                      ? "dayGridMonth,dayGridWeek"
                      : "dayGridMonth",
                  start: "prev,next",
                  center: "title",
                }}
                height="auto"
                contentHeight="auto"
                aspectRatio={screenSize.width > 1024 ? 1.5 : 1}
                titleFormat={{
                  year: "numeric",
                  month: screenSize.width > 768 ? "long" : "short",
                }}
                dayHeaderFormat={{
                  weekday: screenSize.width > 768 ? "long" : "narrow",
                }}
                events={events}
                eventContent={(eventInfo) => (
                  <Chip
                    icon={eventInfo.event.extendedProps.icon}
                    text={eventInfo.event.extendedProps.chipText}
                    varient={eventInfo.event.extendedProps.chipVariant}
                  />
                )}
                eventClick={handleEventClick}
              />
            </motion.div>
            <motion.div
              className="xl:col-span-3 h-full mt-4 xl:mt-0"
              variants={itemVariants}
            >
              <div className="grid grid-rows-[auto] lg:grid-rows-[10%_40%_50%] gap-2 h-full relative">
                <motion.div
                  className="p-2 lg:p-4 !pt-0 border-b border-stone-300 dark:border-stone-600"
                  variants={itemVariants}
                >
                  <button
                    style={{ backgroundColor: "#1A604E", color: "white" }}
                    onClick={() => setSelectedEvent({ extendedProps: { chipText: "Add Event" } })}
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
                </motion.div>
                <motion.div
                  className="p-2 lg:p-4 hidden md:block border-b border-stone-300 dark:border-stone-600"
                  variants={itemVariants}
                  style={{ justifySelf: "center" }}
                >
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
                      "اسفند",
                    ]}
                    className={`rmdp-rtl teal ${
                      isDarkMode ? "bg-dark" : "bg-light"
                    } ${screenSize.width < 1024 ? "w-full" : ""}`}
                  />
                </motion.div>
                <motion.div
                  className="p-2 pt-4 lg:pt-2 lg:p-4 flex align-start flex-col gap-3 lg:gap-4 md:mt-18"
                  variants={itemVariants}
                >
                  <span className="text-gray-500 dark:text-slate-300 self-end">
                    فیلتر
                  </span>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 items-end"
                    variants={containerVariants}
                  >
                    <motion.div className="w-full" variants={itemVariants}>
                      <div
                        className="flex gap-2 dark:text-slate-300 cursor-pointer justify-end"
                        onClick={() => toggleFilter("specialty")}
                      >
                        <p>تخصص</p>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ${
                            openFilter === "specialty" ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M12.03 5.5L12.0117 19.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-opacity duration-300 ${
                              openFilter === "specialty"
                                ? "opacity-0"
                                : "opacity-100"
                            }`}
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
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          openFilter === "specialty"
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col gap-2 mt-2 pr-4">
                          {filters.specialty.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 justify-end"
                            >
                              <span className="dark:text-slate-300 text-sm">
                                {item}
                              </span>
                              <CheckBox />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    <motion.div className="w-full" variants={itemVariants}>
                      <div
                        className="flex gap-2 dark:text-slate-300 cursor-pointer justify-end"
                        onClick={() => toggleFilter("visitStatus")}
                      >
                        <p>وضعیت مراجعه</p>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ${
                            openFilter === "visitStatus" ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M12.03 5.5L12.0117 19.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-opacity duration-300 ${
                              openFilter === "visitStatus"
                                ? "opacity-0"
                                : "opacity-100"
                            }`}
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
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          openFilter === "visitStatus"
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col gap-2 mt-2 pr-4">
                          {filters.visitStatus.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 justify-end"
                            >
                              <span className="dark:text-slate-300 text-sm">
                                {item}
                              </span>
                              <CheckBox />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Helpers />
      </motion.div>
    </>
  );
};

export default MyPlan;