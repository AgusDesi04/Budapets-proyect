import { productModel } from "./models/productModel.js";

class ProductsManager {

  static async getProducts() {
    try {
      const products = await productModel.find()
      return products
    } catch (error) {
      return error
    }
  }

  static async searchProduct({ nombre }) {
    try {
      console.log("Buscando productos con nombre:", nombre);
      const products = await productModel.find({ nombre: { $regex: nombre, $options: "i" } })
      console.log("Productos Encotnrados:", products)
      return products
    } catch (error) {
      return error
    }
  }

  static async addProduct(product) {
    try {
      return await productModel.create(product)
    } catch (error) {
      return error
    }
  }

  static async isProductUnique(nombre) {
    try {
      const existingProduct = await productModel.findOne({ nombre })
      return !existingProduct
    } catch (error) {
      console.error("Error verificando unicidad del producto:", error);
      return error;
    }
  }

  static async getById(pid){
    try {
      return await  productModel.findById(pid)
    } catch (error) {
      return error
    }
  }

}

export default ProductsManager