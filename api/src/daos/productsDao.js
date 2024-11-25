import { productModel } from "./models/productModel.js";

class ProductsManager{

  static async getProducts(){
    try {
      const products = await productModel.find()
      return products
    } catch (error) {
      return error
    }
  }

  static async searchProduct(search){
    try {
      products = await productModel.find({nombre: {$regex: search, $options: "i"}})
      return products
    } catch (error) {
      return error 
    }
  }

  static async addProduct(product){
    try {
      return await productModel.create(product)
    } catch (error) {
      return error
    }
  }

}

export default ProductsManager