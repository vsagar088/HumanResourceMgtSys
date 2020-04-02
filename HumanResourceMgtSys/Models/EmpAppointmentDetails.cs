using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HumanResourceMgtSys.Models
{
    public class EmpAppointmentDetails
    {
      public int emp_code { get; set; }
      public string ap_type { get; set; }
      public string ap_frm { get; set; }

      public string ap_order { get; set; }
      public DateTime ap_orderdt { get; set; }
      public DateTime ap_joindt { get; set; }
      public string ap_post { get; set; }
      public string ap_office { get; set; }
      public string ap_pay { get; set; }
      public string status { get; set; }
      public string office_Code { get; set; }
    }
}