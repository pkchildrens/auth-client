import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { signout } from '../../actions'

class Signout extends Component {
  componentDidMount() {
    this.props.signout()
  }

  render() {
    return <div>Sorry to see you go</div>
  }
}

export default connect(
  null,
  { signout }
)(Signout)
