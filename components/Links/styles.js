export default (props, { colors, rhythm }) => ({
  root: {
    textAlign: 'center',
    marginTop: rhythm(5)
  },
  list: {
    padding: rhythm(1.5),
    maxWidth: rhythm(24),
    margin: 'auto'
  },
  link: {
    display: 'block',
    marginBottom: rhythm(1),
    textAlign: 'center',
    padding: rhythm(1),
    color: colors.primary,
    fontWeight: 'bold',
    border: `2px solid ${colors.primary}`,
    borderRadius: rhythm(0.333)
  }
})
