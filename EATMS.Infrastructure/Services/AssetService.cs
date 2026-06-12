using EATMS.Application.DTOs;
using EATMS.Application.Interfaces;
using EATMS.Domain.Entities;
using EATMS.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace EATMS.Infrastructure.Services
{
    public class AssetService : IAssetService
    {
       //private readonly AppDbContext _context;
        private readonly IAssetRepository _repository;
        

        /*public AssetService(AppDbContext context)
        {
            _context = context;
        }   */

        public AssetService(IAssetRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<AssetDto>> GetAllAsync()
{
    var assets = await _repository.GetAllAsync();

    return assets.Select(a => new AssetDto
    {
        Id = a.Id,
        AssetCode = a.AssetCode,
        AssetName = a.AssetName,
        Status = a.Status
    });
}

        public async Task<AssetDto?> GetByIdAsync(Guid id)
        {
            var asset = await _repository.GetByIdAsync(id);

            if (asset == null)
                return null;

            return new AssetDto
            {
                Id = asset.Id,
                AssetCode = asset.AssetCode,
                AssetName = asset.AssetName,
                Status = asset.Status
            };
        }

        public async Task<AssetDto> CreateAsync(CreateAssetDto createAssetDto)
        {
            var asset = new Asset
    {
        Id = Guid.NewGuid(),
        AssetCode = "AST-" + DateTime.Now.Ticks,    
        AssetName = createAssetDto.AssetName,
        AssetType = createAssetDto.AssetType,
        Status = createAssetDto.Status
    };

        await _repository.AddAsync(asset);


    return new AssetDto
    {
        Id = asset.Id,
        AssetCode = asset.AssetCode,
        AssetName = asset.AssetName,
        AssetType = asset.AssetType,
        Status = asset.Status
    };
        }

        public async Task<AssetDto?> UpdateAsync(Guid id, CreateAssetDto updateAssetDto)
        {
            var asset = await _repository.GetByIdAsync(id);

            if (asset == null)
                return null;

            asset.AssetName = updateAssetDto.AssetName;
            asset.AssetType = updateAssetDto.AssetType;
            asset.Status = updateAssetDto.Status;

            await _repository.UpdateAsync(asset);

            return new AssetDto
            {
                Id = asset.Id,
                AssetCode = asset.AssetCode,
                AssetName = asset.AssetName,
                AssetType = asset.AssetType,
                Status = asset.Status
            };
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var asset = await _repository.GetByIdAsync(id);

            if (asset == null)
                return false;

            await _repository.DeleteAsync(asset);

            return true;
        }


    }
}
