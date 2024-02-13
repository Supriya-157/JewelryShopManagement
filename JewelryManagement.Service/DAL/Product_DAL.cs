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
    class Product_DAL
    {
        private readonly string _connectionString;

        public Product_DAL()
        {

            _connectionString = "Data Source = localhost\\SQLEXPRESS ; Initial Catalog = JewelryManagement;Integrated Security=true; ";// ConfigurationManager.ConnectionStrings[0].ConnectionString;
        }
        public List<Product> GetAllProduct()
        {

            List<Product> ProductList = new List<Product>();

            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    SqlCommand command = new SqlCommand("GetAllProduct", connection);
                    connection.Open();
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        Product catObj = new Product();
                        catObj.Id = reader.GetInt32(0);
                        catObj.Name = reader.GetString(1);
                        catObj.Description = reader.GetString(2);
                        catObj.Price = reader.GetDecimal(3);
                        catObj.ScratchRate = reader.GetDecimal(4);
                        catObj.ItemCode = reader.GetInt32(5);
                        catObj.IsActive = reader.GetBoolean(6);
                        catObj.CategoryID = reader.GetInt32(7);
                        catObj.Metal = reader.GetString(8);
                        catObj.Weight = reader.GetDecimal(9);
                        catObj.Modified = reader.GetDateTime(10);
                        catObj.CreatedDate = reader.GetDateTime(11);
                        ProductList.Add(catObj);
                    }

                }
            }
            catch (Exception ex)
            {
                ProductList = null;
            }
            return ProductList;
        }
    }
}

