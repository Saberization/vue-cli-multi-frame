<template>
    <mt-index-list>
        <mt-index-section v-for="(v, i) in listdata" :key="i" :index="v.tag">
            <mt-cell v-for="(_v, _i) in v.children" :key="_i" :title="_v.text" :data-tag="v.tag"
                     :data-attribute="JSON.stringify(_v.attribute)" @click.native="itemClick($event)"></mt-cell>
        </mt-index-section>
    </mt-index-list>
</template>

<script>
    import { IndexList, IndexSection } from "mint-ui";
    import Cell from "@components/cell";

    export default {
        name: "indexlist",
        components: {
            "mt-index-list": IndexList,
            "mt-index-section": IndexSection,
            "mt-cell": Cell
        },
        props: {
            listdata: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        methods: {
            itemClick (e) {
                const cell = e.target.parentElement;

                this.$emit('click', {
                    tag: cell.dataset.tag,
                    text: cell.innerText,
                    attribute: JSON.parse(cell.dataset.attribute),
                    el: cell
                });
            }
        }
    };
</script>
