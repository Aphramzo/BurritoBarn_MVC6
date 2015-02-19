using System.ComponentModel.DataAnnotations;

namespace BurritoBarn.models
{
    public class Restaurant
    {
        public int Id { get; set; }

        //TODO: Change this to category reference later
        public string Category { get; set; }

        [Required(ErrorMessage="You have to enter a name for the restaurant")]
        public string Name { get; set; }
    }
}