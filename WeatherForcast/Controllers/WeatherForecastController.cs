using Microsoft.AspNetCore.Mvc;
using WeatherForcast.Models;
using WeatherForcast.Services;

namespace WeatherForcast.Controllers
{
    public class WeatherForecastController : Controller
    {
        private readonly CacheService cache;

        public WeatherForecastController(CacheService cache)
        {
            this.cache = cache;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Location()
        {

            var apiData = this.cache.Get("cacheData");

            if(apiData is null)
            {
                return RedirectToAction("Index", "Home");
            }

            return View(apiData.Location);
        }

        public IActionResult Current()
        {
            var apiData = this.cache.Get("cacheData");

            if (apiData is null)
            {
                return RedirectToAction("Index", "Home");
            }

            return View(apiData.Current);
        }
    }
}
