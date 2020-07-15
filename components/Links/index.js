import React from 'react'
import Heading from 'constructicon/heading'
import capitalize from 'lodash/capitalize'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Link from 'next/link'

const Links = ({ classNames, links = [], title }) => (
  <div className={classNames.root}>
    <Heading size={5} color='primary' children={title} />
    <ul className={classNames.list}>
      {links.map(link => (
        <li key={link.name}>
          <Link href={`/${link.route}`}>
            <a className={classNames.link}>{capitalize(link.name)}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default withStyles(styles)(Links)
