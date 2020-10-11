using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PropertyRental.Models;

namespace PropertyRental.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Test()
        {
            return Content("Hello :)!!!!"); //Regresa el contenido nada mas
        }

        //[HttpGet]  // is THE DEFAULT ACTION
        public IActionResult About()
        {
            return View(); //Content("Jesus Camarena :)"); //Regresa el contenido nada mas
        }

        public IActionResult ContactUs()
        {
            return View(); //Content("Jesus Camarena :)"); //Regresa el contenido nada mas
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
