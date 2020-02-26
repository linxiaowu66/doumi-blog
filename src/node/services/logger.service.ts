import { Autowired, Logger, Component, Value, LOGGER_CONFIG ***REMOVED*** from '@malagu/core';
import { WinstonLogger ***REMOVED*** from 'malagu-winston';
import { format, transports ***REMOVED*** from 'winston';

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
    const { dailyRotateConfig ***REMOVED*** = this.config;
    const addTransports = [
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
    if (this.mode === 'local') {
      addTransports.push(new transports.Console({
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
    this.logger.getLogger().configure({
      transports: addTransports
    ***REMOVED***
***REMOVED***
  info(message: string) {
    this.logger.info(message);
***REMOVED***
  error(message: string) {
    this.logger.error(message);
***REMOVED***
  warn(message: string) {
    this.logger.warn(message);
***REMOVED***
  debug(message: string) {
    this.logger.debug(message);
***REMOVED***
  verbose(message: string) {
    this.logger.verbose(message);
***REMOVED***
***REMOVED***
