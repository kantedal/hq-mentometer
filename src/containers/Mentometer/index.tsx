import * as React from 'react'
import * as TodoActions from '../../actions/todos'
import * as style from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router'
import { RootState } from '../../reducers'
import { Header, MainSection } from '../../components'
import { CSSProperties } from 'react'
import Button from 'material-ui/Button'

export namespace Mentometer {
  export interface Props extends RouteComponentProps<void> {
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Mentometer extends React.Component<Mentometer.Props, Mentometer.State> {

  render() {
    const { children } = this.props
    return (
      <div>
        Mentometer
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
