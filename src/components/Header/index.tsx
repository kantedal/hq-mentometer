import * as React from 'react'
import { CSSProperties } from 'react'
import IconButton from 'material-ui/IconButton'
import * as style from './style.css'

export namespace Header {
  export interface Props {
    back: () => void
  }
}

export const Header: React.SFC<Header.Props> = ({ back }) => {
  return (
    <div className={style.headerContent}>
      {/* <div style={headerStyle}><span style={{fontSize: '36px'}}>HQ</span> <br/> mentometer</div> */}
      <div style={headerStyle}>HQ mentometer</div>
      <IconButton onClick={() => back() } className={style.backButton} aria-label="Delete">
        <i style={{ color: '#fff', fontSize: '30px' }} className='material-icons'>chevron_left</i>
      </IconButton>
    </div>
   
  )
}

const headerStyle: CSSProperties = {
  position: 'absolute',
  top: '0px',
  width: '100%',
  height: '75px',
  fontSize: '20px',
  textAlign: 'center',
  fontFamily: '"Bungee Shade", cursive',
  paddingTop: '20px',
  color: '#fff'
  // position: 'absolute',
  // width: '100%',
  // height: '100%',
  // padding: '10px',
  // background: '#0f0'
}