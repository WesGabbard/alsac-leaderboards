import React from 'react'

import Heading from 'constructicon/heading'
import Item from './item'
import Pagination from 'constructicon/pagination'
import PaginationButtons from '../PaginationButtons'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const Leaderboard = ({ classNames, data = [], links = [], styles, title, ...props }) => (
  <div className={classNames.root}>
    <Heading size={5} color='primary' children={title} styles={styles.title} />
    <Pagination toPaginate={data} max={5}>
      {paginated => (
        <div>
          {paginated.currentPage.map((item, index) => (
            <Item key={index} {...item} {...props} />
          ))}
          {paginated.isPaginated && (
            <PaginationButtons paginated={paginated} />
          )}
        </div>
      )}
    </Pagination>
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

export default withStyles(styles)(Leaderboard)
