import Navigation from '@showcase/navigation'
import Toast from '@showcase/toast'
import Button from '@showcase/button'
import Header from '@showcase/header'
import Indicator from '@showcase/indicator'
import PullToRefresh from '@showcase/pulltorefresh'
import Searchbar from '@showcase/searchbar'
import MessageBox from '@showcase/messagebox'
import ActionSheet from '@showcase/actionsheet'

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
  path: '/searchbar',
  component: Searchbar
}, {
  path: '/messagebox',
  component: MessageBox
}, {
  path: '/actionsheet',
  component: ActionSheet
}]

export default routes