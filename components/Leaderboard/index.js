import React, { useState } from 'react'
import Heading from 'constructicon/heading'
import Filter from 'constructicon/filter'
import Item from './Item'
import Pagination from 'constructicon/pagination'
import PaginationButtons from '../PaginationButtons'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const Leaderboard = ({ classNames, data = [], styles, ...props }) => {
  const [items, setItems] = useState(data)

  const setFilter = val => {
    const q = val.toLowerCase() || null
    const queryResults = items.filter(item => {
      const name = props.type === 'event' ? item.EVENT_NAME.toLowerCase() : (props.type === 'team' ? item.TEAM_NAME.toLowerCase() : item.FIRST_NAME.toLowerCase() + ' ' + item.LAST_NAME.toLowerCase())

      if (name.indexOf(q) !== -1) {
        return item
      }
    })
    const results = queryResults.length > 0 ? queryResults : (!q ? data : [])
    setItems(results)
  }

  return (
    <div className={classNames.root}>
      <Filter placeholder={`Find ${props.type}`} onChange={val => setFilter(val)} />
      <Pagination toPaginate={items} max={5}>
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
    </div>
  )
}

export default withStyles(styles)(Leaderboard)
