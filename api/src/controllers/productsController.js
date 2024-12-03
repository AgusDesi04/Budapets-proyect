import { faker } from '@faker-js/faker';
import ProductsManager from "../daos/productsDao.js";
import * as services from "../services/mock.services.js";
import { createResponse } from "../utils/utils.js";

export const getProducts = async (req, res, next) => {
  try {

    const products = await ProductsManager.getProducts()

    createResponse(req, res, 200, products)

  } catch (error) {
    next(error)
  }
}

export const findProductsBySearch = async (req, res, next) => {
  try {

    const nombre = req.body.nombre || ""
    if (typeof nombre !== "string") {
      throw new Error("El campo debe ser un string")
    }
    const products = await ProductsManager.searchProduct({ nombre })

    createResponse(req, res, 200, products)

  } catch (error) {
    next(error)
  }
}

export const addProducts = async (req, res, next) => {
  try {
    let { marca, animal, nombre, edad, kilos, precio } = req.body

    const product = [
      {
        marca,
        animal,
        nombre,
        edad,
        kilos,
        precio
      }
    ];

    const isUnique = await ProductsManager.isProductUnique(nombre)

    if (!isUnique) {
      throw new Error(`El producto con el nombre "${nombre}" ya existe.`)
    }

    const newProduct = await ProductsManager.addProduct(product[0])

    return createResponse(req, res, 200, newProduct)


  } catch (error) {
    next(error)
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const { pid } = req.params
    const product = await ProductsManager.getById(pid)
    return createResponse(req, res, 200, product)
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
        kilos: faker.number.int({ max: 20 }) + "kg",
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