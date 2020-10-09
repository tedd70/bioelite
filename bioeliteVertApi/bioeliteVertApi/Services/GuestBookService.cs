using bioeliteVertApi.Repositories;
using bioeliteVertApi.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bioeliteVertApi.Services
{
    public class GuestBookService : IGuestBookService
    {

        private readonly BioeliteVertDbContext _context;
        public GuestBookService(BioeliteVertDbContext context)
        {
            _context = context;
        }

        public List<GuestBook> GetAll()
        {
            return _context.GuestBooks.ToList();
        }

        public GuestBook CreateNewGuestBook(GuestBook guestBook)
        {
            _context.GuestBooks.Add(guestBook);
            _context.SaveChanges();

            return guestBook;
        }
    }
}
