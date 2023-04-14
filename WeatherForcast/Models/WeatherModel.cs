namespace WeatherForcast.Models
{
    public class WeatherModel
    {
        public LocationModel? Location { get; set; }

        public CurrentModel? Current { get; set; }

        public ForecastModel? Forecast { get; set; }
    }
}
