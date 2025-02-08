export const Helpers = () => {
  return (
    <div className="flex flex-wrap justify-end gap-4 md:gap-8 mt-8 px-4">
      {[
        { text: "رزرو شده", color: "bg-[#1a604e]" },
        { text: "مراجعه نشده", color: "bg-[#d85562]" },
        { text: "مراجعه شده", color: "bg-[#b9d0aa]" },
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-sm md:text-base text-black">{item.text}</span>
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${item.color}`} />
        </div>
      ))}
    </div>
  );
};