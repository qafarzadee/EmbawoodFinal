using Microsoft.AspNetCore.Mvc;

namespace Web.UI.Controllers
{
    public class payment : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult ordercompleted()
        {
            return View();
        }
    }
}
