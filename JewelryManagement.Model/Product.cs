using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JewelryManagement.Model
{
   public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal ScratchRate { get; set; }
        public bool IsActive { get; set; }
        public int ItemCode { get; set; }
        public int CategoryID { get; set; }
        public string Metal { get; set; }
        public decimal Weight { get; set; }
        public  DateTime Modified { get; set; }
        public DateTime  CreatedDate{ get; set; }
    }
}
