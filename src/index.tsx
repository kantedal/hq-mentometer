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
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'rgba(255,255,255,0.5)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
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