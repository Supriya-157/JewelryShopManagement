using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using JewelryManagement.Model;
using System.Configuration;

namespace JewelryManagement.Service.DAL
{
    public class Category_DAL
    {
        private readonly string _connectionString;

        public Category_DAL()
        {
            _connectionString = ConfigurationManager.ConnectionStrings[0].ConnectionString;
        }
        public string InsertCategory(string name)
        {
            string result = string.Empty;
            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    SqlCommand command = new SqlCommand("InsertCategory", connection);
                    connection.Open();

                    command.Parameters.AddWithValue("@Name", name);
                    result = Convert.ToString(command.ExecuteScalar());

                }
            }
            catch (Exception ex)
            {
                result = null;
            }
            return result;
        }

        public Category GetCategoryById(int id)
        {
            
            Category catObj = new Category();          
            
            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    SqlCommand command = new SqlCommand("GetCategoryById", connection);
                    connection.Open();

                    command.Parameters.AddWithValue("@Id", id);
                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        catObj.Id = reader.GetInt32(0);
                        catObj.Name = reader.GetString(1);
                        catObj.IsActive = reader.GetBoolean(2);
                        catObj.CreatedDate = reader.GetDateTime(3);
                    }

                }
            }
            catch (Exception ex)
            {
                catObj = null;
            }
            return catObj;
        }

        public List<Category> GetAllCategory()
        {

            List<Category> categoryList = new List<Category>();
          
            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    SqlCommand command = new SqlCommand("GetAllCategory", connection);
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        Category catObj = new Category();
                        catObj.Id = reader.GetInt32(0);
                        catObj.Name = reader.GetString(1);
                        catObj.IsActive = reader.GetBoolean(2);
                        catObj.CreatedDate = reader.GetDateTime(3);
                        categoryList.Add(catObj);
                    }

                }
            }
            catch (Exception ex)
            {
                categoryList = null;
            }
            return categoryList;
        }

        public int UpdateCategory(int id, Boolean isActive)
        {

            int result = 0;
          
            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    SqlCommand command = new SqlCommand("UpdateCategory", connection);
                    connection.Open();
                    command.Parameters.AddWithValue("@Id",id);
                    command.Parameters.AddWithValue("@IsActive",isActive);
                     result = command.ExecuteNonQuery();

                   

                }
            }
            catch (Exception ex)
            {
                result = 0;
            }
            return result;
        }

        public int DeleteCategory(int id )
        {

            int result = 0;
          
            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    SqlCommand command = new SqlCommand("DeleteCategory", connection);
                    connection.Open();

                    command.Parameters.AddWithValue("@Id", id);
                    result = command.ExecuteNonQuery();

                 
                }
            }
            catch (Exception ex)
            {
                result = 0;
            }
            return result;
        }

    }
}
