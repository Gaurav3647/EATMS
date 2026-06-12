using Microsoft.EntityFrameworkCore;
using EATMS.Domain.Entities;

namespace EATMS.Infrastructure.Persistence
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Asset> Assets { get; set; }

        public DbSet<User> Users { get; set; }  

        public DbSet<TaskItem> Tasks {get ; set; }
    }
    

}


