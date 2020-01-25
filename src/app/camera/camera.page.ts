import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  constructor(private camera: Camera) { }

  ngOnInit() {
  }
  async addPhoto(source :string) {
    if (source === 'library') {
      console.log('library');
      const LibraryImage = this.openLibrary();
      this.image = 'data:image/jpg;base64,' + LibraryImage;
    } else {
      console.log('camera');
      const CameraImage = this.openCamera();
      this.image = 'data:image/jpg;base64,' + CameraImage;
    }
    
  }
 async openLibrary() {
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          targetWidth: 1000,
          targetHeight: 1000,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        return await this.camera.getPicture(options);
      }
      async openCamera() {
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          targetWidth: 1000,
          targetHeight: 1000,
          sourceType: this.camera.PictureSourceType.CAMERA
        };
        return await this.camera.getPicture(options);
      }
    }


