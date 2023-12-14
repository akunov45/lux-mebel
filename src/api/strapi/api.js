import Strapi from "strapi-sdk-js"

export const strapi = new Strapi({
  // url: 'http://localhost:1337',
  url: 'https://mebel-pro.onrender.com',
  prefix: '/api'
})