import {Timeline} from "./Timeline";
import { TickRing } from "@/public/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Timeline,
  title: 'Base/Time Line',
  tags: ["autodocs"],
};

export const Sample = {
  args: {
    items: [
      {
        title: "ویزیت توسط متخصص توانبخشی",
        date: "شنبه 8 دی ماه - دکتر روحانی",
        iconSrc: TickRing,
      },
      {
        title: "جلسه تمرین گفتاردرمانی",
        date: "سه شنبه 11 دی ماه - دکتر عطایی",
        iconSrc: TickRing,
      },
      {
        title: "جلسه تمرین کاردرمانی",
        date: "پنج شنبه 13 دی ماه - دکتر نوری",
        iconSrc: TickRing,
      },
    ]
  },
};
