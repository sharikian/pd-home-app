"use client";
import React, { useState } from "react";
import { Input } from "@/app/components";
import { DropDown } from "@/app/components";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import { Calendar } from "@/public/icons";

const SimpleActivityTable: React.FC = () => {
  const options: string[] = ["آنلاین", "حضوری"];

  // State for input values
  const [inputValues, setInputValues] = useState({
    status: "",
    date: "",
    description: "",
  });

  const handleInputChange = (
    field: "status" | "date" | "description",
    value: string
  ) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full">
      <div className="relative">
        <table
          className="w-full border-separate table-fixed"
          style={{ borderSpacing: 0 }}
          dir="rtl"
        >
          <thead>
            <tr>
              {["آنلاین / حضوری", "تاریخ", "توضیحات"].map(
                (text: string, index: number) => (
                  <th
                    key={index}
                    className="p-2.5 text-2xl font-medium text-black text-right w-1/3"
                  >
                    {text}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white h-[87px]">
              {[...Array(3)].map((_: unknown, colIndex: number) => {
                let cellClass: string =
                  "p-2.5 border border-[#1A604E] relative";
                if (colIndex === 0)
                  cellClass += " rounded-tr-[15px] rounded-br-[15px]";
                if (colIndex === 2)
                  cellClass += " rounded-tl-[15px] rounded-bl-[15px]";

                return (
                  <td key={colIndex} className={cellClass}>
                    {colIndex === 0 ? (
                      <div dir="ltr" className="relative z-10">
                        <DropDown
                          options={options}
                          placeholder="انتخاب کنید"
                          variant="input-like"
                        />
                      </div>
                    ) : colIndex === 1 ? (
                      <div className="relative z-10">
                        <DatePicker
                          value={inputValues.date}
                          onChange={(date) => 
                            handleInputChange("date", date?.toString() || "")
                          }
                          format="YYYY/MM/DD"
                          calendar={persian}
                          locale={gregorian_fa}
                          placeholder="1327/12/9"
                          render={
                            <Input
                              placeholder="22/03/1385"
                              icon={Calendar}
                              value={inputValues.date}
                            />
                          }
                        />
                      </div>
                    ) : (
                      <Input
                        value={inputValues.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        placeholder="توضیحات را وارد کنید"
                        className="w-full h-full text-lg font-medium text-black [direction:rtl]"
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleActivityTable;