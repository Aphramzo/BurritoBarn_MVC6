using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Data.Entity;
using BurritoBarn.models;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.ConfigurationModel;

namespace BurritoBarn
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }
        public Startup(IHostingEnvironment env)
        {
            Configuration = new Configuration()
                .AddJsonFile("config.json")
                .AddEnvironmentVariables();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseMvc();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddEntityFramework(Configuration)
                .AddSqlServer()
                .AddDbContext<BurritoBarnContext>();
        }
    }
}
