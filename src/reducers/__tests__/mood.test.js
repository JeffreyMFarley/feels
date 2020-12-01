import sut from '../mood'

describe('mood reducer', () => {
  it('should handle initial state', () => {
    expect(sut(undefined, {})).toEqual({
      anger: 0,
      disgust: 0,
      energy: 3,
      fear: 0,
      happy: 0,
      pain: 0,
      sad: 0,
      surprise: 0,
      tender: 0
    });
  });
});
