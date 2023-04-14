//namespace WeatherForcast.Models
//{
//    public class WeatherModel
//    {
//    }


//    public class Rootobject
//    {
//        public Location Location { get; set; }
//        public Current Current { get; set; }
//        public Forecast Forecast { get; set; }
//    }

//    public class Location
//    {
//        public string? Name { get; set; }
//        public string? Region { get; set; }
//        public string? Country { get; set; }
//        public string? Localtime { get; set; }
//    }

//    public class Current
//    {
//        public string? Last_updated { get; set; }
//        public float Temp_c { get; set; }
//        public Condition Condition { get; set; }
//        public float Wind_kph { get; set; }
//        public int Wind_degree { get; set; }
//        public string? Wind_dir { get; set; }
//        public float Pressure_mb { get; set; }
//        public float Precip_mm { get; set; }
//        public int Humidity { get; set; }
//        public float Feelslike_c { get; set; }
//    }

//    public class Condition
//    {
//        public string? Text { get; set; }
//        public string? Icon { get; set; }
//        public int Code { get; set; }
//    }

//    public class Forecast
//    {
//        public Forecastday[] Forecastday { get; set; }
//    }

//    public class Forecastday
//    {
//        public string? Date { get; set; }
//        public Day Day { get; set; }
//    }

//    public class Day
//    {
//        public float Maxtemp_c { get; set; }
//        public float Mintemp_c { get; set; }
//        public float Avgtemp_c { get; set; }
//        public float Maxwind_kph { get; set; }
//        public float Totalprecip_mm { get; set; }
//        public float Avghumidity { get; set; }
//        public Condition Condition { get; set; }
//    }
//}
