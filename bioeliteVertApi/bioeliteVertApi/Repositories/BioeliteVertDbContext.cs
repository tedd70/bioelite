using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bioeliteVertApi.Repositories
{
    public class BioeliteVertDbContext : DbContext
    {
        public BioeliteVertDbContext(DbContextOptions<BioeliteVertDbContext> options)
           : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

        protected override void OnModelCreating(ModelBuilder modelBuider) { }

        //Entities
        public DbSet<GuestBook> GuestBooks { get; set; }
    }
}
