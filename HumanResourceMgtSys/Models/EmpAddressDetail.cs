using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HumanResourceMgtSys.Models
{
    public class EmpAddressDetail
    {
        public int emp_code { get; set; }
        public string p_add { get; set; }
        public string p_town { get; set; }
        public string p_district { get; set; }
        public string p_state { get; set; }
        public string p_phone { get; set; }
        public string p_mobile { get; set; }
        public string p_email { get; set; }
        public string c_add { get; set; }
        public string c_town { get; set; }
        public string c_district { get; set; }
        public string c_state { get; set; }
        public string c_phone { get; set; }
        public string c_mobile { get; set; }
        public string c_email { get; set; }
        public string h_district { get; set; }
        public string h_tehsil { get; set; }
        public string h_vidhan_sabha { get; set; }
        public string h_state { get; set; }

    }
}