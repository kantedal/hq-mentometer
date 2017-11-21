import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { configureStore } from './store'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import App from './containers/App'

const history = createBrowserHistory()
const store = configureStore(history)


const AppComponent: any = App

const theme = createMuiTheme({
  overrides: {},
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppComponent />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)