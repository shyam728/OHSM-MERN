import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get('getproperty')
  async getAllProperties() {
    return this.propertyService.getAllProperties();
  }

  @Post('createproperty')
  async createProperty(@Body() propertyData: any) {
    return this.propertyService.createProperty(propertyData);
  }

  @Get('getproperty/:PropertyId')
  async getProperty(@Param('PropertyId') propertyId: string) {
    return this.propertyService.getProperty(propertyId);
  }

  @Put('updateproperty/:PropertyId')
  async updateProperty(@Param('PropertyId') propertyId: string, @Body() propertyData: any) {
    return this.propertyService.updateProperty(propertyId, propertyData);
  }

  @Delete('deleteproperty/:PropertyId')
  async deleteProperty(@Param('PropertyId') propertyId: string) {
    return this.propertyService.deleteProperty(propertyId);
  }
}
