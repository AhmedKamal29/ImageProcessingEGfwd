import QueryTestParameters from '../middleware/QueryTest';
import imageResize from '../routes/api/Resize';

describe('Query Test Parameters ', () => {
  it('test number 1', () => {
    expect(QueryTestParameters(' pic1 ', 400, 400)).toBe(true);
  });
  it('test number 2', () => {
    expect(QueryTestParameters(' pic1 ', 400, 20)).toBe(false);
  });
  it('test number 3', () => {
    expect(QueryTestParameters(' pic ', 1400, 400)).toBe(true);
  });
  it('test number 4', () => {
    expect(QueryTestParameters(' pic ', -30, 400)).toBe(false);
  });
  it('test number 5', () => {
    expect(QueryTestParameters('  ', 400, 400)).toBe(false);
  });
  it('test number 6', () => {
    expect(QueryTestParameters(' pic3 ', 400, 0)).toBe(false);
  });
  it('test number 7', () => {
    expect(QueryTestParameters(' pic1 ', 400, 200)).toBe(true);
  });
});

describe('Image Module ', () => {
  it('test number 1', async () => {
    console.log(__dirname + '/t');
    expect(
      await imageResize.resize(100, 100, './src/images/input/pic.jpg')
    ).toBe(true);
  });
  it('test number 2', async () => {
    expect(
      await imageResize.resize(200, 100, './src/images/input/pic.jpg')
    ).toBe(true);
  });
  it('test number 3', async () => {
    expect(
      await imageResize.resize(500, 500, './src/images/input/pic.jpg')
    ).toBe(true);
  });
  it('test number 4', async () => {
    expect(
      await imageResize.resize(1000, 100, './src/images/input/pic.jpg')
    ).toBe(true);
  });
  it('test number 5', async () => {
    expect(
      await imageResize.resize(200, 150, './src/images/input/pic.jpg')
    ).toBe(true);
  });
});
