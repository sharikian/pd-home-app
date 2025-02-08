import { Card } from "./Card";

// eslint-disable-next-line import/no-anonymous-default-export
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
