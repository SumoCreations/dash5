import React from 'react'
import { VehicleProps } from '../Vehicle'

export interface BackgroundProps {
  colorDirtbox: VehicleProps['colorDirtbox']
  colorWavecolor: VehicleProps['colorWavecolor']
}
export const Background: React.FC<BackgroundProps> = ({
  colorDirtbox,
  colorWavecolor,
}) => {
  return (
    <>
      {/* background wave */}
      <g transform="translate(0 8)">
        <g>
          <path
            data-testid={'background wave'}
            className={colorWavecolor}
            d="M640.68,200.81v108.71H126.47V198.07l5.36,0.98c10.57-0.98,15.74-8.04,15.74-8.04l0.18,0.2    c0,0,3.21,10.75,14.54,10.32c11.33-0.43,18.44-11.08,18.44-11.08s3.19,9.61,16.79,9.09c13.6-0.52,14.98-8.01,14.98-8.01    s3.95,9.58,16.03,9.12c12.09-0.46,16.47-9.21,16.47-9.21s3.93,8.43,14.49,7.46c10.57-0.98,15.74-8.04,15.74-8.04    s3.15,8.92,11.62,8.92c8.47,0,16.04-8.38,16.04-8.38s3.21,10.75,14.54,10.32c11.33-0.43,18.44-11.08,18.44-11.08    s3.19,9.61,16.79,9.09c13.6-0.52,14.98-8.01,14.98-8.01s3.95,9.58,16.03,9.12c12.09-0.46,16.47-9.21,16.47-9.21    s3.93,8.43,14.49,7.46c10.57-0.98,15.74-8.04,15.74-8.04l0.18,0.2c0,0,3.21,10.75,14.54,10.32c11.33-0.43,18.44-11.08,18.44-11.08    s3.19,9.61,16.79,9.09c13.6-0.52,14.98-8.01,14.98-8.01s3.95,9.58,16.03,9.12c12.09-0.46,16.47-9.21,16.47-9.21    s3.93,8.43,14.49,7.46c10.57-0.98,15.74-5.72,15.74-5.72s5,8.97,16.33,8.54c11.33-0.43,18.44-11.08,18.44-11.08    s3.19,9.61,16.79,9.09c13.6-0.52,14.98-8.01,14.98-8.01S628.59,201.27,640.68,200.81"
          />
        </g>
      </g>

      {/* dirtbox */}
      <rect
        data-testid={'dirtbox'}
        x="126.91"
        y="281.76"
        className={colorDirtbox}
        width="514.08"
        height="36.08"
      />
    </>
  )
}
