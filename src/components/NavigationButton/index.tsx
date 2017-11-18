import * as React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'material-ui/Button'

export namespace NavigationButton {
}

export const NavigationButton = withRouter(({ history }) => (
  <Button raised style={menuButtonStyle} onClick={() => { history.push('/host') }}>
    Join mentometer
  </Button>
))

const menuButtonStyle: React.CSSProperties = {
  width: 'calc(100% - 20px)',
  margin: '10px',
  height: '60px',
  color: 'rgb(53, 57, 153)',
  fontSize: '20px'
}