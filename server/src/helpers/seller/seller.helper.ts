import Seller from '../../schemas/seller.schema';

export const findSellerById = async (sellerId: string) => {
  const seller = await Seller.findById(sellerId);

  if (!seller) {
    return null;
  }

  seller.password = '';
  return seller;
};
