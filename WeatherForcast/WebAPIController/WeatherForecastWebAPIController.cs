using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WeatherForcast.Models;
using WeatherForcast.Services;

namespace WeatherForcast.WebAPIController
{
    public class WeatherForecastWebAPIController : Controller
    {
        private readonly CacheService cache;
        private readonly ApiRequestService apiRequest;

        public WeatherForecastWebAPIController
            (
                CacheService cache,
                ApiRequestService apiRequest
            )
        {
            this.cache = cache;
            this.apiRequest = apiRequest;
        }
        public async Task<object> GetForecast(DataSourceLoadOptions loadOptions, ForecastOptionsModel model)
        {
            ApiRootObjectModel apiData;

            apiData = this.cache.Get("cacheData");

            if (apiData is null)
            {
                apiData = JsonConvert.DeserializeObject<ApiRootObjectModel>(await this.apiRequest.Get(model));
                this.cache.Set("cacheData", apiData);
            }

            return DataSourceLoader.Load(apiData.Forecast.Forecastday, loadOptions);
        }
    }
}
