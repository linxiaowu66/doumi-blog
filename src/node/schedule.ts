import { Autowired, Component } from '@malagu/core';
// import { injectable } from 'inversify'
import { BlogServiceSymbol, BlogService } from './services/index';

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
      try {
        // await this.blogService.clearTodayIpsArray()
        console.log(`schedule trigger at ${new Date()} for clearing the visitor ips`)
      } catch (err) {
        console.error(err)
      }
    }, null, true);
    job.start();
  }
}
