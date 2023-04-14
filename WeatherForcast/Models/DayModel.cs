namespace WeatherForcast.Models
{
    public class DayModel
    {
        public float Maxtemp_c { get; set; }
        public float Mintemp_c { get; set; }
        public float Avgtemp_c { get; set; }
        public float Maxwind_kph { get; set; }
        public float Totalprecip_mm { get; set; }
        public float Avghumidity { get; set; }
        public ConditionModel Condition { get; set; }
    }
}
