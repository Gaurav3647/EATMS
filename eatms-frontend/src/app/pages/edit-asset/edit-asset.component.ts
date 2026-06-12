import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from 'src/app/services/asset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css']
})
export class EditAssetComponent {

  constructor(
    private route: ActivatedRoute,
    private assetService: AssetService,
    private router: Router
  ) { }

  assetId: string = '';
  assetCode: string = '';
  assetName: string = '';
  assetType: string = '';
  status: string = '';

  ngOnInit() {

  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.assetId = id;

    this.assetService.getAssetById(id).subscribe(asset => {

      this.assetCode = asset.assetCode;
      this.assetName = asset.assetName;
      this.assetType = asset.assetType || '';
      this.status = asset.status;

    });
  }
}

updateAsset() {

  const asset = {
    assetCode: this.assetCode,
    assetName: this.assetName,
    assetType: this.assetType,
    status: this.status
  };

  this.assetService.updateAsset(this.assetId, asset).subscribe({
    next: () => {
      alert('Asset updated successfully');
      this.router.navigate(['/assets']);
    },
    error: (error) => {
      console.log(error);
    }
  });
}
}
