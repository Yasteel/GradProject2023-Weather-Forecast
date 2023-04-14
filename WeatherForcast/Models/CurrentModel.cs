namespace WeatherForcast.Models
{
    public class CurrentModel
    {
        public string? Last_updated { get; set; }

        public float Temp_c { get; set; }

        public ConditionModel? Condition { get; set; }

        public float Wind_mph { get; set; }

        public float Wind_kph { get; set; }

        public string? Wind_dir { get; set; }

        public float Precip_mm { get; set; }

        public float Precip_in { get; set; }

        public int Humidity { get; set; }

        public int Cloud { get; set; }

        public float Feelslike_c { get; set; }

        public float Feelslike_f { get; set; }
    }
}
