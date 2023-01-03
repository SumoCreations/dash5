import React from 'react'
import { IconButton } from '../../Navigation/IconButton'
import { faSync } from '@fortawesome/pro-solid-svg-icons'

export interface StatProps {
  totalDistance?: string
  bottomDepth?: string
  duration?: string
  onRefreshStats?: () => void
}

const styles = {
  stats: 'text-stone-400 ml-4',
}

export const StatDisplay: React.FC<StatProps> = ({
  totalDistance,
  bottomDepth,
  duration,
  onRefreshStats,
}) => {
  return (
    <ul className="mr-4 mt-2 flex items-center justify-end">
      {onRefreshStats && (
        <li className="rounded border-2 border-stone-300/60">
          <IconButton
            icon={faSync}
            ariaLabel="refresh stats"
            size="text-2xl"
            onClick={onRefreshStats}
          />
        </li>
      )}
      <li className={styles.stats}>Total distance: {totalDistance ?? '---'}</li>
      <li className={styles.stats}>
        Est. bottom depth: {bottomDepth ?? '---'}
      </li>
      <li className={styles.stats}>Est. duration: {duration ?? '---'}</li>
    </ul>
  )
}