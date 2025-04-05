"use client"
import { FilePicker, Input } from "@/app/components";

const PersonalInfo = () => {
  return (
    <div className="w-full pt-9 pb-12 border-b border-black/20 flex flex-col items-end gap-8">
      {/* Header */}
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold text-teal-800 font-[Pelak]">
          مشخصات فردی
        </h2>
        <div className="w-9 h-9 relative">
          <div className="w-6 h-8 border-2 border-teal-800" />
        </div>
      </div>

      {/* First Row */}
      <div className="w-full flex flex-wrap gap-10">
        <Input
          title="شماره همراه"
          placeholder="09300172622"
          maxWidth="flex-1"
          Size="md"
          readonly
        />
        <Input
          title="تخصص"
          placeholder="مغز و اعصاب"
          maxWidth="flex-1"
          Size="md"
          readonly
        />
        <Input
          title="شماره نظام"
          placeholder="497337744"
          maxWidth="flex-1"
          Size="md"
          readonly
        />
        <Input
          title="نام و نام خانوادگی"
          placeholder="احمد نوری"
          maxWidth="flex-1"
          Size="md"
          readonly
        />
      </div>

      {/* Second Row - Address & Coordination Number */}
      <div className="w-full flex gap-10">
        <div className="flex-1 flex-grow-[2] basis-2/3">
          <Input
            title="آدرس"
            placeholder="دانش آموز 64، پلاک 30"
            maxWidth="w-full"
            Size="md"
            readonly
          />
        </div>
        <div className="flex-1 basis-1/3">
          <Input
            title="شماره هماهنگی (مطب)"
            placeholder="38765910"
            maxWidth="w-full"
            Size="md"
            readonly
          />
        </div>
      </div>

      {/* Third Section - Description & Profile Picture */}
      <div className="w-full flex gap-10">
        {/* Short Introduction (2/3 width) */}
        <div className="flex-[2] basis-2/3">
          <Input
            title="معرفی کوتاه"
            placeholder="."
            className="h-64"
            Size="lg"
            multiline
            readonly
            maxWidth="w-full"
          />
        </div>

        {/* Profile Picture (1/3 width) */}
        <div className="flex-1 basis-1/3">
          <FilePicker
            title="عکس پروفایل"
            buttonName="انتخاب فایل از سیستم"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onFileSelected={(files: any) => console.log(files)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;