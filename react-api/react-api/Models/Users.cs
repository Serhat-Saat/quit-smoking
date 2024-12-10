using System.ComponentModel.DataAnnotations;

namespace react_api.Models
{
    public class Users
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string Name { get; set; } = string.Empty;
        [StringLength(20)]
        public string Surname { get; set; } = string.Empty;
        [StringLength(30)]
        public string Email { get; set; } = string.Empty;
        [StringLength(20)]
        public string Password { get; set; } = string.Empty;
    }
}
