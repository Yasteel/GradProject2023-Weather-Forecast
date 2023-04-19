using System.ComponentModel.DataAnnotations;

namespace WeatherForcast.Models
{
    public class CurrentModel
    {
        public string? Last_updated { get; set; }

        [Display(Name = "Temp (C)")]
        public float Temp_c { get; set; }
        public ConditionModel Condition { get; set; }


        [Display(Name = "Wind (Km/h)")]
        public float Wind_kph { get; set; }
        public int Wind_degree { get; set; }

        [Display(Name = "Wind Direction")]
        public string? Wind_dir { get; set; }

        [Display(Name = "Pressure")]
        public float Pressure_mb { get; set; }

        [Display(Name = "Precipitation (mm)")]
        public float Precip_mm { get; set; }

        public int Humidity { get; set; }

        [Display(Name = "Feels Like (C)")]
        public float Feelslike_c { get; set; }
    }
}
