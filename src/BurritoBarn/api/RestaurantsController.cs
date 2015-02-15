using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using BurritoBarn.models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BurritoBarn.api.Controllers
{
    [Route("api/[controller]")]
    public class RestaurantsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Restaurant> Get()
        {
            return new List<Restaurant>
            {
                new Restaurant
                {
                    Id = 1,
                    Category = "Mexican",
                    Name = "Costa Vida"
                },
                new Restaurant
                {
                    Id = 2,
                    Category = "Mexican",
                    Name = "Santiagos"
                }

            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
