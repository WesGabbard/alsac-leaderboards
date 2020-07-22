import React, { useEffect, useState } from 'react'
import numbro from 'numbro'
import get from 'lodash/get'
import { client, defaultParams } from '../../../lib/api'
import { stringify } from 'qs'
import LeaderboardItem from 'constructicon/leaderboard-item'

const Item = ({ type = 'personal' , token, ...props }) => {
  const [avatar, setAvatar] = useState(null)
  const [status, setStatus] = useState('fetching')
  const deserializeItem = {
    title: type === 'event' ? props.EVENT_NAME : (type === 'team' ? props.TEAM_NAME : props.FIRST_NAME + ' ' + props.LAST_NAME),
    href: type === 'event' ? props.EVENT_URL : (type === 'team' ? props.TEAM_URL : props.PARTICIPANT_URL),
  }

  useEffect(() => {
    const data = {
      method: type === 'team' ? 'getTeamPhoto' : 'getPersonalPhotos',
      fr_id: props.FR_ID,
      cons_id: type === 'team' ? props.CAPTAIN_CONS_ID : props.CONS_ID,
      token,
      ...defaultParams
    }
    Promise.resolve()
      .then(() => type !== 'event' && client({ url: 'CRTeamraiserAPI', data: stringify(data) }))
      .then(({ data }) => {
        const url = type === 'team' ? get(data, 'getTeamPhotoResponse.photoItem.customUrl') : get(data, 'getPersonalPhotosResponse.photoItem[0].customUrl')
        setAvatar(url && `${process.env.BASE_URL}/${url.split('../')[1]}`)
      })
      .then(() => setStatus('fetched'))
      .catch(() => setStatus('failed'))
  },[])
  return (
    <LeaderboardItem
      rank={Number(props.SEQ)}
      amount={numbro(props.AMOUNT_RAISED).formatCurrency('0,000')}
      image={status === 'fetched' ? avatar : null}
      {...deserializeItem}
    />
  )
}

export default Item
