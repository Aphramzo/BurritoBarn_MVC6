using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using BurritoBarn.models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BurritoBarn.api.Controllers
{
    [Route("api/[controller]")]
    public class CuisinesController : Controller
    {
        private readonly BurritoBarnContext db;

        public CuisinesController(BurritoBarnContext context)
        {
            db = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Cuisine> Get()
        {
            return db.Cuisines;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var cuisine = db.Cuisines.FirstOrDefault(c => c.Id == id);
            if (cuisine == null)
            {
                return new HttpNotFoundResult();
            }
            else
            {
                return new ObjectResult(cuisine);
            }

        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Cuisine cuisine)
        {
            if (!ModelState.IsValid)
            {
                //TODO: This doesnt look like its available until beta 3, but when I try to upgrade to that it gets silly around my startup file
                //return new BadRequestObjectResult(ModelState);
                return new HttpStatusCodeResult(500);
            }

            if (cuisine.Id == 0)
            {
                db.Cuisines.Add(cuisine);
                db.SaveChanges();
                return new ObjectResult(cuisine);
            }
            else
            {
                var _cuisine = db.Restaurants.FirstOrDefault(c => c.Id == cuisine.Id);
                //TODO: Auto map
                db.SaveChanges();
                return new ObjectResult(_cuisine);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var _cuisine = db.Cuisines.FirstOrDefault(c => c.Id == id);
            if (_cuisine == null)
            {
                return new HttpNotFoundResult();
            }

            db.Cuisines.Remove(_cuisine);
            db.SaveChanges();
            return new HttpStatusCodeResult(200);
        }
    }
}
