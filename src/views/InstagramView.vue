<template>
    <main class="content-container">
        <v-card
            class="content"
            min-width="550px"
            max-width="360px"
            cols="12"
            md="6"
            v-for="(i, ifx, idx) in getData"
            :key="idx"
        >
        <v-spacer></v-spacer>
        <v-container fluid class="container-container">
          <v-card-title> {{ i[idx].published_at }} </v-card-title>
          <v-row class="content-row" dense>
                    <v-col
                        class="content-col"
                        v-for="(a, adx) in i"
                        :key="adx"
                        cols="12"
                    >
                        <v-card-actions class="content-upper">
                            <v-spacer class="content-published">
                                {{ i[adx].published_at }}
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
                        </v-card-actions>
                        <div class="content-card">
                            <div
                                class="content-channel"
                                :class="[
                                    i[adx].account.channel == 'facebook'
                                        ? 'channelColor1'
                                        : 'channelColor2',
                                ]"
                            >
                                {{ i[adx].account.channel }}
                            </div>

                            <v-img
                                :src="i[adx].entry.image[0]"
                                @error="$event.target.src = 'errorImage'"
                                class="content-img white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="400px"
                                max-width="470px"
                            >
                                <ContentComponentInfo
                                    v-if="info == true"
                                ></ContentComponentInfo>
                                <v-card-title
                                    class="card-title"
                                    v-text="i[adx].entry.message"
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
                            <v-btn
                                class="btn-icon"
                                icon
                                @click="incrementHeart(adx)"
                            >
                                <v-icon>mdi-heart</v-icon
                                ><span class="btn-icon-counter">{{
                                    counterHeart[adx]
                                }}</span>
                            </v-btn>
                            <v-btn
                                class="btn-icon"
                                icon
                                @click="incrementBookmark(adx)"
                            >
                                <v-icon>mdi-bookmark</v-icon
                                ><span class="btn-icon-counter">{{
                                    counterBookmark[adx]
                                }}</span>
                            </v-btn>
                            <v-btn
                                class="btn-icon"
                                icon
                                @click="incrementShare(adx)"
                            >
                                <v-icon>mdi-share-variant</v-icon
                                ><span class="btn-icon-counter">{{
                                    counterShare[adx]
                                }}</span>
                            </v-btn>
                        </v-card-actions>
                        <v-divider class="my-2"></v-divider>
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
import ContentComponentInfo from "@/components/shared/ContentComponentInfo.vue";
import ContentComponentSecond from "@/components/shared/ContentComponentSecond.vue";

@Component({
    name: "InstagramView",
    components: {
        ContentComponentInfo,
        ContentComponentSecond,
    },
})
export default class InstagramView extends Vue {
    info = false;
    delete = false;

    counterHeart = [0, 0, 0];
    incrementHeart(idx: any) {
        this.counterHeart[idx]++;
        alert(this.counterHeart[idx]);
    }
    counterBookmark = [0, 0, 0];
    incrementBookmark(idx: any) {
        this.counterBookmark[idx]++;
    }
    counterShare = [0, 0, 0];
    incrementShare(idx: any) {
        this.counterShare[idx]++;
    }

    changeInfo() {
        this.info = !this.info;
    }

    getData = datas.posts_by_date;
    errorImage = "nopostimage.png";
    dataFirst = datas.posts_by_date["2021-06-17"];
    dataSecond = datas.posts_by_date["2021-07-01"];

    channelColor1 = false;
    channelColor2 = false;
    channelColor3 = false;

    /* checkColor() {
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
  } */

    mounted() {
        /* this.checkColor(); */
        console.log(this.getData);
    }

    alert() {
        alert("test");
    }
}
</script>

<style lang="scss" scoped>
@import "@/components/shared/ContentComponent.scss";
</style>
