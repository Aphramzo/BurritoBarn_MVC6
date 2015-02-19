using System.ComponentModel.DataAnnotations;

namespace BurritoBarn.models
{
    public class Restaurant
    {
        public int Id { get; set; }
        public int CuisineId { get; set; }

        [Required(ErrorMessage = "You didn't tell me what kind of cuisine this place is, dummy.")]
        public virtual Cuisine Cuisine { get; set; }

        [Required(ErrorMessage="You have to enter a name for the restaurant")]
        public string Name { get; set; }
    }
}