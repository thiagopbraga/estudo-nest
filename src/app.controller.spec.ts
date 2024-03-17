/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  /* create a test to /users/status and that need to return a object with status 200 and message Api is running */
  describe('users/status', () => {
    it('should return "API is running!"', () => {
      expect(appController.getApiStatus()).toEqual({
        status: 200,
        message: 'API is running!',
      });
    });
  });
});
