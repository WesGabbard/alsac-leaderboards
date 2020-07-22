import React, { useEffect, useState } from 'react'
import get from 'lodash/get'
import { client, defaultParams, deserializeLeaderboardItem } from '../../../lib/api'
import { stringify } from 'qs'
import LeaderboardItem from 'constructicon/leaderboard-item'

const Item = ({
  type = 'personal',
  token,
  ...props
}) => {
  const [avatar, setAvatar] = useState(null)
  const [status, setStatus] = useState('fetching')

  useEffect(() => {
    const params = {
      method: type === 'team' ? 'getTeamPhoto' : 'getPersonalPhotos',
      fr_id: props.FR_ID,
      cons_id: type === 'team' ? props.CAPTAIN_CONS_ID : props.CONS_ID,
      token,
      ...defaultParams
    }

    Promise.resolve()
      .then(() => type !== 'event' &&
        client({
          url: 'CRTeamraiserAPI',
          data: stringify(params)
        })
      )
      .then(({ data }) => {
        const url = type === 'team' ?
          get(data, 'getTeamPhotoResponse.photoItem.customUrl')
        :
          get(data, 'getPersonalPhotosResponse.photoItem[0].customUrl')

        setAvatar(url && `${process.env.BASE_URL}/${url.split('../')[1]}`)
      })
      .then(() => setStatus('fetched'))
      .catch(() => setStatus('failed'))
  },[props])

  return (
    <LeaderboardItem
      image={status === 'fetched' ? avatar : null}
      {...deserializeLeaderboardItem(props, type)}
    />
  )
}

export default Item
