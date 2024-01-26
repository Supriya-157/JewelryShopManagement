using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JewelryManagement.Service.DAL;
using JewelryManagement.Model;

namespace JewelryManagement.Service.BAL
{
   public class Category_BAL
    {
        private readonly Category_DAL _category_DAL_obj;
        public Category_BAL()
        {
            _category_DAL_obj = new Category_DAL();
        }
        public string InsertCategory(string name)
        {
            string res = _category_DAL_obj.InsertCategory(name);
            return res;
        }

        public Category GetCategoryById(int id)
        {
            Category res = _category_DAL_obj.GetCategoryById(id);
            return res;
        } 

        public List<Category> GetAllCategory()
        {
            List<Category> res = _category_DAL_obj.GetAllCategory();
            return res;
        }

        public int UpdateCategory(int id, Boolean isActive)
        {
            int res = _category_DAL_obj.UpdateCategory(id,isActive);
            return res;
        }

        public int DeleteCategory(int id)
        {
            int res = _category_DAL_obj.DeleteCategory(id);
            return res;
        }
    }
}
