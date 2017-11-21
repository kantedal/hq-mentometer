import * as React from 'react'
import * as style from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router'
import { RootState } from '../../reducers'
import { Header, MainSection } from '../../components'
import { CSSProperties } from 'react'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import { NavigationButton } from '../../components/NavigationButton/index'

export namespace Menu {
  export interface Props extends RouteComponentProps<void> {
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Menu extends React.Component<Menu.Props, Menu.State> {

  render() {
    const { children } = this.props
    return (
      <div style={menuContainerStyle}>
        <div style={descriptionBoxStyle}>
          Select if you want an existing mentometer session or if you would like to host one yourself.
        </div>
        <Link to='mentometer' style={{ textDecoration: 'none' }}>
          <Button raised style={menuButtonStyle}>
            Join mentometer
          </Button>
        </Link>
        <Link to='host' style={{ textDecoration: 'none' }}>
          <Button raised style={menuButtonStyle}>
            Host mentometer
          </Button>
        </Link>
      </div>
    )
  }
}


function mapStateToProps(state: RootState) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const menuContainerStyle: CSSProperties = {
  // position: 'absolute',
  // width: '100%',
  // height: '100%'
}

const menuBoxStyle: CSSProperties = {
  width: '100%'
}

const menuButtonStyle: CSSProperties = {
  width: 'calc(100% - 20px)',
  margin: '10px',
  height: '60px',
  color: 'rgb(53, 57, 153)',
  fontSize: '20px',
}

const descriptionBoxStyle: CSSProperties = {
  padding: '20px',
  paddingLeft: '30px',
  paddingRight: '30px',
  color: '#fff',
  fontFamily: 'Roboto',
  fontWeight: 200,
  textAlign: 'center'
}
