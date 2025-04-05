"use client";
import React, { useState } from "react";

interface CellState {
  selected: string | null;
  isOpen: boolean;
}

const ActivityTable: React.FC = () => {
  const columnOptions: string[][] = [
    ["صدیقه مومنی", "گزینه 1", "گزینه 2"], // نام و نام خانوادگی
    ["1403/6/27", "1403/6/28", "1403/6/29"], // تاریخ ارجاع
    ["1403/6/30", "1403/7/1", "1403/7/2"], // تاریخ جلسه آینده
    ["کمر درد", "سردرد", "دل درد"], // علت ارجاع
    ["ندارد", "دارد", "مشخص نیست"], // توضیحات
  ];

  const initialCellStates = Array(5)
    .fill(null)
    .map((_, rowIndex) =>
      Array(5)
        .fill(null)
        .map((_, colIndex) => {
          if (rowIndex === 0) {
            switch (colIndex) {
              case 0:
                return { selected: "صدیقه مومنی", isOpen: false };
              case 1:
                return { selected: "1403/6/27", isOpen: false };
              case 2:
                return { selected: "1403/6/30", isOpen: false };
              case 3:
                return { selected: "کمر درد", isOpen: false };
              case 4:
                return { selected: "ندارد", isOpen: false };
              default:
                return { selected: null, isOpen: false };
            }
          }
          return { selected: null, isOpen: false };
        })
    );

  const [cellStates, setCellStates] =
    useState<CellState[][]>(initialCellStates);

  const toggleDropdown = (rowIndex: number, colIndex: number): void => {
    setCellStates((prev: CellState[][]) => {
      const newState = [...prev];
      newState[rowIndex] = [...newState[rowIndex]];
      newState[rowIndex][colIndex] = {
        ...newState[rowIndex][colIndex],
        isOpen: !newState[rowIndex][colIndex].isOpen,
      };
      return newState;
    });
  };

  const selectOption = (
    rowIndex: number,
    colIndex: number,
    option: string
  ): void => {
    setCellStates((prev: CellState[][]) => {
      const newState = [...prev];
      newState[rowIndex] = [...newState[rowIndex]];
      newState[rowIndex][colIndex] = {
        selected: option,
        isOpen: false,
      };
      return newState;
    });
  };

  return (
    <div className="w-full max-w-[1457px] mx-auto flex flex-row-reverse">
      {/* Row Numbers */}
      <div className="flex flex-col items-center justify-center mt-4">
        {[...Array(5)].map((_, rowIndex: number) => (
          <div
            key={rowIndex}
            className={`${
              window.innerWidth < 768 ? "p-2 h-[60px]" : "p-2.5 h-[87px]"
            } text-center ${
              window.innerWidth < 768 ? "text-base" : "text-lg"
            } font-medium text-black dark:text-slate-200 flex items-end`}
          >
            {rowIndex + 1}
          </div>
        ))}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto flex-1">
        <table
          className="w-full border-separate"
          style={{ borderSpacing: 0 }}
          dir="rtl"
        >
          <thead>
            <tr>
              {[
                "نام و نام خانوادگی",
                "تاریخ ارجاع",
                "تاریخ جلسه آینده",
                "علت ارجاع",
                "توضیحات",
              ].map((text: string, index: number) => {
                const cellClass: string = `${
                  window.innerWidth < 768 ? "p-2 text-lg" : "p-2.5 text-xl"
                } font-medium text-black dark:text-slate-200 text-right ${
                  window.innerWidth < 768 ? "w-[120px]" : "w-[208px]"
                }`;
                return (
                  <th key={index} className={cellClass}>
                    {text}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_: unknown, rowIndex: number) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2
                    ? "bg-[#b9d0aa24] dark:bg-emerald-900/20"
                    : "bg-white dark:bg-slate-800"
                } ${window.innerWidth < 768 ? "h-[60px]" : "h-[87px]"}`}
              >
                {[...Array(5)].map((_: unknown, colIndex: number) => {
                  let cellClass: string = `${
                    window.innerWidth < 768 ? "p-2" : "p-2.5"
                  } border border-[#1A604E] dark:border-emerald-500 relative`;
                  if (rowIndex === 0 && colIndex === 0)
                    cellClass += " rounded-tr-[15px]";
                  if (rowIndex === 0 && colIndex === 4)
                    cellClass += " rounded-tl-[15px]";
                  if (rowIndex === 4 && colIndex === 0)
                    cellClass += " rounded-br-[15px]";
                  if (rowIndex === 4 && colIndex === 4)
                    cellClass += " rounded-bl-[15px]";

                  const { selected, isOpen }: CellState =
                    cellStates[rowIndex][colIndex];

                  return (
                    <td
                      key={colIndex}
                      className={cellClass}
                      onClick={() => toggleDropdown(rowIndex, colIndex)}
                    >
                      <div
                        className={`w-full h-full flex items-center justify-between ${
                          window.innerWidth < 768 ? "text-base" : "text-lg"
                        } font-medium text-black dark:text-slate-200 [direction:rtl] cursor-pointer`}
                      >
                        <span>{selected || "انتخاب کنید"}</span>
                      </div>

                      {isOpen && (
                        <div
                          className={`absolute top-full left-0 w-full bg-white dark:bg-slate-800 border border-[#1A604E] dark:border-emerald-500 rounded shadow-lg z-10`}
                        >
                          {columnOptions[colIndex].map(
                            (option: string, index: number) => (
                              <div
                                key={index}
                                className={`${
                                  window.innerWidth < 768 ? "p-1.5" : "p-2"
                                } hover:bg-[#b9d0aa] dark:hover:bg-emerald-700 cursor-pointer text-right ${
                                  window.innerWidth < 768
                                    ? "text-base"
                                    : "text-lg"
                                } font-medium text-black dark:text-slate-200 [direction:rtl]`}
                                onClick={(
                                  e: React.MouseEvent<HTMLDivElement>
                                ) => {
                                  e.stopPropagation();
                                  selectOption(rowIndex, colIndex, option);
                                }}
                              >
                                {option}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;
