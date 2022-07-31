import generateRoundRobinPair, { WAIT } from './generateRoundRobinPair';

describe('Round Robin Algorithm', () => {
  it.each`
    name           | values                                      | expectedOutput
    ${'Odd'}       | ${['1', '2', '3']}                          | ${`[["1","3","2","${WAIT}"],["3","2","1","${WAIT}"],["2","1","3","${WAIT}"]]`}
    ${'Even'}      | ${['1', '2', '3', '4']}                     | ${'[["1","3","2","4"],["3","2","1","4"],["2","1","3","4"]]'}
    ${'Odd More'}  | ${['1', '2', '3', '4', '5', '6', '7']}      | ${`[["1","5","2","6","3","7","4","${WAIT}"],["5","6","1","7","2","4","3","${WAIT}"],["6","7","5","4","1","3","2","${WAIT}"],["7","4","6","3","5","2","1","${WAIT}"],["4","3","7","2","6","1","5","${WAIT}"],["3","2","4","1","7","5","6","${WAIT}"],["2","1","3","5","4","6","7","${WAIT}"]]`}
    ${'Even More'} | ${['1', '2', '3', '4', '5', '6', '7', '8']} | ${'[["1","5","2","6","3","7","4","8"],["5","6","1","7","2","4","3","8"],["6","7","5","4","1","3","2","8"],["7","4","6","3","5","2","1","8"],["4","3","7","2","6","1","5","8"],["3","2","4","1","7","5","6","8"],["2","1","3","5","4","6","7","8"]]'}
  `('given $name input it returns co', ({ values, expectedOutput }) => {
    const output = generateRoundRobinPair(values);
    expect(JSON.stringify(output)).toBe(expectedOutput);
  });
});
