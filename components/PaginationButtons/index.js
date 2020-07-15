import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Button from 'constructicon/button'
import ButtonGroup from 'constructicon/button-group'

const PaginationButtons = ({ background, classNames, paginated, styles }) => {
  return (
    <div className={classNames.root}>
      <ButtonGroup styles={styles.buttonGroup}>
        <Button
          background={!background ? 'secondary' : background}
          disabled={!paginated.canPrev}
          onClick={paginated.prev}>
          Prev
        </Button>
        <Button
          background={!background ? 'secondary' : background}
          disabled={!paginated.canNext}
          onClick={paginated.next}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default withStyles(styles)(PaginationButtons)
