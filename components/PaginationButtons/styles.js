export default ({ align }, { rhythm }) => ({
  root: {
    margin: `${rhythm(1)} auto 0`
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: !align ? 'space-between' : align
  }
})
