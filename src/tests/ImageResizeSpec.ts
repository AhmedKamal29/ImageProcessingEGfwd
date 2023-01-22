import { ImageResize } from '../modules/ImageResize';

let InputImage = './src/assets/Images/img.jpg';
let OutputImage = './src/assets/Thumb/output.jpg';

describe('Image Module ', () => {
  it('test Resize 1', async () => {
    console.log(__dirname + '/t');
    expect(await ImageResize(InputImage, 100, 100, OutputImage)).toBe(true);
  });
});
