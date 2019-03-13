import React, { Component } from 'react'
import '../styles/App.css'
import BookListHeader from '../components/BookListHeader'
import VisibleBookList from '../containers/VisibleBookList'
import NextPage from '../components/NextPage'

class App extends Component {
  render() {
    const title = '高分经典'
    const subTitle = '豆瓣阅读创立以来，受到读者广泛好评的「高分经典」原创作品'

    return (
      <div className="App">
        <BookListHeader
          title={title}
          subTitle={subTitle}
        />
        <VisibleBookList />
        <div className="page-left-container">
          <NextPage direction="left" />
        </div>
        <div className="page-right-container">
          <NextPage direction="right" />
        </div>
      </div>
    )
  }
}

export default App
