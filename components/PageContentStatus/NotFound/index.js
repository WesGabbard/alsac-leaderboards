import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Heading from 'constructicon/heading'

const NotFound = ({ classNames }) => (
  <div className={classNames.root}>
    <Heading size={5}>404</Heading>
    <p className={classNames.label}>Resource not found</p>
  </div>
)

export default withStyles(styles)(NotFound)
