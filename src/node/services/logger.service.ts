import { Autowired, Logger, Component, Value, LOGGER_CONFIG } from '@malagu/core';
import { WinstonLogger } from 'malagu-winston';
import { format, transports } from 'winston';

const formatDate = require('date-fns/format');

const DailyRotateFile = require('winston-daily-rotate-file');

export const DouMiBlogloggerSymbol = Symbol('DouMiBlogLogger');

@Component(DouMiBlogloggerSymbol)
export class DoumiBlogLogger {

  constructor(
    @Autowired(Logger)
    protected readonly logger: WinstonLogger,
    @Value(LOGGER_CONFIG)
    protected readonly config: any,
    @Value('mode')
    protected readonly mode: string
  ) {
    const { dailyRotateConfig } = this.config;
    const addTransports = [
      new DailyRotateFile({
        ...dailyRotateConfig,
        format: format.combine(
          format.timestamp({ format: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss,SSS')}),
          format.simple(),
          format.printf(msg =>
            `${msg.timestamp} - ${msg.level}: ${msg.message}`
          )
        ),
      }),
    ];
    if (this.mode === 'local') {
      addTransports.push(new transports.Console({
        format: format.combine(
          format.colorize(),
          format.timestamp({ format: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss,SSS')}),
          format.simple(),
          format.printf(msg =>
            `${msg.timestamp} - ${msg.level}: ${msg.message}`
          )
        ),
      }));
    };
    this.logger.getLogger().configure({
      transports: addTransports
    });
  }
  info(message: string) {
    this.logger.info(message);
  }
  error(message: string) {
    this.logger.error(message);
  }
  warn(message: string) {
    this.logger.warn(message);
  }
  debug(message: string) {
    this.logger.debug(message);
  }
  verbose(message: string) {
    this.logger.verbose(message);
  }
}
