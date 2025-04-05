"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { SearchVisual } from "@/public/icons";
import { Input, DropDown } from "@/app/components";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface PaginationProps {
  children: React.ReactNode;
  totalPages?: number; // Optional, defaults to 35
}

const Pagination: React.FC<PaginationProps> = ({ children, totalPages = 35 }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    if (searchQuery) params.set("search", searchQuery);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) params.set("search", searchQuery);
    else params.delete("search");
    params.set("page", "1"); // Reset to page 1 on new search
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <motion.div
      className="w-full max-w-[1457px] mx-auto flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Search and Dropdown */}
      <motion.div
        variants={itemVariants}
        className={`flex ${
          window.innerWidth < 768 ? "flex-col" : "justify-between flex-row-reverse"
        } gap-4`}
      >
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <Input
            icon={SearchVisual}
            placeholder="جستجو"
            alignRight
            className={window.innerWidth < 768 ? "w-full" : ""}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div
          className={`flex ${
            window.innerWidth < 768 ? "flex-col" : "gap-4"
          } items-center justify-end`}
          dir="rtl"
        >
          <h2
            className={`text-black dark:text-slate-200 ${
              window.innerWidth < 768 ? "text-lg" : "text-xl"
            }`}
          >
            تعداد ردیف:
          </h2>
          <div className="w-fit" dir="ltr">
            <DropDown
              options={["1", "2", "3", "4"]}
              variant="input-like"
              placeholder="1"
            />
          </div>
        </div>
      </motion.div>

      {/* Children (e.g., ActivityTable) */}
      {children}

      {/* Pagination (unchanged UI from your original code) */}
      <div
        className={`flex w-full ${
          window.innerWidth < 768 ? "flex-col" : "items-center justify-between"
        } p-4 border-[#1A604E] dark:border-emerald-500 gap-4`}
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
    </motion.div>
  );
};

export default Pagination;