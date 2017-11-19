import * as React from 'react'
import * as style from './style.css'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

export namespace ConnectionStep {
  export interface Props {
    serverId: string
    failMessage: string
    sessionEnded: boolean
    changeServerId: (serverId: string) => void
    connectToMentometer: (serverId: string) => void
    closeSessionEndedDialog: () => void
  }
}

export const ConnectionStep: React.SFC<ConnectionStep.Props> = ({ children, changeServerId, failMessage, serverId, connectToMentometer, sessionEnded, closeSessionEndedDialog }) => {
  return (
    <div style={connectionStepStyle}>
      <div style={serverIdConnectionHeaderStyle}>
        Connect to mentometer
      </div>

      <div style={serverIdStyle}>
        <TextField
          id='name'
          value={serverId}
          placeholder={'Enter server id'}
          inputClassName={style.connectionInput}
          onChange={(e) => changeServerId(e.target.value)}
          margin='none'
        />
      </div>

      <div className={style.failMessage}>
        {failMessage}
      </div>

      <Button raised style={startMentometerStyle} onClick={()=> connectToMentometer(serverId) }>
        Connect
      </Button>

      <div>
        <Dialog open={sessionEnded} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{'Mentometer session ended'}</DialogTitle>
          <DialogActions>
            <Button onClick={closeSessionEndedDialog} color='primary'>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>

    </div>
  )
}

const connectionStepStyle: React.CSSProperties = {
  width: 'calc(100% - 80px)',
  marginLeft: '40px',
  marginRight: '40px',
}

const serverIdStyle: React.CSSProperties = {
  fontSize: '35px',
  fontWeight: 200,
  fontFamily: 'Roboto',
  textAlign: 'center',
  color: '#fff',
  background: 'rgba(255,255,255,0.2)',
  borderRadius: '20px',
  padding: '10px'
}

const startMentometerStyle: React.CSSProperties = {
  width: '100%',
  marginTop: '30px'
}

const serverIdConnectionTextFieldStyle: React.CSSProperties = {
  width: '100%',
  color: '#fff',
}

const serverIdConnectionHeaderStyle: React.CSSProperties = {
  fontSize: '25px',
  fontWeight: 200,
  color: '#fff',
  fontFamily: 'Roboto',
  textAlign: 'center',
  padding: '10px',
}