import React from 'react';
import { NextPage } from 'next';

import Head from 'next/head'
import Layout from '../../components/layout/Layout'

export default function Service() {
  return (
    <Layout>
      <Head>
        <title>Roofers Near Me | 52Roofer</title>
        <meta name="description" content="Professional roofers near me services" />
      </Head>
      <main>
        <h1>Roofers Near Me</h1>
      </main>
    </Layout>
  )
}