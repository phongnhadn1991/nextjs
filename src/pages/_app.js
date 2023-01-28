import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import { client } from '../../lib/apollo'
import Router from 'next/router'
import { useState } from 'react';
import Loading from '@/components/loading';
export default function App({ Component, pageProps }) {

  const [loading, SetLoading] = useState(false)

  Router.events.on('routeChangeStart', (url) => {
    SetLoading(true)
  })

  Router.events.on('routeChangeComplete', (url) => {
    SetLoading(false)
  })

  return (
    <>
      {loading && <Loading />}
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
