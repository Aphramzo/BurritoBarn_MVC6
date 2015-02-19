using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using System.Collections.Generic;
using System.Linq;

namespace BurritoBarn.models
{
    public class BurritoBarnContext : DbContext
    {
        public DbSet<Restaurant> Restaurants { get; set; }

        public DbSet<Cuisine> Cuisines { get; set; }
    }
}