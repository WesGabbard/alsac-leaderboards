import axios from 'axios'
import numbro from 'numbro'

export const client = axios.create({
  baseURL: `${process.env.BASE_URL}/site`,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})

export const defaultParams = {
  v: '1.0',
  response_format: 'json',
  api_key: process.env.API_KEY
}

export const csvParams = (type = 'participants', event = 'heroes') => ({
    method: 'getTagInfo',
    content: `[[S84:leaderboards/${event}/stj.${type}_leaderboard.csv]]`,
    login_name: process.env.ADMIN_USERNAME,
    login_password: process.env.ADMIN_PASSWORD,
    ...defaultParams
})

export const loginParams = () => ({
  method: 'login',
  user_name: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  login_name: process.env.ADMIN_USERNAME,
  login_password: process.env.ADMIN_PASSWORD,
  ...defaultParams
})

export const deserializeLeaderboardItem = (props, type) => ({
  rank: Number(props.SEQ),
  amount: numbro(props.AMOUNT_RAISED).formatCurrency('0,000'),
  title: type === 'event' ?
      props.EVENT_NAME
    :
      (type === 'team' ?
        props.TEAM_NAME
      :
        props.FIRST_NAME + ' ' + props.LAST_NAME
    ),
  href: type === 'event' ?
    props.EVENT_URL
    :
    (type === 'team' ?
      props.TEAM_URL
      : props.PARTICIPANT_URL
    )
})
