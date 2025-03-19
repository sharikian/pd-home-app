"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Define the type for each cell's state
interface CellState {
  selected: string | null;
  isOpen: boolean;
}

const ActivityTable: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // Sample options for the dropdown
  const options: string[] = ['گزینه 1', 'گزینه 2', 'گزینه 3'];

  // State to manage the selected value and open state for each cell
  const [cellStates, setCellStates] = useState<CellState[][]>(
    Array(5)
      .fill(null)
      .map(() => Array(4).fill({ selected: null, isOpen: false }))
  );

  // Toggle dropdown for a specific cell
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

  // Select an option for a specific cell
  const selectOption = (rowIndex: number, colIndex: number, option: string): void => {
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

  // Handle page change
  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`, { scroll: false });
  };

  // Total pages (example value, adjust based on your data)
  const totalPages = 35;

  return (
    <div className="w-full max-w-[1457px] mx-auto">
      {/* Table Container with standard table element */}
      <div className="overflow-hidden">
        <table
          className="w-full border-separate"
          style={{ borderSpacing: 0 }}
          dir="rtl"
        >
          <thead>
            <tr>
              {['فعالیت', 'توسط', 'ساعت', 'تاریخ'].map((text: string, index: number) => {
                const cellClass: string = index === 3 ? "w-auto" : "w-[208px]";
                return (
                  <th
                    key={index}
                    className={`p-2.5 text-2xl font-medium text-black text-right ${cellClass}`}
                  >
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
                className={`${rowIndex % 2 ? "bg-[#b9d0aa24]" : "bg-white"} h-[87px]`}
              >
                {[...Array(4)].map((_: unknown, colIndex: number) => {
                  let cellClass: string = "p-2.5 border border-[#1A604E] relative";
                  if (rowIndex === 0 && colIndex === 0) cellClass += " rounded-tr-[15px]";
                  if (rowIndex === 0 && colIndex === 3) cellClass += " rounded-tl-[15px]";
                  if (rowIndex === 4 && colIndex === 0) cellClass += " rounded-br-[15px]";
                  if (rowIndex === 4 && colIndex === 3) cellClass += " rounded-bl-[15px]";

                  const { selected, isOpen }: CellState = cellStates[rowIndex][colIndex];

                  return (
                    <td
                      key={colIndex}
                      className={cellClass}
                      onClick={() => toggleDropdown(rowIndex, colIndex)}
                    >
                      <div className="w-full h-full flex items-center justify-between text-lg font-medium text-black [direction:rtl] cursor-pointer">
                        <span>{selected || "انتخاب کنید"}</span>
                      </div>

                      {isOpen && (
                        <div className="absolute top-full left-0 w-full bg-white border border-[#1A604E] rounded shadow-lg z-10">
                          {options.map((option: string, index: number) => (
                            <div
                              key={index}
                              className="p-2 hover:bg-[#b9d0aa] cursor-pointer text-right text-lg font-medium text-black [direction:rtl]"
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
      <div className="flex w-full items-center justify-between p-4 border-t border-[#1A604E]">
        <div className="flex flex-row-reverse items-center gap-2">
          <button
            className="bg-[#eaeef1] text-xs text-[#0000005e] px-3 py-2 rounded disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            قبلی
          </button>
          {[1, 2, 3, 4].map((num: number) => (
            <button
              key={num}
              className={`px-3 py-2 rounded transition-colors duration-200 ${
                num === currentPage
                  ? "bg-[#1a604e] hover:bg-[#15503e] text-white"
                  : "bg-[#b9d0aa] hover:bg-[#899a7e] text-black"
              }`}
              onClick={() => handlePageChange(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-[#1a604e] hover:bg-[#15503e] transition-colors duration-200 text-white text-xs px-3 py-2 rounded disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            بعدی
          </button>
        </div>
        <p className="text-xl font-medium text-[#1a604eba] [direction:rtl]">
          صفحه <span className="font-semibold text-[#1a604e] mx-4">{currentPage}</span> از{" "}
          <span className="font-semibold text-[#1a604e] mx-4">{totalPages}</span>
        </p>
      </div>
    </div>
  );
};

export default ActivityTable;