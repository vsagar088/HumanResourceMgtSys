using HumanResourceMgtSys.Database;
using HumanResourceMgtSys.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
//using HumanResourceMgtSys.Models;

namespace HumanResourceMgtSys.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee


        HrmsDatabseContext db = new HrmsDatabseContext();
        

        private SqlConnection con;
        private void connection()
        {
            string constring = ConfigurationManager.ConnectionStrings["Default"].ToString();
            con = new SqlConnection(constring);
        }
        public ActionResult PersonalDetails()
        {

            return View();
        }
        [HttpPost]
        public ActionResult PersonalDetails(EmpDetails empDetails)
        {
            SqlHelper obj = new SqlHelper();

            connection();
            //db.EmployeeDetails.Add(empDetails);
            //db.SaveChanges();


            //string date = DateTime.Now.ToString();
            //string date = DateTime.Now.ToString();
            //DateTime dateTime = Convert.ToDateTime(date);

            string entryDate = DateTime.Now.ToString("MM/dd/yyyy hh:mm:ss");
            string dob = empDetails.dob.ToString("MM/dd/yyyy hh:mm:ss");

            SqlCommand sqlcmd = new SqlCommand("Insert into emp_details (emp_code, emp_name, emp_fname, dob, gender, religion, category, subcategory, pan, aadhar, entry_date, emp_height, emp_idy, emp_martial, cat_sel, office_Code, blood_Group, voterCard_No) values('" 
                + empDetails.emp_code + "','" + empDetails.emp_name + "','" + empDetails.emp_fname + "','" + dob + "','" + empDetails.gender + "','" + empDetails.religion + "'," +"'" + empDetails.category + "','" 
            + empDetails.subcategoryName + "','" + empDetails.pan + "','" + empDetails.aadhar.ToString() + "','"+ entryDate + "','" + empDetails.emp_height + "','" + empDetails.emp_idy + "','" + empDetails.emp_martial +
            "','" + empDetails.cat_sel + "','" + empDetails.office_code + "','" + empDetails.blood_Group + "','" + empDetails.voterCard_No + "')", con);
            sqlcmd.CommandType = CommandType.Text;
            con.Open();
            sqlcmd.ExecuteNonQuery();
            Session["empCode"] = empDetails.emp_code;
              
            con.Close();

            //lstemp = GetDatas();
            //return View("Index", lstemp);
            //return View("EmpHomeDistrict","Employee",new {id=TempData["mydata"]});
            // RedirectToAction(");    return RedirectToAction("Details","Student",new { id = StudentId });
            return RedirectToAction("EmpHomeDistrict");

        }


        public ActionResult EditEmpPersonalDetails()
        {
            return View();
        }

        [HttpPost]
        public ActionResult EditEmpPersonalDetails(string emp_Code)
        {
            Session["empCode"] = emp_Code.Trim();
            return View();
        }



        public ActionResult EmpHomeDistrict()
        {
         //   Session["empCode"] = "22"; 
            return View();
            
        }
        [HttpPost]
        public ActionResult EmpHomeDistrict(EmpAddressDetail empAddressDetail)

        {
            connection();
            //string data=TempData["mydata"] as string;

            string emp_code = Session["empCode"].ToString();

            SqlCommand sqlcmd = new SqlCommand("Insert into emp_address (emp_code, h_State, h_district, h_Tehsil, h_Vidhan_Sabha, p_state, p_district, p_town, p_add, c_state, c_district, c_town, c_add, c_phone, c_mobile, c_email) values('"
                + emp_code + "','" + empAddressDetail.h_state + "','" + empAddressDetail.h_district + "','" + empAddressDetail.h_tehsil + "','" + empAddressDetail.h_vidhan_sabha + "'," + "'" + empAddressDetail.p_state + "','"
            + empAddressDetail.p_district + "','" + empAddressDetail.p_town + "','" + empAddressDetail.p_add + "','" + empAddressDetail.c_state + "','" + empAddressDetail.c_district + "','" + empAddressDetail.c_town +
            "','" + empAddressDetail.c_add + "','" + empAddressDetail.c_phone + "','" + empAddressDetail.c_mobile + "','" + empAddressDetail.c_email+ "')", con);
            sqlcmd.CommandType = CommandType.Text;
            
            con.Open();
            sqlcmd.ExecuteNonQuery();
            con.Close();
            return RedirectToAction("EmpFamilyDetail");
        }
        public ActionResult EmpFamilyDetail()
        {
            return View();
        }
        [HttpPost]
        public ActionResult EmpFamilyDetail(EmpFamilyDetail empFamilyDetail)
        {
            connection();
            //string data=TempData["mydata"] as string;

            string emp_code = Session["empCode"].ToString();
            string dob = empFamilyDetail.rel_dob.ToString("MM/dd/yyyy hh:mm:ss");

            SqlCommand sqlcmd = new SqlCommand("Insert into emp_family (emp_code, rel_nm, rel_type,rel_dt, rel_aadhar, nominee) values('"
                + emp_code + "','" +empFamilyDetail.rel_res+empFamilyDetail.rel_nm +"','" + empFamilyDetail.ddlsubcategory + "','" + dob + "','" + empFamilyDetail.rel_aadhar + "'," + "'" + empFamilyDetail.checktext + "')", con);
           

            con.Open();
            sqlcmd.ExecuteNonQuery();
            con.Close();
            return RedirectToAction("EmpEducationDetails");
            //return View();
        }
        public ActionResult EmpEducationDetails()
        {
            return View();
        } 
        [HttpPost]
        public ActionResult EmpEducationDetails(EmpEducationDetail empEducationDetail)
        {
            connection();
            //string data=TempData["mydata"] as string;

            string emp_code = Session["empCode"].ToString();

            SqlCommand sqlcmd = new SqlCommand("Insert into empedu_detail (emp_code,emp_category, emp_qual,emp_board,emp_stream, emp_year,emp_per,emp_mode,emp_type) values('"
                + emp_code + "','" + empEducationDetail.emp_category + "','" + empEducationDetail.emp_qual + "','" + empEducationDetail.emp_board + "','" + empEducationDetail.emp_stream + "','" + empEducationDetail.emp_year + "','" + empEducationDetail.emp_per + "','" + empEducationDetail.emp_mode + "','" + empEducationDetail.qualification + "')", con);


            con.Open();
            sqlcmd.ExecuteNonQuery();
            con.Close();
            return RedirectToAction("EmpAppointDetails");
            // return View();
        }
        public ActionResult EmpAppointDetails()
        {

            return View();
        }
        [HttpPost]
        public ActionResult EmpAppointDetails(EmpAppointmentDetails empAppointmentDetails)
        {
            connection();
            //string data=TempData["mydata"] as string;

            string emp_code = Session["empCode"].ToString();

            SqlCommand sqlcmd = new SqlCommand("Insert into emp_appointment (emp_code,ap_type, ap_frm,ap_order,ap_orderdt, ap_joindt,ap_post,ap_office,ap_pay,status,office_Code) values('"
                + emp_code + "','" + empAppointmentDetails.ap_type + "','" + empAppointmentDetails.ap_frm + "','" + empAppointmentDetails.ap_order + "','" + empAppointmentDetails.ap_orderdt + "','" + empAppointmentDetails.ap_joindt + "','" + empAppointmentDetails.ap_post + "','" + empAppointmentDetails.ap_office + "','" + empAppointmentDetails.ap_pay + "','" + empAppointmentDetails.status + "','" + empAppointmentDetails.office_Code + "')", con);


            con.Open();
            sqlcmd.ExecuteNonQuery();
            con.Close();
            return RedirectToAction("EmpImageDetails");

           
           // return View();
        }
        public ActionResult EmpImageDetails()
        {

            return View();
        }
        [HttpPost]
        public ActionResult EmpImageDetails(EmpImageDetails empImageDetails)
        {
            connection();
            //string data=TempData["mydata"] as string;

            string emp_code = Session["empCode"].ToString();

            SqlCommand sqlcmd = new SqlCommand("Insert into emp_image (emp_code,emp_img, emp_simg) values('"
                + emp_code + "','" + empImageDetails.emp_img + "','" + empImageDetails.emp_simg + "')", con);


            con.Open();
            sqlcmd.ExecuteNonQuery();
            con.Close();
            
            return View();
        }
    }
}