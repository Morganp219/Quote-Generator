import express from 'express';
import cors from "cors"

interface Quote {
     message: string 
     author: string
     title: string | undefined
}

let items: Quote[] = [
     {
          message: "The only limit to our realization of tomorrow is our doubts of today.",
          author: "Franklin D. Roosevelt",
          title: undefined
     },
     {
          message: "In the middle of difficulty lies opportunity.",
          author: "Albert Einstein",
          title: undefined
     },
     {
          message: "Life is what happens when you're busy making other plans.",
          author: "John Lennon",
          title: undefined
     },
     {
          message: "Do not watch the clock. Do what it does. Keep going.",
          author: "Sam Levenson",
          title: undefined
     },
     {
          message: "The future belongs to those who believe in the beauty of their dreams.",
          author: "Eleanor Roosevelt",
          title: undefined
     },
     {
          message: "You miss 100% of the shots you don't take.",
          author: "Wayne Gretzky",
          title: undefined
     },
     {
          message: "Whether you think you can or you think you can't, you're right.",
          author: "Henry Ford",
          title: undefined
     },
     {
          message: "Act as if what you do makes a difference. It does.",
          author: "William James",
          title: undefined
     },
     {
          message: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          author: "Winston Churchill",
          title: undefined
     },
     {
          message: "Never bend your head. Always hold it high.",
          author: "Helen Keller",
          title: undefined
     },
     {
          message: "What we think, we become.",
          author: "Buddha",
          title: undefined
     },
     {
          message: "Strive not to be a success, but rather to be of value.",
          author: "Albert Einstein",
          title: "Advice"
     },
     {
          message: "The best time to plant a tree was 20 years ago. The second best time is now.",
          author: "Chinese Proverb",
          title: undefined
     },
     {
          message: "An unexamined life is not worth living.",
          author: "Socrates",
          title: undefined
     },
     {
          message: "Your time is limited, so don't waste it living someone else's life.",
          author: "Steve Jobs",
          title: undefined
     },
     {
          message: "The purpose of our lives is to be happy.",
          author: "Dalai Lama",
          title: undefined
     },
     {
          message: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde",
          title: undefined
     },
     {
          message: "Turn your wounds into wisdom.",
          author: "Oprah Winfrey",
          title: "Motivation"
     }
]

const app = express()

app.use(cors())

app.get('/', (request, response) => {
     response.send("Welcome to the Quote Server!")
})

app.get('/getDailyJoke', (request, response) => {
     const randomQuote: Quote = items[Math.floor(Math.random() * items.length)]
     
     response.send(randomQuote)
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})
