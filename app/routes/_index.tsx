import { ClientOnly } from 'remix-utils/client-only'
import { LiFiWidget } from '~/components/lifiWidget'

export default function Index() {
  return <ClientOnly fallback={<div>Loading...</div>}>{() => <LiFiWidget />}</ClientOnly>
}