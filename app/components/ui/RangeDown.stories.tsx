import { RangeDown } from "./RangeDown";

// eslint-disable-next-line import/no-anonymous-default-export
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
