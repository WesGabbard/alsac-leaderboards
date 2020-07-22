export default (
  { isActive },
  { colors, rhythm, scale }
) => ({
  root: {
    color: isActive ? colors.light : colors.primary,
    background: isActive ? colors.primary : colors.lgiht
  },
  link: {
    display: 'block',
    textAlign: 'center',
    padding: rhythm(1),
    fontSize: scale(2.5),
    fontWeight: 'bold',
    border: `2px solid ${colors.primary}`,
  }
})
