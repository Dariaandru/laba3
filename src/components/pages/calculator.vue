<template>
    <div class="calculator">
        <div class="calc-buttons">
            <div class="calc-fields">
                <p>Вид вклада</p>
                <select  placeholder="Вид вклада" v-model="type" >
                    <option value="Пополняемый">Пополняемый</option>
                    <option value="Срочный">Срочный</option>
                </select>
                <p>Срок вклада</p>
                <select type="number"  placeholder="Срок вклада" v-model="duration" >
                    <option v-if="type=='Срочный'" value="3">3 месяца</option>
                    <option value="6">6 месяцев</option>
                    <option v-if="type=='Срочный'" value="9">9 месяцев</option>
                    <option value="12">1 год</option>
                    <option value="18">1.5 года</option>
                    <option value="24">2 года</option>
                </select>
                <input type="number" placeholder="Сумма вклада" v-model="sum" >

            </div>
            <button @click="ShowResults" class="calc-button">Рассчитать</button>
        </div>
        <div  class="calc-result">
            <div v-if="isShow" class="show-res">
                <p>Вклад "{{ type }}" на срок "{{ res_percent[0].word }}" на сумму {{ sum }} руб.</p>
                <p>В конце срока вы получите {{ result }} руб.</p>
            </div>
        </div>
    </div>

    <router-link class="link" to="/">Слайдер с картинками</router-link>
    <router-link class="link" to="/vacancies">Вакансии hh.ru API</router-link>
</template>


<style>

.calculator {
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    gap: 50px;
    max-width: 900px;
    

}

.calc-buttons {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.calc-fields {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.calc-button {
    padding: 15px;
    background-color: black;
    color: white;
    font-size: 22px;
    border-radius: 10px;
}

.calc-result {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
    border: 1px solid black;
    width: 200px;
    height: 300px;
    padding: 20px;
}

</style>

<script>



export default {
    data() {
        return {
            isShow: false,
            result: '',
            type: '',
            duration: '',
            sum: '',
            res_percent : [],
            percent_item: [],
            percent: [
                {
                    name: 'Пополняемый',
                    percents: [
                        {
                            duration: 6,
                            word: '6 месяцев',
                            percents: 20
                        },
                        {
                            duration: 12,
                            word: '1 год',

                            percents: 22
                        },
                        {
                            duration: 18,
                            word: '1.5 года',
                            percents: 15
                        },
                        {
                            duration: 24,
                            word: '2 года',
                            percents: 10
                        },
                    ]
                },
                {
                    name: 'Срочный',
                    percents: [
                        {
                            duration: 3,
                            word: '3 месяца',
                            percents: 20
                        },
                        {
                            duration: 6,
                            word: '6 месяцев',
                            percents: 22
                        },
                        {
                            duration: 9, 
                            word: '9 месяцев',
                            percents: 23
                        },
                        {
                            duration: 12, 
                            word: '1 год',
                            percents: 24
                        },
                        {
                            duration: 18, 
                            word: '1.5 года',
                            percents: 18
                        },
                        {
                            duration: 24, 
                            word: '2 года',
                            percents: 15
                        },
                    ] 
                }
            ]
        }
    },
    methods: {
        ShowResults() {
            if (this.type == '') {
                alert('Выберите тип вклада')
            } else if (this.duration == '') {
                alert('Выберите срок вклада')
            } else if (this.sum == '') {
                alert('Введите сумму вклада')
            } else {
            this.isShow = true
            console.log(this.type)
            console.log(this.duration)
            console.log(this.sum)
            if (this.type == 'Пополняемый') {
                this.percent_item = this.percent[0].percents
            } else {
                this.percent_item = this.percent[1].percents
            }
            this.res_percent = this.percent_item.filter(item => item.duration == this.duration)
            this.result = (this.res_percent[0].percents * this.sum / 100/ 12 * this.duration) + this.sum

        }
        }
    }
}


</script>