import { Autowired, Component, Logger, ApplicationLifecycle, Application ***REMOVED*** from '@malagu/core';
// import { BlogServiceSymbol, BlogService ***REMOVED*** from './services/index';

const CronJob = require('cron').CronJob;

@Component(ApplicationLifecycle)
export class DouMiApplicationLifecycle implements ApplicationLifecycle<Application> {
  @Autowired(Logger)
  protected readonly logger: Logger;

  protected job: any;

  async onStart(app: Application): Promise<void> {
    var job = new CronJob('0 0 0 */1 * *', async () => {
    ***REMOVED***
        // await this.blogService.clearTodayIpsArray()
        this.logger.info(`schedule trigger at ${new Date()***REMOVED*** for clearing the visitor ips`)
    ***REMOVED*** catch (err) {
        console.error(err)
    ***REMOVED***
  ***REMOVED***, null, true, 'Asia/Shanghai');
    job.start();
***REMOVED***

  onStop(app: Application): void {
    this.job.stop();
***REMOVED***

***REMOVED***
