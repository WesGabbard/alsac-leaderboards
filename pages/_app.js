import React from 'react'
import App from 'next/app'
import getConfig from 'next/config'
import TraitsProvider from 'constructicon/traits-provider'
import * as traits from '../lib/traits'
import 'minimal.css'

const { publicRuntimeConfig } = getConfig()

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <TraitsProvider traits={traits}>
        <Component {...pageProps} {...publicRuntimeConfig} router={router} />
      </TraitsProvider>
    )
  }
}

export default MyApp
