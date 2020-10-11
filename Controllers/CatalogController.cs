using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;

namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {
        public IActionResult Index()
        {
            return View(); //Catalog page
        }
        public IActionResult Register()
        {
            return View(); //Register page 
        }
        
    }
}
