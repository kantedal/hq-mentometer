import * as React from 'react'
import * as HostActions from '../../actions/host'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router'
import { RootState } from '../../reducers'
import { Header, MainSection } from '../../components'
import { ConnectionStep } from './components/ConnectionStep'

export namespace Host {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof HostActions
    serverId: string
    connectedClients: any[]
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
    const { children, serverId, connectedClients } = this.props
    console.log(connectedClients)
    return (
      <div>
        <ConnectionStep serverId={serverId} connectedClients={connectedClients} />
      </div>
    )
  }
}

function mapStateToProps(state: RootState) {
  return {
    serverId: state.host.serverId,
    connectedClients: state.host.connectedClients
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HostActions as any, dispatch)
  }
}
