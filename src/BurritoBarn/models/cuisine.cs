using System;
using System.Collections.Generic;

namespace BurritoBarn.models
{
    public class Cuisine
    {
        public Cuisine()
        {
            Restaurants = new HashSet<Restaurant>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Restaurant> Restaurants { get; private set; }
    }
}