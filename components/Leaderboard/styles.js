export default (props, { colors, rhythm }) => ({
  root: {
    marginTop: rhythm(2),
    border: `2px solid ${colors.grey}`,
    padding: rhythm(1.5)
  },
  title: {
    marginBottom: rhythm(1)
  }
})
