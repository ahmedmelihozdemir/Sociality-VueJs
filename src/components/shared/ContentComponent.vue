<template>
    <div class="content-container">
        <!-- <v-card class="content">
            <v-spacer></v-spacer>
            <v-container fluid>
                <v-row class="content-row" dense>
                    <v-col
                        v-for="card in cards"
                        :key="card.title"
                        :cols="card.flex"
                    >
                        <v-img
                            :src="card.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="card.title"></v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-spacer>{{ getData.channel }}</v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card> -->

        <v-card class="content">
            <v-spacer></v-spacer>
            <v-container fluid>
                <v-row class="content-row" dense>
                    <v-col
                        class="content-col"
                        v-for="(i, idx) in getData['2021-06-17']"
                        :key="idx"
                        cols="12"
                        md="12"
                    >
                        <div class="content-card">
                            <div
                                class="content-channel"
                                :class="[
                                    i.account.channel == 'facebook'
                                        ? 'channelColor1'
                                        : 'channelColor2',
                                ]"
                            >
                                {{ i.account.channel }}
                            </div>
                            <v-img
                                :src="i.entry.image"
                                class="content-img white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                max-height="200px"
                                max-width="380px"
                            >
                                <v-card-title
                                    v-text="i.entry.message"
                                ></v-card-title>
                            </v-img>
                        </div>
                        <v-card-actions class="card-action">
                            <v-spacer>
                                <a :href="i.link" class="spacer-link card-spacer" data-text="Go Link">
                                    <a :href="i.link" class="spana">Go Link</a>
                                </a>
                            </v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-divider class="my-2"></v-divider>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <button class="spacer-link" data-text="Go Link">
            <a href="i.link" class="spana">Go Link</a>
        </button>
        <div>{{ getData["2021-06-17"][0].entry.image }}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import datas from "@/data.json";

@Component({
    name: "ContentComponent",
    components: {},
})
export default class ContentComponent extends Vue {
    cards = [
        {
            title: "Pre-fab homes",
            src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
            flex: 12,
        },
        {
            title: "Favorite road trips",
            src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            flex: 12,
        },
        {
            title: "Best airlines",
            src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
            flex: 12,
        },
    ];

    getData = datas.posts_by_date;
    dataFirst = datas.posts_by_date["2021-06-17"];
    dataSecond = datas.posts_by_date["2021-07-01"];

    channelColor1 = false;
    channelColor2 = false;
    channelColor3 = false;
    checkColor() {
        if (
            this.dataFirst.account.channel &&
            this.dataSecond.account.channel == "facebook"
        ) {
            this.channelColor1 = true;
        } else if (this.dataFirst.account.channel == "instagrambusiness") {
            this.channelColor2 = true;
        } else if (this.dataFirst.account.channel == "twitter") {
            this.channelColor3 = true;
        }
    }

    mounted() {
        this.checkColor();
        console.log(this.getData);
        console.log(this.getData[20210617][1].entry.image);
    }
}
</script>

<style lang="scss" scoped>
@import "@/components/shared/ContentComponent.scss";


/* $channelColor1: rgba(229, 158, 27, 0.822);
$channelColor2: rgba(91, 229, 27, 0.822);
$channelColor3: rgba(145, 36, 217, 0.822);
.channelColor1 {
    background-color: $channelColor1;
}
.channelColor2 {
    background-color: $channelColor2;
}
.channelColor3 {
    background-color: $channelColor3;
}

.content-container {
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content {
        background-color: transparent;
        display: flex;
        width: 100%;
        height: 100%;

        .content-row {
            .content-col {
                .content-card {
                    display: flex;
                    flex-direction: row;
                    .content-channel {
                        font-size: 0.8rem;
                        color: #fff;
                        text-align: left;
                        padding: 0.5rem;
                        color: rgb(142, 11, 54);
                        margin: 0 0.5rem;
                        width: 30px;
                        height: 200px;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        writing-mode: tb-rl;
                        text-orientation: upright;
                    }
                    .content-img {
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                    }
                }
                .card-action {
                    .card-spacer {
                        display: block;
                        border: 1px solid #ccc;
                        padding: 0.2rem;
                        border-radius: 5px;
                        width: 100px;
                        font-weight: bolder;
                        text-align: center;
                        text-overflow: ellipsis;
                        text-decoration: none;
                        color: rebeccapurple;
                    }
                    .btn-icon {
                        color: rebeccapurple;
                    }
                }
            }
        }
    }
}
.btn-icon {
    &:hover {
        background-color: rgba(235, 26, 26, 0.228);
    }
}

.spacer-link {
    position: relative;
    display: inline-block;
    border: none;
    outline: none;
    background: none;
    font: inherit;
    color: rgb(196, 13, 13);
    cursor: pointer;
    overflow: hidden;
}
.spacer-link::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backgorund-image: linear-gradient(144deg, #af40ff, #5b42f3, 50%, #00ddeb);
    color: #fff;
    display: grid;
    place-items: center;
    transform: translateX(-105%);
    transition: transform 0.25s;
}
.spacer-link:hover::before {
    transform: none;
}
.spana {
    display: inline-block;
    padding: 10px 20px;
    border: 2px solid #5b42f3;
    border-radius: 5px;
    transition: transform 0.25s;
}
.spacer-link:hover .spana {
    transform: translateX(105%);
} */
</style>
