using EATMS.Application.DTOs;

namespace EATMS.Application.Interfaces
{
    public interface IAssetService
    {
        Task<IEnumerable<AssetDto>> GetAllAsync();
        Task<AssetDto?> GetByIdAsync(Guid id);
        
        Task<AssetDto> CreateAsync(CreateAssetDto createAssetDto);

        Task<AssetDto?> UpdateAsync(Guid id, CreateAssetDto updateAssetDto);

        Task<bool> DeleteAsync(Guid id);

    }
}
