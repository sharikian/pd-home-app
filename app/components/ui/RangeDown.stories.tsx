import { RangeDown } from "./RangeDown";
export default {
  component: RangeDown,
  title: 'Base/Range Down number',
  tags: ["autodocs"],
};

export const Sample = {
  args: {
    options: Array.from({ length: 11 }, (_, i) => i)
  },
};
