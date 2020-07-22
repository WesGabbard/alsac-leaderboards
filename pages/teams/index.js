import React, { Fragment, useEffect, useState } from 'react'
import { readString } from 'react-papaparse'
import { client, loginParams, csvParams } from '../../lib/api'
import { stringify } from 'qs'
import Head from 'next/head'
import Leaderboard from '../../components/Leaderboard'
import Page from '../../components/Page'


const Teams = ({ allTeams, ...props }) => {
  const [teams, setTeams] = useState([])
  const [status, setStatus] = useState('fetching')
  useEffect(() => {
    Promise.resolve()
      .then(() => readString(allTeams,
        { header: true }))
      .then(({ data }) => setTeams(data))
      .then(() => setStatus('fetched'))
      .catch(error => {
        console.error(error)
        setStatus('failed')
      })
  }, [])

  return (
    <Fragment>
      <Head>
        <title>ALSAC Heroes Team Leaderboard</title>
      </Head>
      <Page status={status} {...props}>
        {status === 'fetched' && (
          <Leaderboard
            data={teams}
            type='team'
            { ...props }
          />
        )}
      </Page>
    </Fragment>
  )
}

Teams.getInitialProps = async (ctx) => {
  let login = await client({
    url: '/SRConsAPI',
    data: stringify(loginParams())
  })

  let token = await login.data.loginResponse.token

  let teamsResponse = await client({
    url: '/SRContentAPI',
    data: stringify(csvParams('teams'))
  })

  let allTeams = await teamsResponse.data.getTagInfoResponse.preview

  return { allTeams, token }
}

export default Teams
