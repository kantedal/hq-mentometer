import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { configureStore } from './store'
import App from './containers/App'

const store = configureStore()
const history = createBrowserHistory()

const AppComponent: any = App

const theme = createMuiTheme({
  overrides: {},
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <AppComponent />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)