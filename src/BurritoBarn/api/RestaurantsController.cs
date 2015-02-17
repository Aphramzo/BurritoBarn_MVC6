using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using BurritoBarn.models;
using System.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BurritoBarn.api.Controllers
{
    [Route("api/[controller]")]
    public class RestaurantsController : Controller
    {
        private readonly BurritoBarnContext db;

        public RestaurantsController(BurritoBarnContext context)
        {
            db = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Restaurant> Get()
        {
            return db.Restaurants;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var restaurant = db.Restaurants.FirstOrDefault(c => c.Id == id);
            //return restaurant == null ? new HttpNotFoundResult() : new ObjectResult(restaurant);
            if(restaurant == null)
            {
                return new HttpNotFoundResult();
            }
            else
            {
                return new ObjectResult(restaurant);
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Restaurant restaurant)
        {
            if (restaurant.Id == 0)
            {
                db.Restaurants.Add(restaurant);
                db.SaveChanges();
                return new ObjectResult(restaurant);
            }
            else
            {
                var _restaurant = db.Restaurants.FirstOrDefault(c => c.Id == restaurant.Id);
                //TODO: Auto map
                db.SaveChanges();
                return new ObjectResult(_restaurant);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var restaurant = db.Restaurants.FirstOrDefault(c => c.Id == id);
            if(restaurant == null)
            {
                return new HttpNotFoundResult();
            }

            db.Restaurants.Remove(restaurant);
            db.SaveChanges();
            return new HttpStatusCodeResult(200);
        }
    }
}
