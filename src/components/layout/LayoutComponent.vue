<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <!-- <FooterComponent></FooterComponent> -->
    </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import HeaderComponent from "@/components/layout/HeaderComponent.vue"; 
import FooterComponent from "@/components/layout/FooterComponent.vue";

@Component({
    components: {
        HeaderComponent,
        FooterComponent,
    }
})
export default class LayoutComponent extends Vue {
    
}


</script>

<style lang="scss" scoped></style>
