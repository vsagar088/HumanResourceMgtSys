using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HumanResourceMgtSys.CustomClasses
{
    public partial class CommonMaster
    {
        public int id { get; set; }
        public string name { get; set; }


        public static int DivisionId
        {
            get
            {
                try
                {
                    return Convert.ToInt32(HttpContext.Current.Session["DivisionId"].ToString());
                }
                catch (Exception) { return 0; }
            }
            set
            {
                HttpContext.Current.Session["DivisionId"] = value;
            }
        }
        // public int stateid { get; set; }
    }

}