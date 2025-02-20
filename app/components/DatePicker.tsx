"use client"
import React, { useState } from 'react';

export const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Persian month names and their day counts (approximate)
  const persianMonths = [
    { name: 'فروردین', days: 31 },
    { name: 'اردیبهشت', days: 31 },
    { name: 'خرداد', days: 31 },
    { name: 'تیر', days: 31 },
    { name: 'مرداد', days: 31 },
    { name: 'شهریور', days: 31 },
    { name: 'مهر', days: 30 },
    { name: 'آبان', days: 30 },
    { name: 'آذر', days: 30 },
    { name: 'دی', days: 30 },
    { name: 'بهمن', days: 30 },
    { name: 'اسفند', days: 29 }
  ];

  // Get current Persian date
  const getPersianDate = (date: Date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  });

  // Generate proper calendar days
  const generateCalendar = () => {
    const days = [];
    const { month } = getPersianDate(currentDate);
    const monthIndex = month - 1;
    
    // Get number of days in current month
    const daysInMonth = persianMonths[monthIndex].days;
    
    // Create proper day objects
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        number: i,
        isCurrentMonth: true,
        isWeekend: i % 7 === 0 
      });
    }

    // Fill remaining grid cells (42 total)
    while (days.length < 42) {
      days.push({
        number: days.length - daysInMonth + 1,
        isCurrentMonth: false,
        isWeekend: false
      });
    }

    return days;
  };

  // Handle month/year change with boundary checks
  const handleDateChange = (type: string, value: number) => {
    const newDate = new Date(currentDate);
    
    if (type === 'year') {
      newDate.setFullYear(value);
    } else if (type === 'month') {
      if (value < 1) {
        newDate.setFullYear(newDate.getFullYear() - 1);
        newDate.setMonth(11);
      } else if (value > 12) {
        newDate.setFullYear(newDate.getFullYear() + 1);
        newDate.setMonth(0);
      } else {
        newDate.setMonth(value - 1);
      }
    }
    
    setCurrentDate(newDate);
  };

  // Handle today button
  const handleToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDay(getPersianDate(today).day);
  };

  return (
    <div dir="rtl" className="w-full h-full flex flex-col bg-white dark:bg-slate-700 rounded-lg shadow-lg p-4
                            dark:shadow-slate-900/50">
      {/* Year/Month Selector */}
      <div className="flex justify-between items-center mb-4">
        {/* Year Selector */}
        <div className="flex items-center gap-2 text-black dark:text-slate-200">
          <button 
            onClick={() => handleDateChange('year', currentDate.getFullYear() - 1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg transition-all border border-gray-300
                     dark:border-slate-500 shadow-sm hover:shadow-md px-3"
          >
            -
          </button>
          <select
            value={currentDate.getFullYear()}
            onChange={(e) => handleDateChange('year', parseInt(e.target.value))}
            className="bg-transparent py-2 md:px-4 rounded-lg border border-gray-200 dark:border-slate-500
                     dark:text-slate-200 dark:bg-slate-700"
          >
            {Array.from({ length: 401 }, (_, i) => i + 1200).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <button 
            onClick={() => handleDateChange('year', currentDate.getFullYear() + 1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg transition-all border border-gray-300
                     dark:border-slate-500 shadow-sm hover:shadow-md px-3"
          >
            +
          </button>
        </div>

        {/* Month Selector */}
        <div className="flex items-center gap-2 text-black dark:text-slate-200">
          <button 
            onClick={() => handleDateChange('month', currentDate.getMonth())}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg transition-all border border-gray-300
                     dark:border-slate-500 shadow-sm hover:shadow-md px-3"
          >
            -
          </button>
          <select
            value={currentDate.getMonth() + 1}
            onChange={(e) => handleDateChange('month', parseInt(e.target.value))}
            className="bg-transparent py-2 md:px-4 rounded-lg border border-gray-200 dark:border-slate-500
                     dark:text-slate-200 dark:bg-slate-700 w-10 md:w-fit"
          >
            {persianMonths.map((month, index) => (
              <option key={index + 1} value={index + 1}>{month.name}</option>
            ))}
          </select>
          <button 
            onClick={() => handleDateChange('month', currentDate.getMonth() + 2)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg transition-all border border-gray-300
                     dark:border-slate-500 shadow-sm hover:shadow-md px-3"
          >
            +
          </button>
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2 flex-1">
        {/* Week Days Header */}
        {['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'].map((day, index) => (
          <div 
          key={day} 
          className={`text-center font-bold py-2 ${
            index === 6 ? 'text-red-500 dark:text-red-400' : 'text-gray-700 dark:text-slate-300'
          } bg-gray-100 dark:bg-slate-600 rounded-lg`}
        >
          {day}
        </div>
        ))}

        {/* Calendar Days */}
        {generateCalendar().map((day, index) => (
          <div
          key={index}
          className={`
            flex items-center justify-center h-12 cursor-pointer
            transition-all rounded-lg border border-transparent
            hover:bg-gray-100 dark:hover:bg-slate-600 hover:scale-110
            ${selectedDay === day.number && day.isCurrentMonth ? 
              'bg-green-700 dark:bg-emerald-600 text-white' : ''}
            ${day.isCurrentMonth ? 
              (day.isWeekend ? 'text-red-500 dark:text-red-400' : 
              'text-gray-800 dark:text-slate-200') : 
              'text-gray-400 dark:text-slate-400 opacity-50'}
          `}
        >
          {day.number}
        </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-green-700 dark:bg-emerald-600 text-white rounded-lg hover:bg-blue-600 
                   dark:hover:bg-emerald-500 transition-all shadow-md"
                   onClick={handleToday}
        >
          امروز
        </button>
        <button className="px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-600 
                          rounded-lg transition-all border border-gray-200 dark:border-slate-500">
          خالی
        </button>
      </div>
    </div>
  );
};