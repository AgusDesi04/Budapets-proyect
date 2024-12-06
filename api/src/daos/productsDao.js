import { productModel } from "./models/productModel.js";

class ProductsManager {

  static async getProducts() {
    try {
      const products = await productModel.find()
      return products
    } catch (error) {
      throw error
    }
  }

  static async searchProduct({ nombre }) {
    try {
      console.log("Buscando productos con nombre:", nombre);
      const products = await productModel.find({ nombre: { $regex: nombre, $options: "i" } })
      console.log("Productos Encotnrados:", products)
      return products
    } catch (error) {
      throw error
    }
  }

  static async addProduct(product) {
    try {
      return await productModel.create(product)
    } catch (error) {
      throw error
    }
  }

  static async isProductUnique(nombre) {
    try {
      const existingProduct = await productModel.findOne({ nombre })
      return !existingProduct
    } catch (error) {
      throw error
    }
  }

  static async getById(pid){
    try {
      return await  productModel.findById(pid)
    } catch (error) {
      throw error
    }
  }

  static async updateProduct(id, productUpdates) {
    try {

      const updatedProduct = await productModel.findByIdAndUpdate(id, productUpdates, { new: true });

      if (!updatedProduct) {
        throw new Error(`No se encontró el producto con ID: ${id}`);
      }

      return updatedProduct;
    } catch (error){
       throw error
    }
  }


}

export default ProductsManager