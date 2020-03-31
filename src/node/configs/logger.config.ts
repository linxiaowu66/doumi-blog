import { Component, Value, LOGGER_CONFIG } from '@malagu/core';
import { WinstonConfig } from 'malagu-winston';
import { format, transports } from 'winston';
import * as Transport from 'winston-transport';

const DailyRotateFile = require('winston-daily-rotate-file');

@Component(WinstonConfig)
export class WinstonConfigImpl implements WinstonConfig {
  transports: Transport[];

  constructor(
    @Value(LOGGER_CONFIG)
    protected readonly config: any,
    @Value('mode')
    protected readonly mode: string
  ) {
    const { dailyRotateConfig } = this.config;
    this.transports = [
      new DailyRotateFile({
        ...dailyRotateConfig,
        format: format.combine(
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SSS'}),
          format.simple(),
          format.printf(msg =>
            `${msg.timestamp} - ${msg.level}: ${msg.message}`
          )
        ),
      }),
    ];
    if (this.mode.includes('local')) {
      this.transports.push(new transports.Console({
        format: format.combine(
          format.colorize(),
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SSS'}),
          format.simple(),
          format.printf(msg =>
            `${msg.timestamp} - ${msg.level}: ${msg.message}`
          )
        ),
      }));
    };
  }
}
