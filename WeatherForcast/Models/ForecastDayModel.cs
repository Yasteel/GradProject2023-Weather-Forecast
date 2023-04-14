namespace WeatherForcast.Models
{
    public class ForecastDayModel
    {
        public string? Date { get; set; }

        public DayModel Day { get; set; }

        public AstroModel Astro { get; set; }

        public HourModel[] Hour { get; set; }
    }
}
