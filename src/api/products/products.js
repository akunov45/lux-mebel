import {strapi} from "../strapi/api"

const NS = "products"

const productsApi = {
  
  findProducts() {
    return strapi.find(NS, {
      populate: "image"
    })
  },
  
  findOneProduct(id) {
    return strapi.findOne(NS, id, {
      populate: "image"
    })
  }
}

export default productsApi