import React, { useState } from 'react'
import { useMissionSchedule } from '@mbari/api-client'
import {
  AccessoryButton,
  AccordionCells,
  ScheduleCell,
  ScheduleCellProps,
  ScheduleCellBackgrounds,
} from '@mbari/react-ui'
import { DateTime } from 'luxon'
import { faPlus } from '@fortawesome/pro-regular-svg-icons'
import clsx from 'clsx'
import { Select } from '@mbari/react-ui/dist/Fields/Select'
import { Input } from '@mbari/react-ui'

export interface ScheduleSectionProps {
  className?: string
  style?: React.CSSProperties
  authenticated?: boolean
  vehicleName: string
  currentDeploymentId?: number
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  currentDeploymentId,
}) => {
  const [scheduleStatus, setScheduleStatus] =
    useState<ScheduleCellProps['scheduleStatus'] | null>('running')
  const [scheduleFilter, setScheduleFilter] = useState<string>('')
  const [scheduleSearch, setScheduleSearch] = useState<string>('')

  const { data: missions } = useMissionSchedule(
    {
      deploymentId: currentDeploymentId ?? 0,
    },
    {
      enabled: !!currentDeploymentId,
    }
  )

  const toggleSchedule = () =>
    setScheduleStatus(scheduleStatus === 'paused' ? 'running' : 'paused')

  const staticHeaderCellOffset = 2
  const indexOfPastSchedule =
    (missions?.findIndex((v) => !['pending', 'running'].includes(v.status)) ??
      0) + staticHeaderCellOffset
  const hasPastSchedule = indexOfPastSchedule > 1
  const staticFilterCellOffset = hasPastSchedule ? 1 : 0
  const totalCellCount =
    (missions?.length ?? 0) + staticFilterCellOffset + staticHeaderCellOffset

  const handleScheduleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleSearch(e.target.value)
  }

  const cellAtIndex = (index: number) => {
    if (index === 0) {
      return (
        <div className="flex border-b border-stone-200 py-2 px-4 text-sm">
          <p className="flex-grow text-xs">
            Brizo is scheduled until
            <br /> tomorrow at ~06:30
          </p>
          <AccessoryButton
            label="Mission"
            icon={faPlus}
            className="mx-2"
            tight
          />
          <AccessoryButton label="Command" icon={faPlus} tight />
        </div>
      )
    }
    if (index === 1) {
      return (
        <div
          className={clsx(
            'flex px-4 py-2 text-sm',
            scheduleStatus === 'running'
              ? ScheduleCellBackgrounds.running
              : ScheduleCellBackgrounds.paused
          )}
        >
          <span className="my-auto mr-2 text-xs font-bold">
            Schedule is running
          </span>
          <AccessoryButton
            label={scheduleStatus === 'running' ? 'Stop All' : 'Resume All'}
            className="my-auto"
            onClick={toggleSchedule}
            tight
          />
        </div>
      )
    }
    if (index === indexOfPastSchedule && hasPastSchedule) {
      return (
        <div className="grid grid-cols-3 gap-2 px-4 py-2">
          <span className="my-auto text-xs font-bold">Schedule History</span>
          <Select
            name="scheduleFilters"
            options={[
              { name: 'All', id: 'all' },
              { name: 'Completed', id: 'completed' },
              { name: 'Cancelled', id: 'cancelled' },
            ]}
            value={scheduleFilter}
            placeholder="Filter"
            onSelect={(id) => setScheduleFilter(id ?? 'all')}
          />
          <Input
            name="search"
            placeholder="Search"
            value={scheduleSearch}
            onChange={handleScheduleSearch}
          />
        </div>
      )
    }
    const indexOffset =
      index < (indexOfPastSchedule ?? missions?.length ?? 0) ? -2 : -3
    const mission = missions?.[index + indexOffset]
    return mission ? (
      <ScheduleCell
        label={mission.eventName}
        secondary={mission.note}
        status={mission.status === 'running' ? scheduleStatus : mission.status}
        name={mission.user ?? 'Unknown'}
        scheduleStatus={
          ['pending', 'running'].includes(mission.status)
            ? scheduleStatus
            : undefined
        }
        className="border-b border-stone-200"
        description={
          mission?.endUnixTime
            ? `Ended ${DateTime.fromMillis(mission.endUnixTime).toFormat(
                'h:mm'
              )}`
            : `Started ${DateTime.fromMillis(mission.unixTime).toFormat(
                'h:mm'
              )}`
        }
        description2={
          DateTime.fromMillis(
            mission.endUnixTime ?? mission.unixTime
          ).toRelative() ?? ''
        }
        onSelect={() => undefined}
        onSelectMore={() => undefined}
      />
    ) : (
      <p>No Data</p>
    )
  }

  return (
    <>
      <AccordionCells cellAtIndex={cellAtIndex} count={totalCellCount} />
    </>
  )
}

ScheduleSection.displayName = 'components.ScheduleSection'
