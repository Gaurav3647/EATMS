using System.Threading.Tasks;
using EATMS.Application.DTOs.Auth;

namespace EATMS.Application.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponseDto> LoginAsync(LoginRequestDto request);

        Task<AuthResponseDto> RegisterAsync(RegisterRequestDto request);

    }
}