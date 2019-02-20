<template>
    <mt-popup
        :position="position"
        :pop-transition="popTransition"
        :modal="modal"
        :closeOnClickModal="closeOnClickModal"
        v-model="popupVisible"
    >
        <slot></slot>
    </mt-popup>
</template>

<script>
    import { Popup } from "mint-ui";

    export default {
        name: "Popup",
        components: {
            "mt-popup": Popup
        },
        props: {
            position: {
                type: String,
                default: ""
            },
            popTransition: {
                type: String,
                default: "popup-fade"
            },
            modal: {
                type: Boolean,
                default: true
            },
            closeOnClickModal: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                popupVisible: false
            }
        },
        methods: {
            show () {
                this.popupVisible = true;
            },

            hide () {
                this.popupVisible = false;
            },

            toggle () {
                this.popupVisible = !this.popupVisible;
            }
        },
        watch: {
            popupVisible (newValue) {
                if (newValue) {
                    document.getElementsByTagName('body')[0].addEventListener('touchmove', e => {
                        e.preventDefault();
                    }, {
                        passive: false
                    });
                } else {
                    document.getElementsByTagName('body')[0].addEventListener('touchmove', e => {
                        e.returnValue = true;
                    }, {
                        passive: false
                    });
                }
            }
        },
    };
</script>

<style lang="scss">
    .mint-popup-bottom {
        width: 100%;
    }
</style>
