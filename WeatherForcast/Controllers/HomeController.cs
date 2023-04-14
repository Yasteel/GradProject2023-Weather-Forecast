namespace WeatherForcast.Controllers
{
    using System.Diagnostics;
    using FluentValidation;
    using FluentValidation.AspNetCore;
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using WeatherForcast.Models;
    using WeatherForcast.Services;

    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IValidator<ForecastOptionsModel> validator;
        private readonly CacheService cache;
        private readonly ApiRequestService apiRequest;

        public HomeController
            (
                ILogger<HomeController> logger,
                IValidator<ForecastOptionsModel> validator,
                CacheService cache,
                ApiRequestService apiRequest
            )
        {
            _logger = logger;
            this.validator = validator;
            this.cache = cache;
            this.apiRequest = apiRequest;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Submit(ForecastOptionsModel model)
        {
            var result = this.validator.Validate(model);

            if (!result.IsValid)
            {
                result.AddToModelState(this.ModelState);
                return RedirectToAction("Index");
            }

            ApiRootObjectModel apiData;

            apiData = this.cache.Get("cacheData");

            if(apiData is null)
            {
                apiData = JsonConvert.DeserializeObject<ApiRootObjectModel>(await this.apiRequest.Get(model));
                this.cache.Set("cacheData", apiData);
            }

            return RedirectToAction("Index", "WeatherForecast");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}