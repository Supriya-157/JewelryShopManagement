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
    public class CategoryController : ApiController
    {
        private readonly Category_BAL _category_BAL_obj;
       public CategoryController()
        {
            _category_BAL_obj = new Category_BAL();
        }

        [HttpPost]
        public IHttpActionResult InsertCategory(string name)
        {
            try
            {
                string res = _category_BAL_obj.InsertCategory(name);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

        [HttpGet]
        public IHttpActionResult GetCategoryById(int id)
        {
            try
            {
                Category res = _category_BAL_obj.GetCategoryById(id);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet]
    public IHttpActionResult GetAllCategory()
        {
            try
            {
                List<Category> res = _category_BAL_obj.GetAllCategory();
                return Ok(res);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        public IHttpActionResult UpdateCategory(int id, Boolean isActive)
        {
            try
            {
                int res = _category_BAL_obj.UpdateCategory(id, isActive);
                if (res == 1)
                {
                    return Ok("success");
                }
                else
                {
                    return Ok("failed");
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

        [HttpPost]
        public IHttpActionResult DeleteCategory(int id)
        {
            try
            {
                int res = _category_BAL_obj.DeleteCategory(id);
                if (res == 1)
                {
                    return Ok("success");
                }
                else
                {
                    return Ok("failed");
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

    }
}
