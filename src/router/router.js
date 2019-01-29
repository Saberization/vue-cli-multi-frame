import Navigation from '@showcase/navigation'
import Toast from '@showcase/toast'
import Button from '@showcase/button'
import Header from '@showcase/header'
import Indicator from '@showcase/indicator'
import PullToRefresh from '@showcase/pulltorefresh'
import Search from '@showcase/search'

const routes = [{
  path: '*',
  redirect: '/navigation'
}, {
  path: '/navigation',
  component: Navigation
}, {
  path: '/toast',
  component: Toast
}, {
  path: '/button',
  component: Button
}, {
  path: '/header',
  component: Header
}, {
  path: '/indicator',
  component: Indicator
}, {
  path: '/pulltorefresh',
  component: PullToRefresh
}, {
  path: '/search',
  component: Search
}]

export default routes