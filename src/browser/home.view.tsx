import * as React from 'react';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { Container ***REMOVED*** from '@material-ui/core'
import { BlogServer ***REMOVED*** from '../common/blog-protocol';
// import Link from '@material-ui/core/Link';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import { DouMiIntroduction ***REMOVED*** from './components/doumiIntroduction';
import DouMiLinks from './components/doumiLinks';
import HottestArticles from './components/hottestArticles';
import { DouMiBlog ***REMOVED*** from '../interface';
import "./styles/index.less";
import FootPrint from './components/footPrint';


interface Prop {***REMOVED***
interface State {
    response: DouMiBlog.HottestArticlItem[]
***REMOVED***

@View()
export class Home extends React.Component<Prop, State> {

    @Autorpc(BlogServer)
    protected BlogServer!: BlogServer;

    constructor(prop: Prop) {
        super(prop);
        this.state = { response: [] ***REMOVED***
  ***REMOVED***

    async componentDidMount() {
        const response = await this.BlogServer.fetchHottestArticles(5);
        this.setState({
            response
        ***REMOVED***
  ***REMOVED***

    render() {
        return (
        <Container maxWidth="md" className="home-container">
          <DouMiIntroduction avatarSize={120***REMOVED*** fontSize={16***REMOVED*** />
          <DouMiLinks />
          <HottestArticles />
          <FootPrint />
        </Container>
      )
  ***REMOVED***
***REMOVED***
