import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

// function runGenerator<T extends () => string>(generator: T | { run: T }) {
//   if (typeof generator === 'function') {
//     return generator();
//   }
//   return generator.run();
// }

type TFunction = () => string;

function runGenerator(generator: { run: TFunction }): string;
function runGenerator(generator: TFunction): string;
function runGenerator(generator: TFunction | { run: TFunction }): string {
  if (typeof generator === 'function') {
    return generator();
  }
  return generator.run();
}

it('Should accept an object where the generator is a function', () => {
  const result = runGenerator({
    run: () => 'hello',
  });

  expect(result).toBe('hello');

  type test1 = Expect<Equal<typeof result, string>>;
});

it('Should accept an object where the generator is a function', () => {
  const result = runGenerator(() => 'hello');

  expect(result).toBe('hello');

  type test1 = Expect<Equal<typeof result, string>>;
});
