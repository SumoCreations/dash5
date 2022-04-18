import React from 'react'
import clsx from 'clsx'
import { swallow } from '@mbari/utils'

export interface VehicleCellProps {
  className?: string
  style?: React.CSSProperties
  graphic?: string
  icon: JSX.Element
  headline: string | JSX.Element
  headline2?: string | JSX.Element
  lastPosition?: string
  lastSatellite?: string
  lastCell?: string
  lastKnownGPS?: string
  lastCommunication?: string
  onSelect?: () => void
}

const styles = {
  container: 'bg-white font-display',
  infoLabel: 'font-semibold mr-1',
  icon: 'pr-4 pt-2',
  button: 'p-4 text-left w-full',
}

export const VehicleCell: React.FC<VehicleCellProps> = ({
  className,
  style,
  graphic,
  icon,
  headline,
  headline2,
  lastPosition,
  lastSatellite,
  lastCell,
  lastKnownGPS,
  lastCommunication,
  onSelect,
}) => {
  return (
    <article className={clsx(className, styles.container)} style={style}>
      <button className={styles.button} onClick={swallow(onSelect)}>
        {graphic && <img className="pb-4" src={graphic} />}
        <section className="flex">
          <div className={styles.icon}>{icon}</div>
          <div>
            <ul className="pb-2">
              <li>{headline}</li>
              {headline2 && <li className="pt-1">{headline2}</li>}
            </ul>
            <ul>
              {lastPosition && (
                <li>
                  <span className={styles.infoLabel}>Last position:</span>
                  <span>{lastPosition}</span>
                </li>
              )}
              {lastSatellite && (
                <li>
                  <span className={styles.infoLabel}>Last satellite:</span>
                  <span>{lastSatellite}</span>
                </li>
              )}
              {lastCell && (
                <li>
                  <span className={styles.infoLabel}>Last Cell:</span>
                  <span>{lastCell}</span>
                </li>
              )}
              {lastKnownGPS && (
                <li>
                  <span className={styles.infoLabel}>Last known GPS: </span>
                  <span>{lastKnownGPS}</span>
                </li>
              )}
              {lastCommunication && (
                <li>
                  <span className={styles.infoLabel}>Last communication:</span>
                  <span>{lastCommunication}</span>
                </li>
              )}
            </ul>
          </div>
        </section>
      </button>
    </article>
  )
}

VehicleCell.displayName = 'Cells.VehicleCell'
