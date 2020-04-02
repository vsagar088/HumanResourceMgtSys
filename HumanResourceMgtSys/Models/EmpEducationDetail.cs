using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HumanResourceMgtSys.Models
{
    public class EmpEducationDetail
    {
        public int id { get; set; }
        public int emp_code { get; set; }
        public string emp_category { get; set; }
        public string emp_qual { get; set; }
        public string emp_board { get; set; }
        public string  emp_stream { get; set; }
        public string  emp_year { get; set; }
        public string  emp_per { get; set; }
        public string  emp_mode { get; set; }
        public string emp_type { get; set; }
        public string qualification { get; set; }
        public string emp_yearcategory { get; set; }

    }
}