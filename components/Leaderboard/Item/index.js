import React, { useEffect, useState } from 'react'
import numbro from 'numbro'
import get from 'lodash/get'
import { client, defaultParams } from '../../../lib/api'
import { stringify } from 'qs'
import LeaderboardItem from 'constructicon/leaderboard-item'

const Item = ({ type = 'fundraiser' , token, ...props }) => {
  const [avatar, setAvatar] = useState(null)
  const [status, setStatus] = useState('fetching')
  useEffect(() => {
    const data = {
      method: 'getPersonalPhotos',
      fr_id: props.FR_ID,
      cons_id: props.CONS_ID,
      token,
      ...defaultParams
    }
    Promise.resolve()
      .then(() =>
        client({
          url: 'CRTeamraiserAPI',
          data: stringify(data)
        })
      )
      .then(response => {
        console.log(response)
        const url = get(response, 'data.getPersonalPhotosResponse.photoItem[0].customUrl')
        setAvatar(url && `${process.env.BASE_URL}/${url.split('../')[1]}`)
      })
      .then(() => setStatus('fetched'))
      .catch(() => setStatus('failed'))
  },[props.CONS_ID])
  return (
    <LeaderboardItem
      rank={Number(props.SEQ)}
      title={`${props.FIRST_NAME} ${props.LAST_NAME}`}
      amount={numbro(props.AMOUNT_RAISED).formatCurrency('0,000')}
      href={props.PARTICIPANT_URL}
      image={status === 'fetched' ? avatar : null}
    />
  )
}

export default Item
