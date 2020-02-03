import { Autowired, Component ***REMOVED*** from '@malagu/core';
// import { injectable ***REMOVED*** from 'inversify'
import { BlogServiceSymbol, BlogService ***REMOVED*** from './services/index';

const CronJob = require('cron').CronJob;

export const Schedule = Symbol('Schedule');

@Component(Schedule)
export class DoumiSchedule {

  // 没打印出日志？
  // @Autowired(Logger)
  // protected readonly logger: Logger

  @Autowired(BlogServiceSymbol)
  protected readonly blogService: BlogService;

  constructor() {
    // 自动编译的时候定时器还存在，如何解除？
    var job = new CronJob('0 0 */1 * * *', async () => {
    ***REMOVED***
        // await this.blogService.clearTodayIpsArray()
        console.log(`schedule trigger at ${new Date()***REMOVED*** for clearing the visitor ips`)
    ***REMOVED*** catch (err) {
        console.error(err)
    ***REMOVED***
  ***REMOVED***, null, true);
    job.start();
***REMOVED***
***REMOVED***
