import { Context ***REMOVED*** from '@malagu/web/lib/node';
import { Website ***REMOVED*** from './../entity/website';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { Component, Autowired, Logger ***REMOVED*** from '@malagu/core';
import { AwesomeHelp ***REMOVED*** from 'awesome-js';
import { WinstonLogger ***REMOVED*** from 'malagu-winston';

export const WebsiteServiceSymbol = Symbol('WebsiteService');

@Component(WebsiteServiceSymbol)
export class WebsiteService {
  @Autowired(Logger)
  protected logger: WinstonLogger;

  @Transactional()
  async updateWebsiteStatistics() {
    let reqIp: string;
    if (Context.getRequest().headers['x-real-ip']) {
      reqIp = Context.getRequest().headers['x-real-ip'] as string;
  ***REMOVED*** else {
      reqIp = (Context.getRequest() as any).ip;
  ***REMOVED***

    if (!reqIp) {
      this.logger.info('[blogService]: can not get client ip, ignore it!');
  ***REMOVED***
  ***REMOVED***

    const now = AwesomeHelp.convertDate(new Date(), 'YYYY-MM-DD');

    const repo = OrmContext.getRepository(Website);

    // 查找数据库中是否存在今天的数据
    const website = await repo.findOne({ date: now ***REMOVED***

    if (website) {
      if (!website.todayIps.includes(reqIp)) {
        website.todayIps.push(reqIp);
        website.todayPv = +website.todayPv + 1;
        website.todayUv = +website.todayUv + 1;
        website.totalPv = +website.totalPv + 1;
        website.totalUv = +website.totalUv + 1;
    ***REMOVED*** else {
        website.totalPv = +website.totalPv + 1;
        website.todayPv = +website.todayPv + 1;
    ***REMOVED***
      repo.save(website);
  ***REMOVED*** else {
      // 不存在的话，那么新建，同时需要删除7天之外的数据
      const yesterday = new Date().getTime() - 24 * 3600 * 1000;
      const yesResult = await repo.findOne({ date: AwesomeHelp.convertDate(new Date(yesterday), 'YYYY-MM-DD')***REMOVED***
      const newData = new Website();
      newData.todayIps = [reqIp];
      newData.todayPv = 1;
      newData.todayUv = 1;
      newData.totalPv = yesResult!.totalPv + 1;
      newData.totalUv = yesResult!.totalUv + 1;
      newData.date = now;
      repo.save(newData);
      const beyond7Days = new Date().getTime() - 7 * 24 * 3600 * 1000;
      const result = await repo.findOne({ date: AwesomeHelp.convertDate(new Date(beyond7Days), 'YYYY-MM-DD')***REMOVED***
      if (result) {
        repo.delete(result.id);
    ***REMOVED***
  ***REMOVED***
***REMOVED***

  async websiteChangeLog() {
    return [{
      title: '本站正式上线',
      desc1: '8月8号，完成所有博客的基本功能，除了关于豆米的网页暂时没完成之外。',
      desc2: '豆米的博客意在分享web开发的点点滴滴，前端和后台都会有所涉及，再适当分享些生活的精彩。',
      date: '2016/08',
      time: '08 周一'
  ***REMOVED***, {
      title: '完成文章搜索功能',
      desc1: '9月11号，完成网站的首页以及后台的文章搜索功能。',
      desc2: '暂时只提供对博客的标题搜索，不支持全文搜索。',
      date: '2016/09',
      time: '11 周日'
  ***REMOVED***, {
      title: '改进网站的SEO',
      desc1: '10月10号，修改部分代码，增强网站的SEO。',
      desc2: '修改页面的title、description等meta，提高网站的SEO。添加google的verification文件，提高谷歌收录网站的可能性',
      date: '2016/10',
      time: '10 周一'
  ***REMOVED***, {
      title: '博文列表改版',
      desc1: '12月03号，博文列表改版，使之更加简洁大方。',
      desc2: '新增博客首页图片，方便显示博文列表中的大图,增加网站形象性',
      date: '2016/12',
      time: '03 周六'
  ***REMOVED***, {
      title: '增加友情链接面板',
      desc1: '01月05号，增加友情链接面板，加大文章标题的可存长度',
      desc2: '新增博客的友情链接，外链到一些推荐的博客网站',
      date: '2017/01',
      time: '05 周四'
  ***REMOVED***, {
      title: '优化管理后台和统计数据',
      desc1: '02月09号，优化管理后台，增加操作信息框',
      desc2: '优化网站统计数据，修复若干bug',
      date: '2017/02',
      time: '09 周四'
  ***REMOVED***, {
      title: '增加Markdown编辑器对于数学公式渲染的支持',
      desc1: '03月29号，支持数学公式的渲染显示，修复若干个bug',
      desc2: '在<a href="https://www.npmjs.com/package/marked">marked</a>解析器的基础上支持数学公式的编辑，并将修改后的包发布到npm上：<a href="https://www.npmjs.com/package/marked-katex">marked-katex</a>',
      date: '2017/03',
      time: '29 周三'
  ***REMOVED***, {
      title: '迁移网站到https，删掉些功能，添加新东西',
      desc1: '05月12号，升级网站到https,05月13号，增加[关于豆米](https://blog.5udou.cn/aboutDouMi)页面',
      desc2: '05月13号，增加[米喳简历](https://blog.5udou.cn/resume/mizha)页面',
      date: '2018/05',
      time: '13 周日'
  ***REMOVED***, {
      title: '抽离controller主逻辑，支持api请求获取数据',
      desc1: '01月04号，抽离controller的主逻辑，支持api请求，不再单一支持服务端渲染',
      desc2: '01月05号，新增8个api，覆盖完整博客的请求，为小程序和RN版本提供接口',
      date: '2019/01',
      time: '04 周六'
  ***REMOVED***, {
      title: '接入gitalk评论系统，增加渠道曝光',
      desc1: '11月21号，弃用disqus评论系统，改用gitalk评论系统，好用不止一点点~',
      desc2: '11月21号，优化SEO，增加小程序曝光，优化博客详情页底部展示信息',
      date: '2019/11',
      time: '21 周四'
  ***REMOVED***, {
      title: '重构博客',
      desc1: '使用malagu框架重构整个博客的实现',
      desc2: '博客的整体UI风格全新呈现',
      date: '2020/02',
      time: '09 周日'
  ***REMOVED***];
***REMOVED***
  @Transactional()
  async fetchWebsiteStatistics() {
    const repo = OrmContext.getRepository(Website);

    const results = await repo.find();

    return results;
***REMOVED***
***REMOVED***
