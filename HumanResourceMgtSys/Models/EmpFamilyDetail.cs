using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HumanResourceMgtSys.Models
{
    public class EmpFamilyDetail
    {
        public int id { get; set; }
        public int emp_code { get; set; }
        public string rel_res { get; set; }
        public string rel_nm { get; set; }
        public string rel_type { get; set; }
        public string ddlsubcategory { get; set; }
        public DateTime rel_dob { get; set; }
        public string rel_aadhar { get; set; } 
        public string nominee { get; set; }
        public string checktext { get; set; }
    }
}