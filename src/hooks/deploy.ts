import { HookContext, FRONTEND_TARGET } from '@malagu/cli';
import { homedir } from 'os';
import * as path from 'path';
import * as fs from 'fs';
const OSSClient = require('ali-oss');
import ora from 'ora';
const chalk = require('chalk');
const ossConfig = JSON.parse(fs.readFileSync(path.resolve(homedir(), 'ossConfig.json'), 'utf-8'));


const ossClient = new OSSClient({
  region: 'oss-cn-hangzhou',
  accessKeyId: ossConfig.access_key_id,
  accessKeySecret: ossConfig.access_key_secret
});
let frontendCodeDir: string;

export default async (context: HookContext) => {
  await deployFrontend(context);
};

async function deployFrontend(context: HookContext) {
  const { pkg, dest } = context;
  frontendCodeDir = path.resolve(pkg.projectPath, dest, FRONTEND_TARGET);
  if (!fs.existsSync(frontendCodeDir)) {
    console.log(chalk`{yellow Please build frontend first with "malagu build"}`);
    return;
  }
  console.log(`Deploying ${chalk.yellow('frontend')} to Object Storage Service...`);
  const bucket = 'malagu-doumi-blog';
  await uploadFrontendCode(frontendCodeDir, bucket);
  console.log('Deploy finished');
}

async function uploadFrontendCode(codeDir: string, bucket: string) {
  try {
    await ossClient.getBucketInfo(bucket);
  } catch (error) {
    await spinner(`Create ${bucket} bucket`, async () => {
      await ossClient.putBucket(bucket);
      await ossClient.putBucketACL(bucket, 'public-read');
    });
  }

  ossClient.useBucket(bucket);
  await spinner(`Upload to ${bucket} bucket`, async () => {
    await doUploadFrontendCode(codeDir);
  });
}

async function doUploadFrontendCode(codeDir: string, prefix: string = '') {
  const files = fs.readdirSync(codeDir);
  await Promise.all(files.map(async fileName => {
    const fullPath = path.join(codeDir, fileName);
    const file = fs.statSync(fullPath);
    if (file.isDirectory()) {
      await doUploadFrontendCode(fullPath, prefix);
    } else {
      await ossClient.put(path.join(prefix, path.relative(frontendCodeDir, fullPath)), fullPath);
    }
  }));
}

async function spinner(options: string | ora.Options | undefined, cb: () => any) {
  let opts: any = options;
  if (typeof options === 'string') {
    opts = { text: options, discardStdin: false };
  } else {
    opts.discardStdin = false;
  }
  const s = ora(opts).start();
  try {
    await cb();
    s.succeed();
  } catch (error) {
    s.fail(error);
    throw error;
  }
}
