import { TestBed } from '@angular/core/testing';

import { WeatherFakeService } from './weather-fake.service';

describe('WeatherFakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherFakeService = TestBed.get(WeatherFakeService);
    expect(service).toBeTruthy();
  });
});
