import { Card } from "./Card";

export default {
  component: Card,
  title: 'Base/Card',
  tags: ["autodocs"],
};

export const Sample = {
  args: {
    title: "فیزیوتراپی",
    description: "وقت رزرو شده",
    closeHandler: () => console.log("Closed"),
    variant: "secondary",
  },
};
