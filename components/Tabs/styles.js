export default (props, traits) => ({
  root: {},
  list: {
    display: 'flex',
    margin: 'auto',

    '& > li': {
      flex: 1,
    }
  }
})
