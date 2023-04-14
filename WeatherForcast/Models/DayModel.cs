namespace WeatherForcast.Models
{
    public class DayModel
    {
        public float Maxtemp_c { get; set; }

        public float Mintemp_c { get; set; }

        public float Avgtemp_c { get; set; }

        public float Maxwind_kph { get; set; }

        public float Totalprecip_mm { get; set; }

        public float Totalsnow_cm { get; set; }

        public float Avgvis_km { get; set; }

        public float Avghumidity { get; set; }

        public int Daily_will_it_rain { get; set; }

        public int Daily_chance_of_rain { get; set; }

        public int Daily_will_it_snow { get; set; }

        public int Daily_chance_of_snow { get; set; }

        public ConditionModel? Condition { get; set; }
    }
}
