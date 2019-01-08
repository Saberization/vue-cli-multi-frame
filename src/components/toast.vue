<script>
import 'mint-ui/lib/style.css'
import { Toast } from 'mint-ui'

export default {
  name: 'toast',
  props: {
    message: String,
    iconClass: {
      type: String,
      default: 'icon icon-success'
    },
    position: {
      type: String,
      default: 'middle'
    },
    duration: {
      type: Number,
      default: 3000
    },
    className: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
}
</script>