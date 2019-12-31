import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApplicationShell ***REMOVED*** from '@malagu/core/lib/browser';
import { Component ***REMOVED*** from '@malagu/core';
import { App ***REMOVED*** from './app';

@Component({ id: ApplicationShell, rebind: true ***REMOVED***)
export class Shell implements ApplicationShell {

    attach(host: HTMLElement): void {
        ReactDOM.render(<App/>, host);
  ***REMOVED***
***REMOVED***
