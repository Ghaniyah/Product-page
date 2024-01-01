import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
return{
    menu :[
   {
    product:Pizza,
    image:'./Assets/product image/pizza-1.png',
    inStock: false,
    onSale: 25,
    details:['price: 30', 'calories:800 kcal', 'fats:50 g' ],
    variants:[
      {id:1, color: "peach", image:'./Assets/product image/pizza-1.png'},
      {id:2, color: "green", image:'./Assets/product image/pizza-2.png'},
    ],
    sizes:['small', 'medium', 'large'],
    
   },
]
}

app.use(router)

app.mount('#app')
