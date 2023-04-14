namespace WeatherForcast.Models
{
    public class CurrentModel
    {
        public string? Last_updated { get; set; }
        public float Temp_c { get; set; }
        public ConditionModel Condition { get; set; }
        public float Wind_kph { get; set; }
        public int Wind_degree { get; set; }
        public string? Wind_dir { get; set; }
        public float Pressure_mb { get; set; }
        public float Precip_mm { get; set; }
        public int Humidity { get; set; }
        public float Feelslike_c { get; set; }
    }
}
