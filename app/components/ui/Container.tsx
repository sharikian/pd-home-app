interface Container {
  children: React.ReactNode;
  className?: string; // Added to allow external className prop
}

export const Container = ({ children, className = "" }: Container) => {
  return (
    <div
      className={`flex flex-col rounded-[5px] bg-[#f9f9f9] dark:bg-[#2d333b] border-[2px] border-solid border-[#1A604E] dark:border-emerald-500 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)] p-4 ${className}`}
    >
      {children}
    </div>
  );
};