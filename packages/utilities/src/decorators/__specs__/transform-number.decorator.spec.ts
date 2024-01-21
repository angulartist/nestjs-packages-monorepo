import { IsNumber } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { TransformerNumber } from '../transform-number.decorator';

class TestDto {
  @TransformerNumber()
  @IsNumber()
  pin_code = 42;
}

describe('TransformNumber', () => {
  it('should transform the string "1234" into the number 1234', () => {
    const instance = plainToInstance(TestDto, { pin_code: '1234' });

    expect(instance.pin_code).toEqual(1234);
  });

  it('should transform return the non-transformed value if it cannot be converted to an integer', () => {
    const instance = plainToInstance(TestDto, { pin_code: 'true' });

    expect(instance.pin_code).toEqual('true');
  });
});
