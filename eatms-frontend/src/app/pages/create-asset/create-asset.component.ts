import { Component } from '@angular/core';
import { AssetService } from 'src/app/services/asset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent {

  assetCode: string = '';

  assetName: string = '';

  assetType: string = '';

  status: string = '';

  constructor(
    private assetService: AssetService,
    private router: Router
  ) { }

  createAsset() {

    const asset = {
      assetCode: this.assetCode,
      assetName: this.assetName,
      assetType: this.assetType,
      status: this.status
    };

    this.assetService.createAsset(asset).subscribe({
      next: () => {
        alert('Asset created successfully');
        this.router.navigate(['/assets']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
