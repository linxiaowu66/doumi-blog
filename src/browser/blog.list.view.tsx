import * as React from 'react'
import BlogContainer from './components/blogContainer';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

interface Prop {***REMOVED***
interface State {
    response: string
***REMOVED***

@View('/blog')
export default class BlogList extends React.Component<Prop, State> {
  render() {
    return(
      <BlogContainer>
        <BlogItem />
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
