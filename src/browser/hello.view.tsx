import * as React from 'react';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import Button from '@material-ui/core/Button'
import { WelcomeServer ***REMOVED*** from '../common/welcome-protocol';
import { View ***REMOVED*** from '@malagu/react/lib/browser';

import "./styles/index.less"

interface Prop {***REMOVED***
interface State {
    response: string
***REMOVED***
@View()
export class Hello extends React.Component<Prop, State> {

    @Autorpc(WelcomeServer)
    protected welcomeServer!: WelcomeServer;

    constructor(prop: Prop) {
        super(prop);
        this.state = { response: 'Loading' ***REMOVED***
  ***REMOVED***

    async componentDidMount() {
        const response = await this.welcomeServer.say();
        this.setState({
            response
        ***REMOVED***
  ***REMOVED***

    render() {
        return <div className="app">
          <Button variant="contained" color="primary">按钮实例</Button>
        </div>
  ***REMOVED***
***REMOVED***
