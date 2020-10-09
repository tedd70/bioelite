using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bioeliteVertApi.Services.Interfaces
{
    public interface IGuestBookService
    {
        List<GuestBook> GetAll();
        GuestBook CreateNewGuestBook(GuestBook guestBook);
    }
}
