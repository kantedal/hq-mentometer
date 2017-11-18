import * as React from 'react'
import { CSSProperties } from 'react';

export namespace Header {
  export interface Props {}
}

export const Header: React.SFC<Header.Props> = (props) => {
  return (
    <div style={headerStyle}>
      HQ mentometer
    </div>
  )
}

const headerStyle: CSSProperties = {
  position: 'absolute',
  top: '0px',
  width: '100%',
  height: '75px',
  fontSize: '30px',
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