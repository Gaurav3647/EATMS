namespace EATMS.Application.DTOs
{
    public class AssetDto
    {
        public Guid Id { get; set; }
        public string AssetCode { get; set; } = null!;
        public string AssetName { get; set; } = null!;

        public string AssetType { get; set; }

        public string Status { get; set; } = null!;
    }
}
