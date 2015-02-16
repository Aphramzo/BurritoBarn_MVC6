using Microsoft.Data.Entity;
using System;

namespace BurritoBarn.models
{
    public class BurritoBarnContext : DbContext
    {
        public DbSet<Restaurant> Restaurants { get; set; }
    }
}