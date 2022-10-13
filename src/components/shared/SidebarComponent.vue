<template>
    <div class="sidebar-container">
        <v-card class="sidebar">
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                permanent
                width="200"
                class="sidebar-navigation-drawer"
            >
                <v-list-item class="sidebar-title-list-item px-2 py-2">
                    <v-list-item-avatar @click.stop="mini = !mini">
                        <v-img
                            src="https://randomuser.me/api/portraits/women/31.jpg"
                        ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title class="list-item-title"
                        >Sociality.io</v-list-item-title
                    >
                    <v-btn icon @click.stop="mini = !mini">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        @click="changeShowMenu(item.title)"
                        class="sidebar-list-item"
                    >
                        <v-list-item-icon class="sidebar-list-item-icon">
                            <v-icon class="list-item-icon"
                                >{{ item.icon }}
                            </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content class="sidebar-list-item-content">
                            <v-list-item-title>
                                <router-link
                                    :to="item.title"
                                    class="list-item-link"
                                    >{{ item.title }}</router-link
                                >
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component({
    name: "SidebarComponent",
})
export default class SidebarComponent extends Vue {
    @Prop() showMenu!: boolean;
    drawer = true;
    mini = true;
    items = [
        { title: "facebook", icon: "mdi-facebook" },
        { title: "instagram", icon: "mdi-instagram" },
        { title: "twitter", icon: "mdi-twitter" },
    ];

    changeShowMenu(e: any) {
        this.$emit("changedShowMenu", (this.showMenu = !this.showMenu));
    }
    changeShowMenuHover() {
        this.$emit("changedShowMenuHover", (this.showMenu = true));
    }
    changeShowMenuLeave() {
        this.$emit("changedShowMenuLeave", (this.showMenu = false));
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    height: 100%;
    overflow: auto;
    box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    @media only screen and (max-width: 700px) {
        display: none;
    }
    .sidebar-navigation-drawer {
        .sidebar-title-list-item {
            color: #002e5f;
            font: 700 1.5rem "Roboto", sans-serif;
            

            .list-item-title {
                color: blue;
                font-weight: bold;
            }
        }
        .sidebar-list-item {
            padding: 10px 15px;

            &:hover {
                border-radius: 10px;
            }
            .sidebar-list-item-icon {
                .list-item-icon {
                    color: rebeccapurple;
                    &:hover {
                        transform: scale(1.5);
                        border-radius: 50%;
                    }
                }
            }
            .sidebar-list-item-content {
                &:hover {
                    transform: scale(1.2);
                }

                .list-item-link {
                    font-weight: bolder;
                    color: rebeccapurple;
                    text-decoration: none;
                    text-transform: uppercase;
                    &:hover {
                        font-weight: 600;
                        transform: scale(2);
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
