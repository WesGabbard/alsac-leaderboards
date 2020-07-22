import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import ErrorStatus from './ErrorStatus'
import Loading from './Loading'
import NotFound from './NotFound'

const PageContentStatus = ({ children, classNames, notFound, status }) => {
  switch (determineStatus(status)) {
    case 'failed':
      return (
        <div className={classNames.root}>
          <ErrorStatus />
        </div>
      )
    case 'fetched':
      return notFound ? (
        <div className={classNames.root}>
          <NotFound />
        </div>
      ) : (
        <div>{children}</div>
      )
    default:
      return (
        <div className={classNames.root}>
          <Loading />
        </div>
      )
  }
}

const determineStatus = status => {
  if (Array.isArray(status)) {
    if (status.filter(s => s === 'failed').length) return 'failed'
    if (status.filter(s => s === 'fetching').length) return 'fetching'
    if (status.filter(s => s === 'fetched').length === status.length) {
      return 'fetched'
    }
  } else {
    return status
  }
}

export default withStyles(styles)(PageContentStatus)
