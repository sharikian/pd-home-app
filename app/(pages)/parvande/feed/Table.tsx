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

  const headers = ["آنلاین / حضوری", "تاریخ", "توضیحات"];

  return (
    <div className="w-full">
      {window.innerWidth < 768 ? (
        // Mobile Layout: Vertical Stack
        <div className="flex flex-col gap-4">
          {headers.map((header, colIndex) => (
            <div
              key={colIndex}
              className="flex flex-col border border-[#1A604E] rounded-lg p-2 bg-white"
            >
              <div className="text-lg font-medium text-black text-right pb-2">
                {header}
              </div>
              {colIndex === 0 ? (
                <div dir="ltr" className="relative z-10">
                  <DropDown
                    options={options}
                    placeholder="انتخاب کنید"
                    variant="input-like"
                    className="w-full"
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
                    locale={gregorian_fa}
                    placeholder="1327/12/9"
                    render={
                      <Input
                        placeholder="22/03/1385"
                        icon={Calendar}
                        value={inputValues.date}
                        className="w-full"
                        noBorder // No border, no shadow
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
                  className="w-full text-base font-medium text-black [direction:rtl]"
                  noBorder // No border, no shadow
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        // Desktop Layout: Table
        <div className="relative">
          <table
            className="w-full border-separate table-fixed"
            style={{ borderSpacing: 0 }}
            dir="rtl"
          >
            <thead>
              <tr>
                {headers.map((text: string, index: number) => (
                  <th
                    key={index}
                    className="p-2.5 text-2xl font-medium text-black text-right w-1/3"
                  >
                    {text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white h-[87px]">
                {[...Array(3)].map((_: unknown, colIndex: number) => {
                  let cellClass: string = "p-2.5 border border-[#1A604E] relative"; // Reintroduced padding
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
                            className="w-full" // Keep it full width but with padding
                            noBorder
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
                            locale={gregorian_fa}
                            placeholder="1327/12/9"
                            render={
                              <Input
                                placeholder="22/03/1385"
                                icon={Calendar}
                                value={inputValues.date}
                                className="w-full" // Keep it full width but with padding
                                noBorder // No border, no shadow
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
                          className="w-full text-lg font-medium text-black [direction:rtl]" // Keep it full width but with padding
                          noBorder // No border, no shadow
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SimpleActivityTable;