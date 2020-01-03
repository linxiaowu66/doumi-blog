import * as React from 'react'
import BlogContainer from './components/blogContainer';
import { View } from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

interface Prop {}
interface State {
    response: string
}

@View('/blog')
export default class BlogList extends React.Component<Prop, State> {
  render() {
    return(
      <BlogContainer>
        <BlogItem />
      </BlogContainer>
    )
  }
}
