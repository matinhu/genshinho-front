import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadService {

  FOLDER = 'jsa-s3/';

  constructor() { }

  uploadFile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIA4YBJ45AD54AKIW5D',
    secretAccessKey: '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',
    region: 'sa-east-1',
      }
    );

    const params = {
      Bucket: 'matinhu-upload-bkt',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}