<template>
    <h1>Вакансии</h1>
    <input type="text" class="search" placeholder="Поиск" v-model="search">

<div v-for="vacancy in filteredVacancies" :key="vacancy.id">

    <a :href="`https://novosibirsk.hh.ru/vacancy/${vacancy.id}?from=applicant_recommended&hhtmFrom=main`">

    <div class="vac-card">
        <div class="vac-info">
            <div class="vac-head">
                <p class="font36">{{ vacancy.name }}</p>
                <div class="vac-price">
                    <p v-if="vacancy.salary && vacancy.salary_range && vacancy.salary_range.mode" class="font36">{{ vacancy.salary.from }} – {{vacancy.salary.to }} ₽ {{ vacancy.salary_range.mode.name }}, на руки</p>
                    <div class="vac-but">
                        <p class="font20">Опыт {{ vacancy.experience.name }}</p>
                    </div>
                    <div class="vac-but" v-if="vacancy.salary_range && vacancy.salary_range.frequency" >
                        <p class="font20">Выплаты: {{ vacancy.salary_range.frequency.name }}</p>
                    </div>
                </div>
            </div>
            <div class="vac-company">
                <p v-if="vacancy.employer" class="font24">{{ vacancy.employer.name }}</p>
                <div class="vac-star" v-if="vacancy.employer.employer_rating">
                    <img src="@/assets/star.svg" alt="">
                    <p  class="font20">{{ vacancy.employer.employer_rating.total_rating }} • {{ vacancy.employer.employer_rating.reviews_count }} отзывов</p>
                </div>
            </div>
            <p v-if="vacancy.address" class="font22">{{ vacancy.address.raw }}</p>
        </div>
        <div class="vac-buttons">
            <div class="vac-button blue1">Откликнуться</div>
            <div class="vac-button light-blue">Контакты</div>
        </div>
    </div>
</a>
</div>
    <router-link class="link" to="/">Слайдер с картинками</router-link>
    <router-link class="link" to="/calculator">Калькулятор вкладов</router-link>
</template>

<style>

.font36 {
    font-size: 36px;
}

.font24 {
    font-size: 24px;
}

.font22 {
    font-size: 22px;
}

.font20 {
    font-size: 20px;
}

.vac-card {
    display: flex;
    flex-direction: column;
    gap: 60px;

    padding: 40px;
    border-radius: 20px;
    border: 1px solid #5E5E5E;

    max-width: 1200px;
    width: 100%;
}

.vac-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.vac-head {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.vac-price {
    display: flex;
    gap: 40px;
    align-items: center;

}

.vac-but {
    padding: 10px;
    border-radius: 10px;
    background-color: #D9D9D9;
}

.vac-company {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.vac-star {
    display: flex;
    gap: 10px;
    align-items: center;
}

.vac-buttons {
    display: flex;
    gap: 20px;
}

.vac-button {
    padding-inline: 30px;
    padding-top: 20px;
    padding-bottom: 20px;

    border-radius: 20px;
}

.blue1 {
    background-color: #0274FF;
    color: white;
}

.light-blue {
    background-color: #AAD2FF;
    color: #0274FF;
}

.search {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #5E5E5E;
    width: 100%;
    max-width: 600px;
    font-size: 24px;
}


</style>



<script>
import axios from 'axios';
export default {
    data() {
        return {
            vacancies: [],
            search: ''
        }
    },
    mounted() {
        axios.get('https://api.hh.ru/vacancies')
            .then(response => {
                this.vacancies = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    computed: {
        filteredVacancies() {
            if (this.search) {
                return this.vacancies.items.filter(vacancy =>
                    vacancy.name.toLowerCase().includes(this.search.toLowerCase())
                );
            } else {
                return this.vacancies.items;
            }
        },

    },
}



</script>