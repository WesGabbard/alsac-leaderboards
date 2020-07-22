import React from 'react'
import capitalize from 'lodash/capitalize'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Link from 'next/link'

const Tab = ({ classNames, name, route }) => (
  <li  className={classNames.root}>
    <Link href={`/${route}`}>
      <a className={classNames.link}>{capitalize(name)}</a>
    </Link>
  </li>
)

export default withStyles(styles)(Tab)
