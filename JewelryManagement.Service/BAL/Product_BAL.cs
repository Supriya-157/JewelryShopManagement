using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JewelryManagement.Service.DAL;
using JewelryManagement.Model;

namespace JewelryManagement.Service.BAL
{
   public class Product_BAL
    {
        private readonly Product_DAL _Product_DAL_obj;
        public Product_BAL()
        {
            _Product_DAL_obj = new Product_DAL();
        }
        public List<Product> GetAllProduct()
        {
            List<Product> res = _Product_DAL_obj.GetAllProduct();
            return res;
        }

    }
}
