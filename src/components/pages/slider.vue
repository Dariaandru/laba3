<template>
        <div class="news">
            <div class="news--title">
                <p class="font24">Новинки</p>
                <a href=""><p class="white font20">смотреть все</p></a>
            </div>
            <Carousel class="carousel" :breakpoints="breakpoints" wrap-around="true">

            <Slide v-for="card in cards" :key="card.id">
                <div class="news--cards--card">
                    <a href="">
                        <div class="news--cards--card--img">
                            <img :src="card.img" alt="">
                            <div  class="news--cards--card--img--circle"><p>-{{card.discount}}%</p></div>
                        </div>
                    </a>
                        <a href=""><p class="font24 blue">{{ card.name }}</p></a>
                        <div class="news--cards--card--price_rate">
                            <div class="news--cards--card--price_rate--price">
                                <p class="font14 blue"><strike>{{ card.price_strike }} руб.</strike></p>
                                <p class="font24">{{ card.price }} руб.</p>
                            </div>
                            <div class="news--cards--card--price_rate--rate">
                                <img :src="card.rate_img" alt="">
                                <p class="font20">{{ card.rate }}</p>
                            </div>
                        </div>
                        <div class="news--cards--card--size_button">
                            <div class="news--cards--card--size_button--size">
                                <img src="@/assets//img/size.svg" alt="">
                                <div class="news--cards--card--size_button--size--value">
                                    <p class="font20">{{ card.size }}</p>
                                    <img src="@/assets/img/arrow.svg" alt="">
                                </div>
                            </div>
                            <a href="#">
                                <div class="news--cards--card--size_button--button">
                                    <p>В корзину</p>
                                </div>
                            </a>
                        </div>
                    </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
            </Carousel>


        </div>
        <router-link class="link" to="/vacancies">Вакансии hh.ru API</router-link>
        <router-link class="link" to="/calculator">Калькулятор вкладов</router-link>

</template>

<style>

.link {
    padding: 15px;
    background-color:black;
    color: white;
    font-size: 22px;
    border-radius: 10px;
    text-align: center;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
}

.carousel {
    padding-inline: 50px;
    max-width: 1400px;
    width: 100%;
    min-width: 330px;


}

@media screen and (max-width: 1500px) {
    .carousel {
        padding-inline: 0px;
        max-width: calc(100vw - 40px);

    }

    /* .link {
        width: calc(100vw - 40px);
    } */
    
}


</style>

<script>

import {Carousel, Slide, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import cards from "@/seeders/cards.js"
export default {
    name: "slider",
    components: {
        Carousel,
        Slide,
        Navigation
    },
    data() {
        return {
            cards: cards,
            breakpoints: {

                300: {
                    itemsToShow: 1,
                    
                    spacing: 10,

                },
                // 700px and up
                900: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                    spacing: 10,

                },
                // 1024 and up
                1230: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                    spacing: 10,
                },
            },
        }
    },
}

</script>