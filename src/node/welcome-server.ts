import { WelcomeServer ***REMOVED*** from '../common/welcome-protocol';
import { Rpc ***REMOVED*** from '@malagu/rpc';

@Rpc(WelcomeServer)
export class WelcomeServerImpl implements WelcomeServer {
    say(): Promise<string> {
        return Promise.resolve('Welcome to Malagu!');
  ***REMOVED***
***REMOVED***
