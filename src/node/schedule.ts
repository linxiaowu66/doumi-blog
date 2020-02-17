import { Component, ApplicationLifecycle, Application } from '@malagu/core';
// import { BlogServiceSymbol, BlogService } from './services/index';

const CronJob = require('cron').CronJob;

@Component(ApplicationLifecycle)
export class DouMiApplicationLifecycle implements ApplicationLifecycle<Application> {
  // @Autowired(Logger)
  // protected readonly logger: Logger;

  protected job: any;

  async onStart(app: Application): Promise<void> {
    var job = new CronJob('0 0 0 */1 * *', async () => {
      try {
        // await this.blogService.clearTodayIpsArray()
        console.log(`schedule trigger at ${new Date()} for clearing the visitor ips`)
      } catch (err) {
        console.error(err)
      }
    }, null, true, 'Asia/Shanghai');
    job.start();
  }

  onStop(app: Application): void {
    this.job.stop();
  }

}
