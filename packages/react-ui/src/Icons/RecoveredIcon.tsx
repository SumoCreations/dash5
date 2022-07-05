import React from 'react'
import clsx from 'clsx'

export interface RecoveredIconProps {
  className?: string
  style?: React.CSSProperties
  large?: boolean
}

export const RecoveredIcon: React.FC<RecoveredIconProps> = ({
  className = 'fill-black stroke-black',
  style,
  large,
}) => {
  return (
    <div className={clsx('', className)} style={style}>
      <svg
        width={large ? '54' : '31'}
        height={large ? '52' : '33'}
        viewBox="0 0 54 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 49.4036C2.19513 48.7548 3.2916 48.0122 4.24665 47.2842C6.50483 45.563 9.80438 45.4175 11.8629 47.3732L12.3289 47.8159C14.2587 49.6494 17.2867 49.6494 19.2166 47.8159L20.0107 47.0615C21.9405 45.228 24.9686 45.228 26.8984 47.0615L27.6925 47.8159C29.6224 49.6494 32.6504 49.6494 34.5802 47.8159L35.3743 47.0615C37.3042 45.228 40.3322 45.228 42.2621 47.0615L43.0561 47.8159C44.986 49.6494 48.011 49.6455 50.0262 47.9062C50.9824 47.0808 52.0235 46.216 53 45.4738"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5928 38.0149L12.6316 38.006L40.2094 37.7695C43.0127 37.7454 44.9855 36.6183 46.1655 34.8865C47.261 33.2787 47.5076 31.3935 47.4959 30.0312C47.4813 28.3283 46.7015 26.4768 45.5059 25.0652C44.2869 23.6261 42.4187 22.3991 40.0777 22.4191L23.6566 22.56L23.6087 16.978L23.5916 14.978L21.5916 14.9952L17.7913 15.0278L15.7914 15.0449L15.8085 17.0449L15.8564 22.6269L12.5 22.6557L11.4612 22.6646L10.8711 23.5196L6.93079 29.2291L6.13233 30.386L6.95052 31.5291L10.9882 37.1701L11.5928 38.0149ZM21.6567 22.5771L21.6738 24.5771L23.6737 24.5599L40.0949 24.4191C43.2729 24.3918 45.4762 27.7401 45.496 30.0484C45.5158 32.3567 44.6219 35.7315 40.1922 35.7695L12.6145 36.0061L8.57685 30.3651L12.5171 24.6556L15.8736 24.6268L17.8735 24.6097L17.8563 22.6097L17.8256 19.0276L17.8085 17.0277L19.6089 17.0123L19.8084 17.0106L21.6088 16.9951L21.6259 18.995L21.6567 22.5771Z"
        />
        <path
          d="M21.3865 36.9476C23.211 43.7896 29.597 1.36865 29.597 5.01778C29.597 8.6669 36.8952 32.386 41.0005 37.8599"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="29.5093"
          y1="7.21045"
          x2="29.5093"
          y2="0.999923"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

RecoveredIcon.displayName = 'Icons.RecoveredIcon'
