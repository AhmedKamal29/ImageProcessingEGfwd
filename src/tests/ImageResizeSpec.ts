import { ImageResize } from '../modules/ImageResize';

let InputImage = './src/assets/Images/img.jpg';
let OutputImage = './src/assets/Thumb/output.jpg';

describe('Image Module ', () => {
  it('test number 1', async () => {
    console.log(__dirname + '/t');
    expect(await ImageResize(InputImage, 100, 100, OutputImage)).toBe(true);
  });
  it('test number 2', async () => {
    expect(await ImageResize(InputImage, 200, 200, OutputImage)).toBe(true);
  });
  it('test number 3', async () => {
    expect(await ImageResize(InputImage, 500, 500, OutputImage)).toBe(true);
  });
  it('test number 4', async () => {
    expect(await ImageResize(InputImage, 700, 700, OutputImage)).toBe(true);
  });
  it('test number 5', async () => {
    expect(await ImageResize(InputImage, 1000, 1000, OutputImage)).toBe(true);
  });
});
