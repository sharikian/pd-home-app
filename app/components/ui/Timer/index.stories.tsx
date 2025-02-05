import { Timer } from './';

export default {
  component: Timer,
  title: 'Base/Timer Count Down',
  tags: ['autodocs'],
};

const now = new Date();
now.setHours(now.getHours() + 3);
export const Sample = {
  args: {
    day: now.getDay(),
    hour: now.getHours(),
    minutes:now.getMinutes()
  },
};


