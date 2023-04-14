namespace WeatherForcast.Services
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Newtonsoft.Json;
    using WeatherForcast.Models;

    public class ApiRequestService
    {
        private readonly IHttpClientFactory clientFactory;
        private readonly IConfiguration config;

        public ApiRequestService(IHttpClientFactory _clientFactory, IConfiguration _config) 
        {
            clientFactory = _clientFactory;
            config = _config;
        }

        [HttpGet]
        public async Task<string> Get(ForecastOptionsModel model)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, this.BuildEndpoint(model));

            var client = this.clientFactory.CreateClient();

            HttpResponseMessage response = await client.SendAsync(request);

            if(!response.IsSuccessStatusCode)
            {
                return $"Error: {response.ReasonPhrase}";
            }

            return await response.Content.ReadAsStringAsync();

        }

        public string BuildEndpoint(ForecastOptionsModel model)
        {
            var baseUrl = "http://api.weatherapi.com/v1/forecast.json";
            var apiKey = config.GetValue<string>("ApiKey");

            return $"{baseUrl}?key={apiKey}&q={model.Location}&days={model.Days}";
        }


    }
}
