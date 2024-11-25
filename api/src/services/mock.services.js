import ProductsManager from "../daos/productsDao.js"

export const registerProductMock = async (mock) => {
  try {

    const newMockProduct = await ProductsManager.addProduct(mock)
    return newMockProduct
    
  } catch (error) {
    throw new Error(error)
  }
}