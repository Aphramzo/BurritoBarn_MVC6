using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;

namespace BurritoBarn
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseMvc();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
    }
}
