import { Transform } from 'class-transformer';

export const TransformerNumber = () =>
  Transform(({ value }: { value: string }): number | string => {
    const parsedValue = parseInt(value);

    if (isNaN(parsedValue)) {
      return value;
    }

    return parsedValue;
  });
