<template>
    <main class="content-container">
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

        <v-card
            class="content"
            min-width="550px"
            max-width="360px"
            cols="12"
            md="6"
        >
            <v-spacer></v-spacer>
            <v-container fluid class="container-container">
                <v-row class="content-row" dense>
                    <v-col
                        class="content-col"
                        v-for="(i, idx) in getData['2021-06-17']"
                        :key="idx"
                        cols="12"
                        md="12"
                        sm="12"
                    >
                        <v-card-actions class="content-upper">
                            <v-spacer class="content-published">
                                {{ i.published_at }}
                            </v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-cancel</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon @click="changeInfo">
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                            <!-- <ContentComponentInfo
                                :moreInfo="info"
                            ></ContentComponentInfo> -->
                        </v-card-actions>
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
                                :src="i.entry.image[0]"  @error="$event.target.src='errorImage'"
                                class="content-img white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="400px"
                                max-width="470px"
                            >
                                <ContentComponentInfo
                                    :moreInfo="info"
                                ></ContentComponentInfo>

                                <v-card-title
                                    class="card-title"
                                    v-text="i.entry.message"
                                ></v-card-title>
                            </v-img>
                        </div>
                        <v-card-actions class="card-action">
                            <v-spacer>
                                <a
                                    :href="i.link"
                                    class="spacer-link card-spacer"
                                    data-text="Go link"
                                >
                                    <a :href="i.link" class="spana"
                                        >Come here!</a
                                    >
                                </a>
                            </v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-heart</v-icon
                                ><span class="btn-icon-counter">0</span>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-bookmark</v-icon
                                ><span class="btn-icon-counter">0</span>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-share-variant</v-icon
                                ><span class="btn-icon-counter">0</span>
                            </v-btn>
                        </v-card-actions>
                        <v-divider class="my-2"></v-divider>
                    </v-col>
                </v-row>

                <v-row class="content-row" dense>
                    <v-col
                        class="content-col"
                        v-for="(i, inf,idx) in getData['2021-07-01']"
                        :key="idx"
                        cols="12"
                        md="12"
                        sm="12"
                    >
                        <v-card-actions class="content-upper">
                            <v-spacer class="content-published">
                                {{ i.published_at }}
                            </v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-cancel</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon @click="info = !info">
                                <v-icon>mdi-dots-horizontal</v-icon>
                                {{ info }}
                            </v-btn>
                        </v-card-actions>
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
                                :src="i.entry.image[0]"
                                class="content-img white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="400px"
                                max-width="470px"
                            >
                                <v-card-title
                                    class="card-title"
                                    v-text="i.entry.message"
                                ></v-card-title>
                            </v-img>
                        </div>
                        <v-card-actions class="card-action">
                            <v-spacer>
                                <a
                                    :href="i.link"
                                    class="spacer-link card-spacer"
                                    data-text="Go link"
                                >
                                    <a :href="i.link" class="spana"
                                        >Come here!</a
                                    >
                                </a>
                            </v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-heart</v-icon
                                ><span class="btn-icon-counter">0</span>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-bookmark</v-icon
                                ><span class="btn-icon-counter">0</span>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-share-variant</v-icon
                                ><span class="btn-icon-counter">0</span>
                            </v-btn>
                        </v-card-actions>
                        <v-divider class="my-2"></v-divider>
                        <div>{{i.entry.images}}</div>
                    </v-col>
                </v-row>


            </v-container>
        </v-card>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import datas from "@/data.json";
import ContentComponentInfo from "./ContentComponentInfo.vue";
import ContentComponentSecond from "./ContentComponentSecond.vue";

@Component({
    name: "ContentComponent",
    components: {
        ContentComponentInfo,
        ContentComponentSecond,
    },
})
export default class ContentComponent extends Vue {
    info = false;
    delete = false;
    like = false;
    save = false;
    share = false;

    changeInfo() {
        this.info = !this.info;
    }

    getData = datas.posts_by_date;
    errorImage = 'nopostimage.png';
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

    alert() {
        alert("test");
    }
}
</script>

<style lang="scss" scoped>
@import "@/components/shared/ContentComponent.scss";
</style>
