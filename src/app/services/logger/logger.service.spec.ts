import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have any messages on creation', () => {
    expect(service.logs).toEqual([])
  });

  it('should add a new log to logs ', () => {
    service.log('new message')
    expect(service.logs.length).toEqual(1)
  })

  it('should clear the logs when clear() is called', () => {
    service.log('new message')
    service.clear();
    expect(service.logs).toEqual([])
  })
});
