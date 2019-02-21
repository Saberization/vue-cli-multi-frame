import Navigation from '@showcase/navigation'
import Toast from '@showcase/toast'
import Button from '@showcase/button'
import Header from '@showcase/header'
import Indicator from '@showcase/indicator'
import PullToRefresh from '@showcase/pulltorefresh'
import Searchbar from '@showcase/searchbar'
import MessageBox from '@showcase/messagebox'
import ActionSheet from '@showcase/actionsheet'
import Popup from '@showcase/popup'
import Picker from '@showcase/picker'
import Gallery from '@showcase/gallery'
import LazyLoad from '@showcase/lazyload'
import Range from '@showcase/range'
import Progress from '@showcase/progress'
import Datepicker from '@showcase/datepicker'
import Indexlist from '@showcase/indexlist'
import PaletteButton from '@showcase/palettebutton'
import TabContainer from '@showcase/tabcontainer'
import Cell from '@showcase/cell'
import CellSwipe from '@showcase/cellswipe'

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
}, {
  path: '/popup',
  component: Popup
}, {
  path: '/picker',
  component: Picker
}, {
  path: '/gallery',
  component: Gallery
}, {
  path: '/lazyload',
  component: LazyLoad
}, {
  path: '/range',
  component: Range
}, {
  path: '/progress',
  component: Progress
}, {
  path: '/datepicker',
  component: Datepicker
}, {
  path: '/indexlist',
  component: Indexlist
}, {
  path: '/palettebutton',
  component: PaletteButton
}, {
  path: '/tabcontainer',
  component: TabContainer
}, {
  path: '/cell',
  component: Cell
}, {
  path: '/cellswipe',
  component: CellSwipe
}];

export default routes
