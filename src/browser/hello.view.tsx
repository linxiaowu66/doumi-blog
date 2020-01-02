import * as React from 'react';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import Button from '@material-ui/core/Button'
import { WelcomeServer } from '../common/welcome-protocol';
import { View } from '@malagu/react/lib/browser';

import "./styles/index.less"

interface Prop {}
interface State {
    response: string
}
@View()
export class Hello extends React.Component<Prop, State> {

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
        return <div className="app">
          <Button variant="contained" color="primary">按钮实例</Button>
        </div>
    }
}
