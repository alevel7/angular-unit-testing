import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak for value 5', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)')
  });

  it('should display strong for value 15', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(15)).toEqual('15 (strong)')
  });

  it('should display strongest for value 20', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(20)).toEqual('20 (strongest)')
  })
});
