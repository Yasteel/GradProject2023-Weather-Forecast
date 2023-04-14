namespace WeatherForcast.Models
{
    public class ApiRootObjectModel
    {
        public LocationModel Location { get; set; }
        public CurrentModel Current { get; set; }
        public ForecastModel Forecast { get; set; }
    }
}
