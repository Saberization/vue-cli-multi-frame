import { CellSwipe } from "mint-ui";

export default {
    name: "CellSwipe",
    components: {
      "mt-cell-swipe": CellSwipe
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        to: {
            type: String,
            default: ''
        },
        value: {
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        isLink: {
            type: Boolean,
            default: true
        },
        left: {
            type: Array,
            default: function () {
                return [];
            }
        },
        right: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    render(createElement) {
        return createElement(
            "mt-cell-swipe",
            {
                props: {
                    title: this.title,
                    icon: this.icon,
                    value: this.value,
                    label: this.label,
                    isLink: this.isLink,
                    left: this.left,
                    right: this.right,
                    to: this.to === '' ? null : this.to
                }
            },
            [
                this.$slots.default,
                createElement('slot', {
                    slot: "icon"
                }, this.$slots.icon)
            ]
        )
    }
}
