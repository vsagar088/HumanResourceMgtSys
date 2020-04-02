using System.Web;
using System.Web.Optimization;

namespace HumanResourceMgtSys
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/SiteScripts").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Content/assets/Plugin/jquery/dist/jquery.min.js",
                      "~/Content/assets/Plugin/jquery-ui/jquery-ui.min.js",
                      "~/Content/assets/Plugin/bootstrap/dist/js/bootstrap.min.js",
                      "~/Content/assets/Plugin/jquery-slimscroll/jquery.slimscroll.min.js",
                      "~/Content/assets/Plugin/fastclick/lib/fastclick.js",
                      "~/Content/assets/js/adminlte.min.js",
                      "~/Content/assets/sitejs/general.js ",
                      "~/Content/assets/sitejs/validation.js ",
                      "~/Content/assets/sitejs/jshelper.js ",
                      "~/Content/assets/sitejs/jtemplates.js ",
                      "~/Content/assets/sitejs/jtemplatesHelper.js",
                      "~/Content/assets/sitejs/ddl.js "
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/assets/Plugin/bootstrap/dist/css/bootstrap.min.css",
                      "~/Content/assets/Plugin/font-awesome/css/font-awesome.min.css",
                      "~/Content/assets/Plugin/Ionicons/css/ionicons.min.css",
                      "~/Content/assets/css/AdminLTE.css",
                      "~/Content/assets/css/skins/_all-skins.min.css",
                      "~/Content/assets/genaral.css" ));


        }
    }
}
