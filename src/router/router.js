import Navigation from '@showcase/navigation'
import Toast from '@showcase/toast'

const routes = [{
  path: '/navigation',
  component: Navigation
}, {
  path: '/toast',
  component: Toast
}, {
  path: '*',
  redirect: '/navigation'
}]

export default routes