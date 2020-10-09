using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bioeliteVertApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace bioeliteVertApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GuestBookController : ControllerBase
    {
        private IGuestBookService _guestService;

        public GuestBookController(IGuestBookService questService)
        {
            _guestService = questService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_guestService.GetAll());
        }

        [HttpPost]
        public IActionResult CreateNewGuestBook(GuestBook guestBook)
        {
            return Ok(_guestService.CreateNewGuestBook(guestBook));
        }
    }
}
