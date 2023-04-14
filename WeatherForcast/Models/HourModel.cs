namespace WeatherForcast.Models
{
    public class HourModel
    {
        public string? Time { get; set; }

        public float Temp_c { get; set; }

        public float Wind_kph { get; set; }

        public string? Wind_dir { get; set; }

        public float Feelslike_c { get; set; }

        public int Will_it_rain { get; set; }

        public int Chance_of_rain { get; set; }
    }
}
