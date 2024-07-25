import * as React from 'react';
import {createRoot} from 'react-dom/client';

import '../src/assets/style.css';

async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: 'Hello, World!',
  });
  
  await miro.board.viewport.zoomTo(stickyNote);
}

async function addSticky2() {
  const image = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/564x/71/13/21/71132164569436d78548a96597e7a378.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image);
  
  const image2 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/564x/71/13/21/71132164569436d78548a96597e7a378.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image2);
  };
async function addSticky3() {
        const frame1 = await miro.board.createFrame({
          title: 'BlueCard-1_1', //タイトル名
          style: {
            fillColor: 'grayColor', //カラー
          },
          width: 450, //幅サイズ
          height: 642, //高さサイズ
          x: 0 , //x軸
          y: 0, //y軸
        });
        
        //画像
        const imageFrame1_1 = await miro.board.createShape({
          shape: 'rectangle',
          style: {
            color:'whiteColor', // Default text color: '#1a1a1a' (black)
            fillColor: 'whiteColor', // Default shape fill color: transparent (no fill)
            fontFamily: 'open_sans', // Default font type for the text
            fontSize: 14, // Default font size for the text, in dp
            textAlign: 'left', // Default horizontal alignment for the text
            textAlignVertical: 'top', // Default vertical alignment for the text
            borderStyle: 'normal', // Default border line style
            // borderOpacity: 0, // Default border color opacity: no opacity
            borderColor: 'blueColor', // Default border color: '#ffffff` (white)
            borderWidth: 3, // Default border width
            fillOpacity: 1.0, // Default fill color opacity: no opacity
          },
          x: frame1.x, // Default value: center of the board
          y: frame1.y-158, // Default value: center of the board
          width: 410,
          height: 290,
        });
  
        const image1_1 = await miro.board.createImage({
          url: 'https://i.pinimg.com/736x/09/59/32/0959324325aec251dae2378c1dd5f303.jpg',
          width:280,
          x: frame1.x, // Default value: horizontal center of the board
          y: frame1.y-160, // Default value: vertical center of the board
          rotation: 0.0,
        });
        
        //番号
        const number1_1 = await miro.board.createShape({
          content: '1' ,
          // content: num , //→const num = ['1','2','3'....];
          shape: 'rhombus',
          style: {
            color: 'whiteColor', // Default text color: '#1a1a1a' (black)
            fillColor: 'blueColor', // Default shape fill color: transparent (no fill)
            fontFamily: 'noto_sans_jp', // Default font type for the text
            fontSize: 32, // Default font size for the text, in dp
            textAlign: 'center', // Default horizontal alignment for the text
            textAlignVertical: 'middle', // Default vertical alignment for the text
            borderStyle: 'normal', // Default border line style
            // borderOpacity: 0, // Default border color opacity: no opacity
            borderColor: 'grayColor', // Default border color: '#ffffff` (white)
            borderWidth: 4, // Default border width
            fillOpacity: 1.0, // Default fill color opacity: no opacity
          },
          x: frame1.x-180, // Default value: center of the board
          y: frame1.y-278, // Default value: center of the board
          width: 78,
          height: 78,
        });  
  
        //タイトル
        const title1_1 = await miro.board.createShape({
          content: '<b>顧客からの連絡</b>',
          shape: 'rectangle',
          style: {
            color: 'whiteColor', // Default text color: '#1a1a1a' (black)
            fillColor: 'blueColor', // Default shape fill color: transparent (no fill)
            fontFamily: 'open_sans', // Default font type for the text
            fontSize: 19, // Default font size for the text, in dp
            textAlign: 'center', // Default horizontal alignment for the text
            textAlignVertical: 'middle', // Default vertical alignment for the text
            borderStyle: 'normal', // Default border line style
            borderOpacity: 0, // Default border color opacity: no opacity
            borderColor: 'whiteColor', // Default border color: '#ffffff` (white)
            borderWidth: 0, // Default border width
            fillOpacity: 1.0, // Default fill color opacity: no opacity
          },
          x: frame1.x, // Default value: center of the board
          y: frame1.y+24, // Default value: center of the board
          width: 410,
          height: 58,
        });
  
        //テキスト
        const text1_1 = await miro.board.createShape({
          content: '<b>顧客から暖房がきかないと連絡を受ける</b>',
          shape: 'rectangle',
          style: {
            color: 'blackColor', // Default text color: '#1a1a1a' (black)
            fillColor: 'whiteColor', // Default shape fill color: transparent (no fill)
            fontFamily: 'open_sans', // Default font type for the text
            fontSize: 15, // Default font size for the text, in dp
            textAlign: 'left', // Default horizontal alignment for the text
            textAlignVertical: 'top', // Default vertical alignment for the text
            borderStyle: 'normal', // Default border line style
            borderOpacity: 0, // Default border color opacity: no opacity
            borderColor: 'blueColor', // Default border color: '#ffffff` (white)
            borderWidth: 3, // Default border width
            fillOpacity: 1.0, // Default fill color opacity: no opacity
          },
          x: frame1.x, // Default value: center of the board
          y: frame1.y+182, // Default value: center of the board
          width: 410,
          height: 244,
        });
        //タイプフレーム
        const typeFrame1_1 = await miro.board.createShape({
          shape: 'rhombus',
          style: {
            color: 'whiteColor', // Default text color: '#1a1a1a' (black)
            fillColor: 'blueColor', // Default shape fill color: transparent (no fill)
            fontFamily: 'noto_serif_sc', // Default font type for the text
            fontSize: 32, // Default font size for the text, in dp
            textAlign: 'center', // Default horizontal alignment for the text
            textAlignVertical: 'middle', // Default vertical alignment for the text
            borderStyle: 'normal', // Default border line style
            borderOpacity: 0, // Default border color opacity: no opacity
            borderColor: 'grayColor', // Default border color: '#ffffff` (white)
            borderWidth: 2, // Default border width
            fillOpacity: 1.0, // Default fill color opacity: no opacity
          },
          x: frame1.x, // Default value: center of the board
          y: frame1.y+296, // Default value: center of the board
          width: 50,
          height: 50,
        });  
        await frame1.add(imageFrame1_1);
        await frame1.add(image1_1);
        await frame1.add(number1_1);
        await frame1.add(title1_1);
        await frame1.add(text1_1);
        await frame1.add(typeFrame1_1);
        await miro.board.viewport.zoomTo(frame1)
  };
  

const App: React.FC = () => {
  React.useEffect(() => {
    
  }, []);

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <img src="/src/assets/BLUE59結果.png" alt="" />
      </div>
      <div className="cs1 ce12">
        <h1 className='blackColor'>フェーズを選択してください</h1>
        <p className='aiu'>You've just created your first Miro app!</p>
        <p className='aiu'>
          To explore more and build your own app, see the Miro Developer
          Platform documentation.
        </p>
      </div>
      <div className="cs1 ce12">
        <a
          className="button button-primary"
          // target="_blank"
          // href="https://developers.miro.com"
          onClick={addSticky2}
        >
          フェーズ１
        </a>
        <a
          className="button button-primary"
          // target="_blank"
          // href="https://developers.miro.com"
          onClick={addSticky}
        >
          フェーズ2
        </a>
        <a
          className="button button-primary"
          // target="_blank"
          // href="https://developers.miro.com"
          onClick={addSticky3}
        >
          フェーズ3
        </a>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
