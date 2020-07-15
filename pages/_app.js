import React from 'react'
import App from 'next/app'
import getConfig from 'next/config'
import TraitsProvider from 'constructicon/traits-provider'
import * as projectTraits from '../lib/traits'
import 'minimal.css'

const { publicRuntimeConfig } = getConfig()

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const { query } = router
    const { primary } = query
    const traits =  primary
      ? {
          ...projectTraits,
          colors: {
            primary: `#${primary}`
          }
        }
      : { ...projectTraits }
    return (
      <div>
        <TraitsProvider traits={traits}>
          <Component {...pageProps} {...publicRuntimeConfig} {...query} />
        </TraitsProvider>
      </div>
    )

  }
}

export default MyApp
