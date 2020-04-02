using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HumanResourceMgtSys.Models
{
    
    public class EmpDetails
    {
        [Key]
        public int emp_code { get; set; }

        public string emp_name { get; set; }

        public string emp_fname { get; set; }
        
        public DateTime dob { get; set; }
        public string gender { get; set; }

        public string religion { get; set; }
        public string category { get; set; }
        public string subcategory { get; set; }
        public string subcategoryName { get; set; }
        public string pan { get; set; }
        public string aadhar { get; set; }

        //[DataType(DataType.Date)]  // why are you using it ???  
        //public DateTime entry_date { get; set; }
        public DateTime  entry_date { get; set; }
        public int emp_height { get; set; }

        public string emp_idy { get; set; }

        public string emp_martial { get; set; }
        
        public string cat_sel { get; set; }
        
        public string office_code { get; set; }

        
        public string blood_Group { get; set; }
        
        public string voterCard_No { get; set; }
        
    }
    //public class EmpAddressDetail
    //{

    //    public int emp_code { get; set; }
    //    public string p_add { get; set; }
    //    public string p_town { get; set; }
    //    public string p_district { get; set; }
    //    public string p_state { get; set; }
    //    public string p_phone { get; set; }
    //    public string p_mobile { get; set; }
    //    public string p_email { get; set; }
    //    public string c_add { get; set; }
    //    public string c_town { get; set; }
    //    public string c_district { get; set; }
    //    public string c_state { get; set; }
    //    public string c_phone { get; set; }
    //    public string c_mobile { get; set; }
    //    public string c_email { get; set; }
    //    public string h_district { get; set; }
    //    public string h_Tehsil { get; set; }
    //    public string h_Vidhan_Sabha { get; set; }
    //    public string h_State { get; set; }
    //}
}