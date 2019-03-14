// 切换每屏展示3个还是5个
import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../styles/CountSwitch.css'
import {setCountPerPage} from '../actions'

class CountSwitch extends Component {
  handleChange = (e) => {
    const count = e.target.checked ? 3 : 5
    this.props.dispatch(setCountPerPage(count))
  }

  render () {
    return (
      <div  className="Count-Switch">
        <label className="label">
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.countPerPage === 3}
            onChange={this.handleChange}
          />
          每屏展示3本书
        </label>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countPerPage: state.countPerPage,
})

export default connect(mapStateToProps)(CountSwitch)
