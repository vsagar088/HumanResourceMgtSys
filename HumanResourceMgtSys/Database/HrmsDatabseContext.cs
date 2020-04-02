using HumanResourceMgtSys.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HumanResourceMgtSys.Database
{
    public class HrmsDatabseContext : DbContext
    {
        public HrmsDatabseContext() : base("Default")
        {

        }

        public DbSet<EmpDetails> EmployeeDetails { get; set; }
    
    }
}