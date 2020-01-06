import * as React from 'react';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
// import { Tooltip, Fab ***REMOVED*** from '@material-ui/core';
import {Email, Facebook***REMOVED*** from '@material-ui/icons';
import BlogContainer from './components/blogContainer';
import { DouMiIntroduction ***REMOVED*** from './components/doumiIntroduction';
import DouMiDetailItem from './components/DouMiDetailItem';


import './styles/doumi.less'
import ClickTooltip from './components/clickTooltip';

interface Prop {***REMOVED***
interface State {
  // isShowReward: boolean
***REMOVED***

function copyTextToClipboard(text: string) {
  var textArea = document.createElement("textarea");

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = '0px';
  textArea.style.left = '0px';

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = '0px';

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';

  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

***REMOVED***
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('信息复制结果：' + msg);
***REMOVED*** catch (err) {
    console.log('浏览器不支持复制！！');
***REMOVED***

  document.body.removeChild(textArea);
***REMOVED***

@View('/about/doumi')
export default class AboutDouMi extends React.Component<Prop, State> {
  render() {
    return (
      <BlogContainer>
        <DouMiIntroduction avatarSize={120***REMOVED*** fontSize={16***REMOVED*** />
        <DouMiDetailItem title="关于豆米">
          <p className="detail-intro"><span>大洋芋</span>：2012年毕业的豆，从一开始就投入到前端开发的行业中，一去不回头。工作地点曾经在深圳待过两年，之后辗转到杭州，公司也从吉祥腾达科技切换到阿里巴巴，目前在家暂时带娃。回望7年工作以往，经历了前端行业剧变的年代，写过JQuery，处理过一大堆的浏览器兼容性。最后在所谓的互联网大厂中继续磨练，深谙React之道，经过鉴定，是个纯正的前端er。希望今年(2020年)可以找到自己热爱的一个新团体和新公司~</p>
          <p className="detail-intro"><span>小米喳</span>：同样2012年毕业的米，经历就多一些，一开始做的是交换机协议软件开发，焊过电路板，烧录过交换机芯片，各种折腾，纯粹为了满足自己的动手愿望。2014年与豆一起辗转到杭州，就职于诺基亚通信，这次玩的是LTE 4G下行协议开发，玩玩天线、鼓捣鼓捣DSP，后来觉得太闲，果断转行到前端行业，2016年8月至今(2020年1月)，也有三年前端经验了，搞前端，其实我不是“正经”的，我更加喜欢偏服务端上做前端，研究过Nodejs实现机制，写过众多工具库，捋过前端工程化，探讨过前端开发模式等等，目前就职于点我达，希望未来可以有更大的平台让自己施展更多抱负，serverless可能是一个方向哦~</p>
        </DouMiDetailItem>
        <DouMiDetailItem title="豆米标签">
          <div className="tags-intro">
            <span>个人标签：</span>
            <div className="category">
              <div>大洋芋：<span>热情好客</span><span>话痨</span><span>居家整理好帮手</span></div>
              <div>小米喳：<span>好厨师</span><span>细心暖男</span><span>宠娃萌爸</span><span>动手能力强</span></div>
            </div>
          </div>
          <div className="tags-intro">
            <span>技能标签：</span>
            <div className="category">
              <div>大洋芋：<span>React</span><span>Broswer</span><span>中后台</span><span>JQuery</span></div>
              <div>小米喳：<span>React</span><span>Nodejs</span><span>Hybrid</span><span>Express.js</span><span>Websocket</span></div>
            </div>
          </div>
        </DouMiDetailItem>
        <DouMiDetailItem title="联系豆米">
          <p className="contact-me-tip">您可以通过以下方式找到豆米，欢迎交朋友，一起探讨人生、美食、带娃，哦~也可以交流前端知识~我在杭州等你(<em>点击即复制，由于material-ui没有微信图标，懒得再重新引入新的图标库，所以以facebook的图标代表微信</em>)</p>
          <div className="contact-me-channels">
            <ClickTooltip title="linguang66990@126.com" extraAction={copyTextToClipboard***REMOVED***>
              <Email />
            </ClickTooltip>
            <ClickTooltip title="lg997312609" extraAction={copyTextToClipboard***REMOVED***>
              <Facebook />
            </ClickTooltip>
          </div>
        </DouMiDetailItem>
        <DouMiDetailItem title="赞赏豆米">
          <p className="doumi-reward-tip">如果觉得博客还不错，可以请作者喝杯咖啡哦~</p>
          <div className="doumi-reward">
            <img src="https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/WechatIMG2.jpeg?x-oss-process=image/resize,l_600/crop,x_40,y_190,w_320,h_320/resize,l_160" />
            <img src="http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/WechatIMG3.jpeg?x-oss-process=image/resize,l_600/crop,x_60,y_120,w_320,h_320/resize,l_160" />
          </div>
        </DouMiDetailItem>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
