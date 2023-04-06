import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    // prettyPrint: true, 옛날방식
    // 요즘 방식
    transport: {
        target: "pino-pretty",
        options: {
          levelFirst: true,
          translateTime: true,
          colorize: true,
        },
    },
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log;