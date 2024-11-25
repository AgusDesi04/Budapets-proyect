import ProductsManager from "../daos/productsDao.js";
import { createResponse } from "../utils/utils.js";
import * as services from "../services/mock.services.js"
import { faker } from '@faker-js/faker';

export const getProducts = async (req, res, next) => {
  try {

    const products = ProductsManager.getProducts()

    createResponse(req, res, 200, products)

  } catch (error) {
    next(error)
  }
}

export const findProductsBySearch = async (req, res, next) => {
  try {

    const search = req.body
    const products = ProductsManager.searchProduct(search)

    createResponse(req, res, 200, products)

  } catch (error) {
    next(error)
  }
}

export const addProductMocks = async (req, res, next) => {
  try {
    const quantity = parseInt(req.params.n, 10)

    if (!quantity || isNaN(quantity)) {
      return createResponse(req, res, 400, null, { msg: "you need to give a param" })
    }
    

    const mocks = []

    for (let i = 0; i < quantity; i++) {

      const productMock = {
        marca: 'royal canin',
        animal: 'perro',
        nombre: faker.commerce.product(),
        edad: "adulto",
        kilos: faker.number.int({max: 20})+"kg",
        precio: faker.number.int({ max: 10000 }),
        stock: false,

      }

     const savedMock = await services.registerProductMock(productMock)
     mocks.push(savedMock)
    }
    
    createResponse(req, res, 200, mocks)
  
  } catch (error) {
    next(error)
  }
}