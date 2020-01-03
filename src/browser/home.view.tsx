import * as React from 'react';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { Container } from '@material-ui/core'
import { WelcomeServer } from '../common/welcome-protocol';
import { View } from '@malagu/react/lib/browser';
import { DouMiIntroduction } from './components/doumiIntroduction';
import DouMiLinks from './components/doumiLinks';
import HottestArticles from './components/hottestArticles';

import "./styles/index.less";
import FootPrint from './components/footPrint';


interface Prop {}
interface State {
    response: string
}

@View()
export class Home extends React.Component<Prop, State> {

    @Autorpc(WelcomeServer)
    protected welcomeServer!: WelcomeServer;

    constructor(prop: Prop) {
        super(prop);
        this.state = { response: 'Loading' };
    }

    async componentDidMount() {
        const response = await this.welcomeServer.say();
        this.setState({
            response
        });
    }

    render() {
        return (
        <Container maxWidth="md" className="home-container">
          <DouMiIntroduction avatarSize={120} fontSize={16} />
          <DouMiLinks />
          <HottestArticles />
          <FootPrint />
        </Container>
      )
    }
}
