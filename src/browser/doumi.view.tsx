import * as React from 'react';
import { View } from '@malagu/react/lib/browser';

interface Prop {}
interface State {
  response: string
}

@View('/about/doumi')
export default class AboutDouMi extends React.Component<Prop, State> {
}
