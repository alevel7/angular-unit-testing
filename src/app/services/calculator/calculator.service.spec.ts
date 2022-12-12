import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerService: LoggerService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(CalculatorService);
    // loggerService = new LoggerService();
    loggerService = jasmine.createSpyObj('loggerService', ['log'])
    service = new CalculatorService(loggerService)
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should add two numbers', () => {
    const result = service.add(2, 3);
    expect(loggerService.log).toHaveBeenCalledTimes(1)
    expect(result).toBe(5)
  });

  it('should subtract two numbers', () => {
    const result = service.subtract(2, 3);
    expect(loggerService.log).toHaveBeenCalledTimes(1)
    expect(result).toBe(-1)
  });
});
