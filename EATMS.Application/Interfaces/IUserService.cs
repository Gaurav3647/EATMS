using EATMS.Application.DTOs;
using EATMS.Application.DTOs.Auth;

namespace EATMS.Application.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<UserDto>> GetAllAsync();
        Task<UserDto?> GetByIdAsync(Guid id);
        Task<UserDto> CreateAsync(RegisterRequestDto request);
        Task<UserDto?> UpdateAsync(Guid id, RegisterRequestDto request);
        Task<bool> DeleteAsync(Guid id);
    }
}