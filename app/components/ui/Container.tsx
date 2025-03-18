interface Container {
  children: React.ReactNode;
}

export const Container = ({ children }: Container) => {
  return (
    <div className="flex flex-col rounded-[5px] bg-[#f9f9f9] dark:bg-[#2d333b] border-[2px] border-solid border-[#1A604E] shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-4">
      {children}
    </div>
  );
};