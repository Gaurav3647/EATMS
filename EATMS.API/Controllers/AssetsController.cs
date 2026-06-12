using Microsoft.AspNetCore.Mvc;
using EATMS.Application.Interfaces;
using EATMS.Application.DTOs;



namespace EATMS.API.Controllers
{
    [ApiController]
    [Route("api/assets")]
    public class AssetsController : ControllerBase
    {
        private readonly IAssetService _assetService;

        public AssetsController(IAssetService assetService)
        {
            _assetService = assetService;
        }

            [HttpGet]
            public async Task<IActionResult> GetAll()
            {
                    var assets = await _assetService.GetAllAsync();
                    return Ok(assets);
            }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var asset = await _assetService.GetByIdAsync(id);

            if (asset == null)
                return NotFound();

            return Ok(asset);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] CreateAssetDto updateAssetDto)
        {
            var updatedAsset = await _assetService.UpdateAsync(id, updateAssetDto);

            if (updatedAsset == null)
                return NotFound();

            return Ok(updatedAsset);
        }

        [HttpPost]
            public async Task<ActionResult<AssetDto>> Create([FromBody] CreateAssetDto createAssetDto)
            {
                    var createdAsset = await _assetService.CreateAsync(createAssetDto);
                    return Ok(createdAsset);
            }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var deleted = await _assetService.DeleteAsync(id);

            if (!deleted)
                return NotFound();

            return Ok("Asset deleted successfully");
        }

    }
}
