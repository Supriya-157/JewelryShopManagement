using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using JewelryManagement.Service.BAL;
using JewelryManagement.Model;

namespace JewelryManagement.webapi.Controllers
{
    public class ProductController : ApiController
{
        private readonly Product_BAL _Product_BAL_obj;
        public ProductController()
        {
            _Product_BAL_obj = new Product_BAL();
        }

        [HttpGet]
        public IHttpActionResult GetAllProduct()
        {
            try
            {
                List<Product> res = _Product_BAL_obj.GetAllProduct();
                return Ok(res);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}