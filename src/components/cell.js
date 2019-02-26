import { Cell } from "mint-ui";

export default {
    name: 'Cell',
    components: {
        "mt-cell": Cell
    },
    props: {
        title: String,
        value: String,
        label: String,
        to: String,
        icon: String,
        isLink: {
            type: Boolean,
            default: true
        }
    },
    render(createElement) {
        return createElement(
            "mt-cell",
            {
                props: {
                    title: this.title,
                    value: this.value,
                    label: this.label,
                    to: this.to === "" ? null : this.to,
                    icon: this.icon,
                    isLink: this.isLink
                }
            },
            [
                this.$slots.default,
                createElement("slot", {
                    slot: 'icon'
                }, this.$slots.icon)
            ]
        );
    }
}

