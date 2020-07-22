import React, { Fragment, useEffect, useState } from 'react'
import { readString } from 'react-papaparse'
import { client, csvParams } from '../../lib/api'
import { stringify } from 'qs'
import Head from 'next/head'
import Leaderboard from '../../components/Leaderboard'
import Page from '../../components/Page'

const Events = ({ allEvents, ...props }) => {
  const [events, setEvents] = useState([])
  const [status, setStatus] = useState('fetching')
  useEffect(() => {
    Promise.resolve()
      .then(() => readString(allEvents,
        { header: true }))
      .then(({ data }) => setEvents(data))
      .then(() => setStatus('fetched'))
      .catch(error => {
        console.error(error)
        setStatus('failed')
      })
  }, [])

  return (
    <Fragment>
      <Head>
        <title>ALSAC Heroes Event Leaderboard</title>
      </Head>
      <Page status={status} {...props}>
        {status === 'fetched' && (
          <Leaderboard
            data={events}
            type='event'
            { ...props }
          />
        )}
      </Page>
    </Fragment>
  )
}

Events.getInitialProps = async (ctx) => {
  let teamsResponse = await client({
    url: '/SRContentAPI',
    data: stringify(csvParams('events'))
  })

  let allEvents = await teamsResponse.data.getTagInfoResponse.preview

  return { allEvents }
}

export default Events
