import React, { Fragment, useEffect, useState } from 'react'
import { readString } from 'react-papaparse'
import { client, defaultParams } from '../../lib/api'
import { stringify } from 'qs'
import Head from 'next/head'
import Container from 'constructicon/container'
import Leaderboard from '../../components/Leaderboard'
import Loading from 'constructicon/loading'
import Section from 'constructicon/section'

const Fundraisers = ({ fundraisers, ...props }) => {
  const [individuals, setIndividuals] = useState([])
  const [status, setStatus] = useState('fetching')

  useEffect(() => {
    Promise.resolve()
      .then(() => readString(fundraisers,
        { header: true }))
      .then(({ data }) => setIndividuals(data))
      .then(() => setStatus('fetched'))
      .catch(() => setStatus('failed'))
  }, [])

  return (
    <Fragment>
      <Head>
        <title>ALSAC Heroes Fundraiser Leaderboard</title>
      </Head>
      <Container width={28}>
        {status === 'fetched' ? (
          <Leaderboard data={individuals} title='Fundraiser Leaderbooard' { ...props } />
        ) : (
          <Section spacing={2} styles={{ textAlign: 'center' }}>
            <Loading />
          </Section>
        )}
      </Container>
    </Fragment>
  )
}

Fundraisers.getInitialProps = async (ctx) => {
  const loginParams = {
    method: 'login',
    user_name: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    login_name: process.env.ADMIN_USERNAME,
    login_password: process.env.ADMIN_PASSWORD,
    ...defaultParams
  }

  const fundraiserRequestData = {
    method: 'getTagInfo',
    content: '[[S84:leaderboards/heroes/stj.participants_leaderboard.csv]]',
    login_name: process.env.ADMIN_USERNAME,
    login_password: process.env.ADMIN_PASSWORD,
    ...defaultParams
  }

  let login = await client({
    url: '/SRConsAPI',
    data: stringify(loginParams)
  })

  let token = await login.data.loginResponse.token

  let fundraisersResponse = await client({
    url: '/SRContentAPI',
    data: stringify(fundraiserRequestData)
  })

  let fundraisers = await fundraisersResponse.data.getTagInfoResponse.preview

  return { fundraisers, token }
}

export default Fundraisers
