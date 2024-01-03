import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as AWS from 'aws-sdk';

@Injectable()
export class PropertyService {
  private readonly dynamoDB: AWS.DynamoDB.DocumentClient;
  private readonly tableName: string = 'property';

  constructor() {
    this.dynamoDB = new AWS.DynamoDB.DocumentClient({
    //   region: process.env.Region ,
    //   accessKeyId: process.env.ACCESS_KEY_ID,
    //   secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region: 'ap-south-1',
      accessKeyId: 'AKIA3LXPXIKWBMGFIMXG',
      secretAccessKey: '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',
    });
  }



  async getAllProperties() {
    const params: AWS.DynamoDB.DocumentClient.ScanInput = {
      TableName: this.tableName,
    };

    const result = await this.dynamoDB.scan(params).promise();
    return result.Items;
  }

  async createProperty(propertyData: any) {
    const id = uuidv4();

    const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
      TableName: this.tableName,
      Item: {
        id,
        ...propertyData,
      },
    };

    await this.dynamoDB.put(params).promise();
    return { message: 'New Property added successfully', id };
  }

  async getProperty(propertyId: string) {
    const params: AWS.DynamoDB.DocumentClient.GetItemInput = {
      TableName: this.tableName,
      Key: { id: propertyId },
    };

    const result = await this.dynamoDB.get(params).promise();

    if (result.Item) {
      return result.Item;
    } else {
      return { message: 'Property not found' };
    }
  }

  async updateProperty(propertyId: string, propertyData: any) {
    const params: AWS.DynamoDB.DocumentClient.UpdateItemInput = {
      TableName: this.tableName,
      Key: { id: propertyId },
      UpdateExpression: 'SET RbrandName = :RbrandName, nOP = :nOP, ...', // Add all other fields
      ExpressionAttributeValues: {
        ':RbrandName': propertyData.RbrandName,
        ':nOP': propertyData.nOP,
        // Add all other fields
      },
      ReturnValues: 'ALL_NEW',
    };

    const result = await this.dynamoDB.update(params).promise();

    return { message: 'Property updated successfully', property: result.Attributes };
  }

  async deleteProperty(propertyId: string) {
    const params: AWS.DynamoDB.DocumentClient.DeleteItemInput = {
      TableName: this.tableName,
      Key: { id: propertyId },
    };

    const result = await this.dynamoDB.delete(params).promise();

    if (result) {
      return { message: 'Property deleted successfully' };
    } else {
      return { message: 'Property not found' };
    }
  }
}
