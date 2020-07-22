export default ({ small }, { colors, rhythm }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexPack: 'center',
    height: !small && '75vh',
    minHeight: !small && `calc(100vh - ${rhythm(10)})`,
    padding: small && rhythm(2)
  }
})
