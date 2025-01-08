'use client';

// import React, { Suspense } from 'react'
// import Server from './server'
import Client from './client'

import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1,
      // gcTime: 1000 * 60 * 1,
      // refetchOnWindowFocus: true,
    },
  },
})

const persister = createSyncStoragePersister({
  storage: typeof window !== 'undefined' ? window.localStorage : null,
})



function page() {
  return (
    <div>
      {/* <Suspense fallback="...">
        <Server />
      </Suspense> */}
      {/* <Server /> */}

      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <Client />
      </PersistQueryClientProvider>,
    </div>
  )
}

export default page