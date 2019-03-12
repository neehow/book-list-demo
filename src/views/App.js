import React, { Component } from 'react'
import '../styles/App.css'
import BookListHeader from '../components/BookListHeader'
import VisibleBookList from '../containers/VisibleBookList'
import { fetchBooks } from '../actions'

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // this.props.dispatch(fetchBooks())
  }

  render() {
    return (
      <div className="App">
        <BookListHeader
          title="高分经典"
          subTitle="豆瓣阅读创立以来，受到读者广泛好评的「高分经典」原创作品"
        />
        <VisibleBookList />
      </div>
    );
  }
}

export default App;
