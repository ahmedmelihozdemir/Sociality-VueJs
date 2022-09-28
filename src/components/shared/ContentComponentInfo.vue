<template>
    <v-card class="moreInfo">
        <v-card elevation="12" width="200" height="100">
            <v-navigation-drawer floating permanent class="info-drawer">
                <v-list dense rounded class="info-list">
                    <v-list-item
                        class="info-list-item"
                        v-for="item in items"
                        :key="item.title"
                        link
                    >
                        <v-list-item-content class="info-list-item-contents">
                            <v-list-item-title class="info-list-item-content">{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon class="info-list-item-icons">
                            <v-icon class="info-list-item-icon">{{
                                item.icon
                            }}</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

export default class ContentComponentInfo extends Vue {
    items = [
        { title: "Home", icon: "mdi-cog" },
        { title: "About", icon: "mdi-forum" },
    ];
}
</script>

<style lang="scss" scoped>
.moreInfo {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    height: auto;
    width: auto;
    border-radius: 0 10px 0 10px;
    .info-drawer {
        background-color: transparent;

        .info-list {
            background-color: transparent;

            .info-list-item {
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;

                .info-list-item-icons {
                    .info-list-item-icon {
                        font-size: 1.2rem;
                    }
                }
                .info-list-item-contents {
                    .info-list-item-content {
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
}
</style>
