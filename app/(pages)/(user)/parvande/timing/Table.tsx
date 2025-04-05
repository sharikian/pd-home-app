"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CellState {
  selected: string | null;
  isOpen: boolean;
}

const ActivityTable: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const options: string[] = ["گزینه 1", "گزینه 2", "گزینه 3"];

  const [cellStates, setCellStates] = useState<CellState[][]>(
    Array(5)
      .fill(null)
      .map(() => Array(4).fill({ selected: null, isOpen: false }))
  );

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

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`, { scroll: false });
  };

  const totalPages = 35;

  return (
    <div className="w-full max-w-[1457px] mx-auto">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table
          className="w-full border-separate"
          style={{ borderSpacing: 0 }}
          dir="rtl"
        >
          <thead>
            <tr>
              {["فعالیت", "توسط", "ساعت", "تاریخ"].map(
                (text: string, index: number) => {
                  const cellClass: string = `${
                    window.innerWidth < 768 ? "p-2 text-lg" : "p-2.5 text-2xl"
                  } font-medium text-black dark:text-slate-200 text-right ${
                    index === 3
                      ? "w-auto"
                      : window.innerWidth < 768
                      ? "w-[120px]"
                      : "w-[208px]"
                  }`;
                  return (
                    <th key={index} className={cellClass}>
                      {text}
                    </th>
                  );
                }
              )}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_: unknown, rowIndex: number) => (
              <tr
                key={rowIndex}
                className={`${rowIndex % 2 ? "bg-[#b9d0aa24] dark:bg-emerald-900/20" : "bg-white dark:bg-slate-800"} ${
                  window.innerWidth < 768 ? "h-[60px]" : "h-[87px]"
                }`}
              >
                {[...Array(4)].map((_: unknown, colIndex: number) => {
                  let cellClass: string = `${
                    window.innerWidth < 768 ? "p-2" : "p-2.5"
                  } border border-[#1A604E] dark:border-emerald-500 relative`;
                  if (rowIndex === 0 && colIndex === 0)
                    cellClass += " rounded-tr-[15px]";
                  if (rowIndex === 0 && colIndex === 3)
                    cellClass += " rounded-tl-[15px]";
                  if (rowIndex === 4 && colIndex === 0)
                    cellClass += " rounded-br-[15px]";
                  if (rowIndex === 4 && colIndex === 3)
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
                          {options.map((option: string, index: number) => (
                            <div
                              key={index}
                              className={`${
                                window.innerWidth < 768 ? "p-1.5" : "p-2"
                              } hover:bg-[#b9d0aa] dark:hover:bg-emerald-700 cursor-pointer text-right ${
                                window.innerWidth < 768 ? "text-base" : "text-lg"
                              } font-medium text-black dark:text-slate-200 [direction:rtl]`}
                              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                e.stopPropagation();
                                selectOption(rowIndex, colIndex, option);
                              }}
                            >
                              {option}
                            </div>
                          ))}
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

      {/* Pagination */}
      <div
        className={`flex w-full ${
          window.innerWidth < 768 ? "flex-col" : "items-center justify-between"
        } p-4 border-t border-[#1A604E] dark:border-emerald-500 gap-4`}
      >
        <div
          className={`flex ${
            window.innerWidth < 768 ? "flex-col" : "flex-row-reverse"
          } items-center gap-2`}
        >
          <button
            className={`${
              window.innerWidth < 768 ? "w-full py-1.5" : "px-3 py-2"
            } bg-[#eaeef1] dark:bg-slate-700 text-xs text-[#0000005e] dark:text-slate-300 rounded disabled:opacity-50`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            قبلی
          </button>
          {[1, 2, 3, 4].map((num: number) => (
            <button
              key={num}
              className={`${
                window.innerWidth < 768 ? "w-full py-1.5" : "px-3 py-2"
              } rounded transition-colors duration-200 ${
                num === currentPage
                  ? "bg-[#1a604e] dark:bg-emerald-600 hover:bg-[#15503e] dark:hover:bg-emerald-700 text-white"
                  : "bg-[#b9d0aa] dark:bg-emerald-800 hover:bg-[#899a7e] dark:hover:bg-emerald-900 text-black dark:text-slate-200"
              }`}
              onClick={() => handlePageChange(num)}
            >
              {num}
            </button>
          ))}
          <button
            className={`${
              window.innerWidth < 768 ? "w-full py-1.5" : "px-3 py-2"
            } bg-[#1a604e] dark:bg-emerald-600 hover:bg-[#15503e] dark:hover:bg-emerald-700 transition-colors duration-200 text-white text-xs rounded disabled:opacity-50`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            بعدی
          </button>
        </div>
        <p
          className={`${
            window.innerWidth < 768 ? "text-lg" : "text-xl"
          } font-medium text-[#1a604eba] dark:text-emerald-200/80 [direction:rtl]`}
        >
          صفحه{" "}
          <span className="font-semibold text-[#1a604e] dark:text-emerald-100 mx-4">
            {currentPage}
          </span>{" "}
          از{" "}
          <span className="font-semibold text-[#1a604e] dark:text-emerald-100 mx-4">
            {totalPages}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ActivityTable;