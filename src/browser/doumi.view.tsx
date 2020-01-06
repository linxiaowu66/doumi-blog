import * as React from 'react';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import { Tooltip, Fab ***REMOVED*** from '@material-ui/core';
import BlogContainer from './components/blogContainer';
import { DouMiIntroduction ***REMOVED*** from './components/doumiIntroduction';
import DouMiDetailItem from './components/DouMiDetailItem';

import './styles/doumi.less'

interface Prop {***REMOVED***
interface State {
  response: string
***REMOVED***

// 加个“谢谢赞助”的模块
// 履历模块
// 我的标签
// 联系豆米

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

        </DouMiDetailItem>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary">
            赏
          </Fab>
        </Tooltip>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
