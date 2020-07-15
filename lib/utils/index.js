import numbro from 'numbro'

export const isValidJSON = (text) => {
  try {
    JSON.parse(text)
    return true
  } catch {
    return false
  }
}

export const stringifyRichText = (text) => {
  if (isValidJSON(text)) {
    return JSON.parse(text).map(paragraphNodeToString).join('\n\n')
  } else {
    return text
  }
}

export const formatDonation = (donation, { format, layout }) => {
  const formattedAmount = numbro(donation.amount).formatCurrency(format)
  switch (layout) {
    case 'name-only':
      return donation.name
    case 'amount-only':
      return formattedAmount
    case 'message-only':
      return donation.message
    case 'name-message':
      return <span>{[donation.name, donation.message].join(' - ')}</span>
    case 'message-amount':
      return (
        <span>
          {donation.message} <strong>{formattedAmount}</strong>
        </span>
      )
    case 'name-message-amount':
      return (
        <span>
          {[donation.name, donation.message].join(' - ')}{' '}
          <strong>{formattedAmount}</strong>
        </span>
      )
    case 'amount-name':
      return (
        <span>
          <strong>{formattedAmount}</strong> {donation.name}
        </span>
      )
    default:
      return (
        <span>
          {donation.name} <strong>{formattedAmount}</strong>
        </span>
      )
  }
}

const paragraphNodeToString = p =>
  p.nodes
    .map(textNode => textNode.ranges.map(textRange => textRange.text).join(''))
    .join('')
