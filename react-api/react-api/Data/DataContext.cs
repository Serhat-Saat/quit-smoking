using Microsoft.EntityFrameworkCore;
using react_api.Models;

namespace react_api.Data
{
    public class DataContext :Microsoft.EntityFrameworkCore.DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Users> Users { get; set; }
    }
}
