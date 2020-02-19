import { Autowired, Component, ApplicationLifecycle, Application, Logger, Value } from '@malagu/core';
import { createConnections } from 'typeorm';
import { Website } from './entity/website';

const CronJob = require('cron').CronJob;

@Component(ApplicationLifecycle)
export class DouMiApplicationLifecycle implements ApplicationLifecycle<Application> {
  @Autowired(Logger)
  protected readonly logger: Logger;

  @Value('malagu.typeorm')
  protected readonly options: any;

  protected job: any;

  async onStart(app: Application): Promise<void> {
    // 只有1个连接
    const { ormConfig } = this.options;
    const config = ormConfig[0]
    config.name = 'schedule';
    config.entities = [Website];
    const connections = await createConnections([ config ]);
    var job = new CronJob('0 0 0 */1 * *', async () => {
      try {
        const websiteRepo = connections[0].getRepository(Website)
        const res = await websiteRepo.findOne({ id: 1});
        res!.todayIps = [];
        res!.todayPv = 0;
        res!.todayUv = 0;
        await websiteRepo.save(res!);
        this.logger.info(`schedule trigger at ${new Date()} for clearing the visitor ips`)
      } catch (err) {
        this.logger.error(err)
      }
    }, null, true, 'Asia/Shanghai');
    job.start();
  }

  onStop(app: Application): void {
    this.job.stop();
  }

}
