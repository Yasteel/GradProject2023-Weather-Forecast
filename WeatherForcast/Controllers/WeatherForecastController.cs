using Microsoft.AspNetCore.Mvc;

namespace WeatherForcast.Controllers
{
    public class WeatherForecastController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
