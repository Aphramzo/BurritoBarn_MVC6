using System;

namespace BurritoBarn.models
{
    public class Restaurant
    {
        public int Id { get; set; }

        //TODO: Change this to category reference later
        public string Category { get; set; }

        public string Name { get; set; }
    }
}