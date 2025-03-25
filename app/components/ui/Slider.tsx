"use client";
import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  steps: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 10,
  steps = 10,
  defaultValue = 5,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);
  const stepArray = Array.from(
    { length: steps + 1 },
    (_, i) => min + (max - min) * (i / steps)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={`relative w-full ${
        window.innerWidth < 768 ? "px-4 py-8" : "px-8 py-12"
      }`}
      dir="ltr"
    >
      {/* Step labels */}
      <div
        className={`flex justify-between ${
          window.innerWidth < 768 ? "w-[92%]" : "w-[96%]"
        } absolute top-0 ${window.innerWidth < 768 ? "left-4" : "left-6"}`}
      >
        {stepArray.map((step) => (
          <div
            key={step}
            className={`${
              window.innerWidth < 768 ? "w-6 text-base" : "w-8 text-xl"
            } text-center font-bold text-gray-800`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Track container */}
      <div
        className={`relative w-full ${
          window.innerWidth < 768 ? "h-12" : "h-16"
        }`}
      >
        {/* Background track */}
        <div
          className={`absolute w-full ${
            window.innerWidth < 768 ? "h-1" : "h-2"
          } bg-gray-200 top-1/2 -translate-y-1/2 rounded-full`}
        />

        {/* Colored progress track */}
        <div
          className={`absolute ${
            window.innerWidth < 768 ? "h-2" : "h-4"
          } bg-[#1A604E] top-1/2 -translate-y-1/2 rounded-full`}
          style={{
            width: `${percentage}%`,
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Step markers */}
        <div
          className={`flex justify-between w-full absolute top-1/2 -translate-y-1/2`}
        >
          {stepArray.map((step) => (
            <div
              key={step}
              className={`${
                window.innerWidth < 768 ? "w-1 h-1" : "w-2 h-2"
              } bg-[#b9d0aa] rounded-full`}
            />
          ))}
        </div>

        {/* Slider thumb */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            window.innerWidth < 768 ? "-ml-4" : "-ml-6"
          }`}
          style={{
            left: `${percentage}%`,
            transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className={`flex flex-col items-center justify-center ${
              window.innerWidth < 768 ? "gap-1.5 p-[5px]" : "gap-2.5 p-[8px]"
            } bg-[#eaeef1] rounded-lg shadow-[-6px_7px_21px_-6px_#1a604e,2px_-1px_66.3px_18px_#ffffff] transition-transform duration-200 hover:scale-105`}
          >
            <div
              className={`${
                window.innerWidth < 768 ? "w-8 h-8" : "w-8 h-8"
              } bg-[#b9d0aa] rounded-md shadow-[inset_-1px_1px_4px_#00000040,-1px_1px_4px_#ffffff]`}
            />
          </div>
        </div>
      </div>

      {/* Hidden input */}
      <input
        type="range"
        min={min}
        max={max}
        step={(max - min) / steps}
        value={value}
        onChange={handleChange}
        className="absolute w-full h-full opacity-0 cursor-pointer top-0 left-0"
      />
    </div>
  );
};