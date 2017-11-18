import * as React from 'react'
import { CSSProperties } from 'react';

export namespace MainSection {
  export interface Props {}
}

export const MainSection: React.SFC<MainSection.Props> = ({ children }) => {
  return (
    <div style={mainSectionStyle}>
      {children}
    </div>
  )
}

const mainSectionStyle: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 'calc(100% - 100px)',
  marginTop: '100px'
  // padding: '10px',
  // background: '#0f0'
}