using Microsoft.Extensions.Caching.Memory;
using WeatherForcast.Models;

namespace WeatherForcast.Services
{
    public class CacheService
    {
        private readonly IMemoryCache memoryCache;

        public CacheService(IMemoryCache memoryCache) 
        {
            this.memoryCache = memoryCache;
        }

        public ApiRootObjectModel Get(string cacheKey)
        {
            return memoryCache.Get<ApiRootObjectModel>(cacheKey);
        }

        public void Set(string key, ApiRootObjectModel model)
        {
            this.memoryCache.Set(key, model, TimeSpan.FromMinutes(10));
        }
    }
}
