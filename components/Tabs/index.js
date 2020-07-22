import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Tab from './Tab'

const Tabs = ({
  classNames,
  links = [],
  router: { pathname }
}) => (
  <div className={classNames.root}>
    <ul className={classNames.list}>
      {links.map((link, i) => (
        <Tab
          key={i}
          isActive={link.name.toLowerCase() === pathname.split('/')[1]}
          {...link}
        />
      ))}
    </ul>
  </div>
)

export default withStyles(styles)(Tabs)
