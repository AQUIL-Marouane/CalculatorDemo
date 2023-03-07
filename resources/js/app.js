require('./bootstrap');

import CalculatorComponent from './components/CalculatorComponent.vue'

import { createApp } from 'vue'
const app1 = createApp(CalculatorComponent)
app1.mount('#app')
