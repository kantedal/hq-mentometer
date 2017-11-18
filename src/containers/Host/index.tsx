import * as React from 'react'
import * as HostActions from '../../actions/host'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router'
import { RootState } from '../../reducers'
import { Header, MainSection } from '../../components'

export namespace Host {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof HostActions
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Host extends React.Component<Host.Props, Host.State> {

  componentDidMount() {
    const { actions: { createMentometer } } = this.props
    createMentometer()
    console.log('component did mountt')
  }

  render() {
    const { children, actions: { createMentometer } } = this.props
    return (
      <div>
        Host
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
  return {
    actions: bindActionCreators(HostActions as any, dispatch)
  }
}
