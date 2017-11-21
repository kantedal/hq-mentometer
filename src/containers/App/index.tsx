import * as React from 'react'
import * as AppActions from '../../actions/app'
import * as style from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router'
import { RootState } from '../../reducers'
import { Header, MainSection } from '../../components'
import { Menu } from '../Menu'
import { Host } from '../Host'
import { Mentometer } from '../Mentometer'
import { withRouter } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

export namespace App {
  export interface Props { // extends RouteComponentProps<void> {
    todos: TodoItemData[]
    actions: typeof AppActions
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component<App.Props, App.State> {

  render() {
    const { todos, actions, children, actions: { backToMenu } } = this.props
    return (
      <div style={AppContainerStyle}>
        <Header back={() => backToMenu()} />
        <MainSection>
          <Switch>
            <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className={style.switchWrapper}>
              {<Route path='/host' component={Host}/>}
              {<Route path='/mentometer' component={Mentometer}/>}
              {<Route exact path='/' component={Menu}/>}
            </AnimatedSwitch>
          </Switch>
        </MainSection>
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
    actions: bindActionCreators(AppActions as any, dispatch)
  }
}

const AppContainerStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgb(116, 79, 154) 30%, rgb(53, 57, 153) 90%)'
  // background: '#353999'
}

export default withRouter(App)