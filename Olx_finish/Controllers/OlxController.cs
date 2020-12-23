using DataAccess;
using DataAccess.Entity;
using DTO.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Olx_finish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OlxController : ControllerBase
    {
        private readonly EFContext _context;
        public OlxController(EFContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Categories> GetCategories()
        {
            return _context.Categories.ToList();
        }
        [HttpGet("Favorite")]
        public List<Favorite> GetFavorite(string id)
        {
            return _context.Favorites.Where(x => x.UserId == id).ToList();
        }
        [HttpPost("AddTovar")]
        public void AddTovar(TovarDTO tovar)
        {
            List<Tovar_Image> images = _context.Tovar_Images.Where(x => x.Tovar.Id == tovar.Id).ToList();
            UserAdditionalInfo userAdditional = _context.AdditionalInfos.FirstOrDefault(x => x.Id == tovar.UserId);
            Categories categoriesa = _context.Categories.FirstOrDefault(x => x.ID == tovar.CategoryId);
            Tovar newTovar = new Tovar
            {
                Description = tovar.Description,
                Category = categoriesa,
                CategoryId = tovar.CategoryId,
                Cost = tovar.Cost,
                Images = images,
                Name = tovar.Name,
                UserId = userAdditional.Id,
                Id = tovar.Id
            };
            _context.Tovars.Add(newTovar);
            _context.SaveChanges();
        }

        [HttpGet("TovarCat")]
        public List<Tovar> GetTovarForCat(string Cat)
        {
            return _context.Tovars.Where(x =>x.Category.Name==Cat).ToList();
        }
        [HttpGet("TovarUser")]
        public List<Tovar> GetTovarForUser(string Id)
        {
            return _context.Tovars.Where(x => x.UserId == Id).ToList();
        }
        [HttpGet("TovarSearch")]
        public List<Tovar> GetTovarSearch(string Request)
        {
            return _context.Tovars.Where(x => x.Name.Contains(Request)).ToList();
        }
    }
}
