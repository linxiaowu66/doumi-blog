import { Component, Value, LOGGER_CONFIG ***REMOVED*** from '@malagu/core';
import { WinstonConfig ***REMOVED*** from 'malagu-winston';
import { format, transports ***REMOVED*** from 'winston';
import * as Transport from 'winston-transport';
import { format as formatDate ***REMOVED*** from 'date-fns';

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
    const { dailyRotateConfig ***REMOVED*** = this.config;
    this.transports = [
      new DailyRotateFile({
        ...dailyRotateConfig,
        format: format.combine(
          format.timestamp({ format: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss,SSS')***REMOVED***),
          format.simple(),
          format.printf(msg =>
            `${msg.timestamp***REMOVED*** - ${msg.level***REMOVED***: ${msg.message***REMOVED***`
          )
        ),
    ***REMOVED***),
    ];
    console.log('>>>', mode);
    if (this.mode === 'local') {
      this.transports.push(new transports.Console({
        format: format.combine(
          format.colorize(),
          format.timestamp({ format: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss,SSS')***REMOVED***),
          format.simple(),
          format.printf(msg =>
            `${msg.timestamp***REMOVED*** - ${msg.level***REMOVED***: ${msg.message***REMOVED***`
          )
        ),
    ***REMOVED***));
    ***REMOVED***
***REMOVED***
***REMOVED***
