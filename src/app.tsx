import * as React from 'react';
import {createRoot} from 'react-dom/client';

import '../src/assets/style.css';


async function addSticky1() {
  const image = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/e9/a1/41/e9a141d9a0d1054584ade71583327e52.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image);
  
  const image2 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/8d/fe/f5/8dfef5ea442db829a0fb9647303548a5.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image2);

  const image3 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/fb/b2/63/fbb263af3cd454066ed1a007c43d35fc.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image3);

  const image4 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c3/7a/25/c37a2518f4e7333e176e6f8fe830916a.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image4);

  const image5 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/ef/88/31/ef88319e537de003a537a786450aeb50.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image5);

  const image6 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/d9/e8/6d/d9e86d752d2fb0f6d8000056315a4b52.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image6);

  const image7 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/df/ed/e0/dfede0cbb0891c48a7e250534cb0fa24.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image7);

  const image8 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/d6/10/cf/d610cf674ead9a9cbef0e0c58fe0d062.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image8);

  const image9 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/17/8a/50/178a50a928bbb02d652bf7eb7e1c0243.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image9);

  const image10 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/49/d9/9f/49d99fdb0a61f00a27c26b23570b1d11.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image10);

  const image11 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/2e/eb/d0/2eebd0ab577d3d6a0c6111cb90dcd607.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image11);

  const image12 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/93/0e/3a/930e3a925ea86a16469165de96152b36.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image12);

  const image13 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/83/7a/a9/837aa91b40c953afe59e3d1415593dbb.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image13);

  const image14 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/b9/16/43/b91643029849b520389f5e0b60ff87c5.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image14);

  const image15 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/a2/c7/48/a2c74816ba345086f2c9777723d80c3e.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image15);

  const image16 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/53/5b/a6/535ba6b744b82fb5bf8ff56aa0f1c8c7.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image16);

  const image17 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/bf/85/6a/bf856af2171345a033ae6d2b9f22d53f.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image17);

  const image18 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/d8/89/4f/d8894f4e63662a013cb63c9a46490fa2.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image18);

  const image19 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/44/66/00/4466001159a2dfe0c708bd9255c0393c.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image19);

  const image20 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/22/f4/e5/22f4e59ad8cae43016b2f1f38ec39e04.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image20);

  const image21 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/6d/cb/cd/6dcbcd88a5dde8fd4e6abde78300b8d5.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image21);

  const image22 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/aa/8d/a9/aa8da99af3b3860062f01148a96e1b03.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image22);

  const image23 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/6a/3e/0a/6a3e0a9c99f4a1b504931e224dfc2d11.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image23);

  const image24 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/61/ad/3f/61ad3fa6244f999cde04facb2fce2afd.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image24);

  const image25 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/e4/78/63/e47863ef5f5af4c18416d9c86315deee.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image25);

  const image26 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/99/d8/8f/99d88f26e079a6edc2cc6fae421dbb71.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image26);

  const image27 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/cc/e5/8d/cce58d6e8137315de6689734f00f65bf.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image27);

  const image28 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/dc/c4/78/dcc478883c680f6c2d6e838ae5657b29.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image28);

  const image29 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/26/23/2b/26232b39945f9eddd99178017b7a8442.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image29);

  const image30 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/00/bd/06/00bd067cee65ec5f5602364e9c5c2dd5.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image30);

  const image31 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/46/fb/12/46fb1260a37cc3de88054025ed73eeb8.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image31);

  const image32 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/97/91/36/979136b4d6dc108dd78e6af88187926b.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image32);

  const image33 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/6d/36/6e/6d366efb4023b0264eab1cb55abf8e81.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image33);

  const image34 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/dc/dc/c0/dcdcc081541197c035f820ca063871b2.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image34);

  const image35 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/21/0a/db/210adba339d36154b63842f4e998e028.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image35);

  const image36 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/cd/71/fc/cd71fcb2029e31c90d5a7ace52126de8.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image36);

  const image37 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/59/19/ee/5919eefe6f90dfcd78e8a99169d420eb.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image37);

  const image38 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/bb/c8/69/bbc86976dcb2287aa718954a8ef6590a.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image38);

  const image39 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/3a/d9/38/3ad938a8dc00689a136d6f4b865cdf61.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image39);

  const image40 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/a1/e7/7e/a1e77e181dc21df2b3e472fba1ad8ea7.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image40);

  const image41 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/d1/8c/7c/d18c7c692c40b5f4c4b1add7637e833e.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image41);

  const image42 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c2/d1/a9/c2d1a9d6caa7d0bf90385fbfc8d31a1d.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image42);

  const image43 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/03/4b/a2/034ba2b1f6e74748e1f6ca46f3f9f827.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image43);

  const image44 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/0b/04/4b/0b044bb3486798bcc3423b89e2fbb681.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image44);

  const image45 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/b2/4e/17/b24e17fd9bebf276694e346ea0dda01f.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image45);

  const image46 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/49/69/b8/4969b8ef0c9800a22e4cb1c925ac4d64.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image46);

  const image47 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/58/c8/84/58c884cc17b2809efd670c72dd5cb6cf.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image47);

  const image48 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/66/a3/cb/66a3cb0ff92f3f5f0db052d58bb4edb6.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image48);

  const image49 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/8a/1b/7e/8a1b7e0c64055f7b4c1f957bb178a7af.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image49);

  const image50 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/1a/be/1e/1abe1e82df476144b2c9b88e0ec91bcd.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image50);

  const image51 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c2/06/e9/c206e9f2e0eb5766e7ebddc228290ad9.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image51);

  const image52 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/be/88/85/be88856eef2cbb2bb46658dd3fd1b963.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image52);

  const image53 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/fd/f5/b3/fdf5b31fbdb79cc322751b3e019b7774.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image53);

  const image54 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/d0/c0/01/d0c001162771fde9942c49b6c0620646.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image54);

  const image55 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/19/f5/68/19f568200ead11faa500633f1a36b0ed.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image55);

  const image56 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/86/78/34/867834e56eac6a357a42fbc116b0d0f6.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image56);

  const image57 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c8/80/c4/c880c4cff4b63911d6ce08a765bd0f4b.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image57);

  const image58 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c1/a3/0e/c1a30e949d1d95d344d5628cd972c5a2.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image58);

  const image59 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/ab/fa/f3/abfaf351e3b4eb41f6e5c646a013ba61.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image59);

  const image60 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/07/21/92/07219257b9fc4db65f7d167662a226b9.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image60);

  const image61 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/a4/f7/e6/a4f7e69be2af3f31967d9c0f67bfa36b.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image61);

  const image62 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/ff/7b/70/ff7b7071c33c5b6450ae73c401ff977b.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image62);

  const image63 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/a7/4c/3c/a74c3c808d7b2b4c3a2eef10b739dd4b.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image63);

  const image64 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/25/d9/bf/25d9bfd1dec7eb2ed8641f89cb7e1c6d.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image64);
  };

async function addSticky2() {
  const image = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/67/74/ab/6774ab2768509910d04939ee415dbc1f.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image);
  
  const image2 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c8/af/d0/c8afd0540cc7e30d3d8fb591e7abdd5a.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image2);

  const image3 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/fc/29/27/fc292712f51dcdca6305b0d0051df927.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image3);

  const image4 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/a0/f7/ad/a0f7ad4f89e4f1698051961cb828326b.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 0, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image4);

  const image11 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/6d/11/df/6d11df3feda8ca425e86b66b84afafcb.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image11);

  const image12 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/be/c8/45/bec845ee2fbe0b76375246ff4f0cbbfe.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image12);

  const image13 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/5e/d0/db/5ed0dbba246c6bf95f4033fa6a923164.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image13);

  const image14 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/19/58/f1/1958f12a3cb6d34be1583a1392a0bd27.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 1300, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image14);

  const image21 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/14/27/4b/14274bb11c3127cb1d7d50619fa6408d.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image21);

  const image22 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/5c/09/86/5c0986d2060ab76b7eb6c44f3c2fcebc.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image22);

  const image23 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/9e/ae/03/9eae03f7705d6bcbce3c771f341d6490.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image23);

  const image24 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/75/a0/72/75a0728a5407fba8e2d0c140486839eb.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image24);

  const image25 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/e0/8f/03/e08f038e98d74c57f087d270039fe01c.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image25);

  const image26 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/1b/6a/e0/1b6ae094275837e6f47644c188962879.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image26);

  const image27 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/43/2b/c4/432bc441709f91f2cb14591621b358f9.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image27);

  const image28 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/92/12/f5/9212f500bc504329dd35d178719ac46a.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image28);

  const image29 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/e1/ba/9f/e1ba9f3f6497927c11776636e9e6429f.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image29);

  const image30 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/bd/35/ae/bd35ae557f44f6aa9f83a8e0c7158036.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 2600, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image30);

  const image31 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/9f/59/4f/9f594fc9dfe53408670e604855667a0e.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image31);

  const image32 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/51/86/32/51863208d01fe5a63a792aa051b214bd.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image32);

  const image33 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/d3/1f/6c/d31f6c891b110819711c86042c27a286.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image33);

  const image34 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/75/48/89/7548899974313ea66648e98689492d50.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image34);

  const image35 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/ce/94/74/ce94746696a25902882db14035540fe2.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image35);

  const image36 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/dc/06/59/dc0659c9464362703e8a678d6834a731.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image36);

  const image37 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/41/e2/40/41e240c4420873ceb76ec4ab82d52985.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image37);

  const image38 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/65/e8/d9/65e8d92379b3467a0547a8f9857f2a53.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image38);

  const image39 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/b8/0d/92/b80d924851d7c683de4e72da499313e3.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image39);

  const image40 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/dc/72/22/dc72221db2970d72c61669e73e9a734e.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 3900, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image40);

  const image41 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/a9/55/e6/a955e62f337c81284235b7b0e169069c.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image41);

  const image42 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/bd/1f/0c/bd1f0c18a850fce35b7b234aa2cf7567.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image42);

  const image43 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/cf/ac/89/cfac8915080a8dc07c9faa27b6113658.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image43);

  const image44 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/88/f0/f8/88f0f80f512cb6670a1be0ab338f91e4.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image44);

  const image45 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/11/7a/5a/117a5a9dfe4e0e986391ed7f772facf8.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image45);

  const image46 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/5b/23/ab/5b23ab3046049c12603d7e771dd02071.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image46);

  const image47 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/27/33/72/273372d08ca8543b720ec43eea178c3d.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image47);

  const image48 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/91/4a/3c/914a3c127f60df6ba8f77230d775d68d.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image48);

  const image49 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/f6/c5/1d/f6c51d10dec0783f3a86715656bb236a.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image49);

  const image50 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/df/cb/75/dfcb75d5befb729e351fcd9e954d52d6.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 5200, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image50);

  const image51 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/a6/d6/4b/a6d64bb827567c8399179b3ef6525f59.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image51);

  const image52 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/1b/13/de/1b13de562d99f98712f0705d8d4f5d38.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image52);

  const image53 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/56/a3/fb/56a3fbb5ad3f893d9321315398de3910.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image53);

  const image54 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/4e/91/48/4e9148e6e5ba1ee97385d0b6ccf020ab.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image54);

  const image55 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c3/8f/ff/c38fff2a4a878858d0b6a140686428ee.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image55);

  const image56 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/34/82/ba/3482babf748ebc9d21c574d56444d2e8.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image56);

  const image57 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/b3/97/7e/b3977e54db147c2a516e1264cdfdb7b3.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image57);

  const image58 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/9e/99/99/9e99993380f084199f012387b19d56c7.jpg',
    x: 6300, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image58);

  const image59 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/5c/f0/4b/5cf04b0977b62bee6565c6c15a3bada3.jpg',
    x: 7200, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image59);

  const image60 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/51/71/10/5171104754a3221951da061efefbaf79.jpg',
    x: 8100, // Default value: horizontal center of the board
    y: 6500, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image60);

  const image61 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/19/13/ce/1913ce4ba910bf38310dab6c4a1b556a.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image61);

  const image62 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/74/63/3b/74633b81abe394a2b96d11ea355c963c.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image62);

  const image63 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/00/aa/ba/00aaba6e28ba9f530dca97bae5980758.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image63);

  const image64 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/28/e6/68/28e6686d8bae9ed030b5a54de5de2ce1.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image64);

  const image65 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/1f/49/ea/1f49ea6b600a6f3ac1f146960da96cd8.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image65);

  const image66 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/bc/d6/c8/bcd6c836f63ec117194bcaa1f3d3003c.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image66);

  const image67 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/ff/9c/9b/ff9c9b36ffa324f8a8a488d8d227fad8.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 7800, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image67);

  const image71 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/c1/cb/de/c1cbdec56ecec8b4ccdb59298a2fbc06.jpg',
    x: 0, // Default value: horizontal center of the board
    y: 9100, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image71);

  const image72 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/0c/38/60/0c3860832abda2156601a00883abdd90.jpg',
    x: 900, // Default value: horizontal center of the board
    y: 9100, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });
  
  // Output the created item to the developer console
  console.log(image72);

  const image73 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/ae/02/10/ae02104030a26b0db2fbb9377dc116f2.jpg',
    x: 1800, // Default value: horizontal center of the board
    y: 9100, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });

  // Output the created item to the developer console
  console.log(image73);

  const image74 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/28/03/2b/28032b63a4ec73b66507bbc212d9e8f6.jpg',
    x: 2700, // Default value: horizontal center of the board
    y: 9100, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });

  // Output the created item to the developer console
  console.log(image74);

  const image75 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/e5/84/ec/e584ec6a02a061f82af27ac110759403.jpg',
    x: 3600, // Default value: horizontal center of the board
    y: 9100, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });

  // Output the created item to the developer console
  console.log(image75);

  const image76 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/be/3e/30/be3e304dbbab42e4ec986ac81660358c.jpg',
    x: 4500, // Default value: horizontal center of the board
    y: 9100, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });

  // Output the created item to the developer console
  console.log(image76);

  const image77 = await miro.board.createImage({
    title: 'This is an image',
    url: 'https://i.pinimg.com/474x/e2/2a/79/e22a7920bb9b9aabbf176343d32100cd.jpg',
    x: 5400, // Default value: horizontal center of the board
    y: 9100, // Default value: vertical center of the board
    width: 800, // Set either 'width', or 'height'
    rotation: 0.0,
  });

  // Output the created item to the developer console
  console.log(image77);

  };

async function addSticky3() {
    const image = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/e9/a1/41/e9a141d9a0d1054584ade71583327e52.jpg',
      x: 0, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image);
    
    const image2 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/8d/fe/f5/8dfef5ea442db829a0fb9647303548a5.jpg',
      x: 900, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image2);
  
    const image3 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/fb/b2/63/fbb263af3cd454066ed1a007c43d35fc.jpg',
      x: 1800, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image3);
  
    const image4 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/c3/7a/25/c37a2518f4e7333e176e6f8fe830916a.jpg',
      x: 2700, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image4);
  
    const image5 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/ef/88/31/ef88319e537de003a537a786450aeb50.jpg',
      x: 3600, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image5);
  
    const image6 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/d9/e8/6d/d9e86d752d2fb0f6d8000056315a4b52.jpg',
      x: 4500, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image6);
  
    const image7 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/df/ed/e0/dfede0cbb0891c48a7e250534cb0fa24.jpg',
      x: 5400, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image7);
  
    const image8 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/d6/10/cf/d610cf674ead9a9cbef0e0c58fe0d062.jpg',
      x: 6300, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image8);
  
    const image9 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/17/8a/50/178a50a928bbb02d652bf7eb7e1c0243.jpg',
      x: 7200, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image9);
  
    const image10 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/49/d9/9f/49d99fdb0a61f00a27c26b23570b1d11.jpg',
      x: 8100, // Default value: horizontal center of the board
      y: 0, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image10);
  
    const image11 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/2e/eb/d0/2eebd0ab577d3d6a0c6111cb90dcd607.jpg',
      x: 0, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image11);
  
    const image12 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/93/0e/3a/930e3a925ea86a16469165de96152b36.jpg',
      x: 900, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image12);
  
    const image13 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/83/7a/a9/837aa91b40c953afe59e3d1415593dbb.jpg',
      x: 1800, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image13);
  
    const image14 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/b9/16/43/b91643029849b520389f5e0b60ff87c5.jpg',
      x: 2700, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image14);
  
    const image15 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/a2/c7/48/a2c74816ba345086f2c9777723d80c3e.jpg',
      x: 3600, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image15);
  
    const image16 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/53/5b/a6/535ba6b744b82fb5bf8ff56aa0f1c8c7.jpg',
      x: 4500, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image16);
  
    const image17 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/bf/85/6a/bf856af2171345a033ae6d2b9f22d53f.jpg',
      x: 5400, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image17);
  
    const image18 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/d8/89/4f/d8894f4e63662a013cb63c9a46490fa2.jpg',
      x: 6300, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image18);
  
    const image19 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/44/66/00/4466001159a2dfe0c708bd9255c0393c.jpg',
      x: 7200, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image19);
  
    const image20 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/22/f4/e5/22f4e59ad8cae43016b2f1f38ec39e04.jpg',
      x: 8100, // Default value: horizontal center of the board
      y: 1300, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image20);
  
    const image21 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/d8/19/df/d819df3e98b8f95a444f6c168874b9fb.jpg',
      x: 0, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image21);
  
    const image22 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/ba/79/62/ba796271650263ac69e876bde2b02d2a.jpg',
      x: 900, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image22);
  
    const image23 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/a0/10/00/a0100016cd5756f37947a83e4ccafdae.jpg',
      x: 1800, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image23);
  
    const image24 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/e0/19/16/e01916f8b48786dad7e66891ed5c2a94.jpg',
      x: 2700, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image24);
  
    const image25 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/27/59/6e/27596e14461f1af101247fe97277ad51.jpg',
      x: 3600, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image25);
  
    const image26 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/c6/d9/cd/c6d9cd1536f57a20f4fe0f45930f87a5.jpg',
      x: 4500, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image26);
  
    const image27 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/15/94/71/159471f500e264989265acd2b373d4ab.jpg',
      x: 5400, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image27);
  
    const image28 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/27/24/4b/27244be94819dc4b55775d99bdb44666.jpg',
      x: 6300, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image28);
  
    const image29 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/03/c2/b7/03c2b74224f3ecda01e9f48e88fa03ce.jpg',
      x: 7200, // Default value: horizontal center of the board
      y: 2600, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image29);
  
    const image31 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/a5/62/c6/a562c631dfd554f92632fe0bdc380845.jpg',
      x: 0, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image31);
  
    const image32 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/bd/ee/9c/bdee9c2186b2e97173fc635b5cb1caad.jpg',
      x: 900, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image32);
  
    const image33 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/8e/5d/de/8e5dde8eb431d6aadf636ae2c945750a.jpg',
      x: 1800, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image33);
  
    const image34 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/70/3e/d3/703ed37c2bf8c44e15b3b71ba2262685.jpg',
      x: 2700, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image34);
  
    const image35 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/68/f4/9f/68f49fa9ede28cc739aef18dea4af575.jpg',
      x: 3600, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image35);
  
    const image36 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/27/37/0d/27370dca578a1cb16272691283d95dfb.jpg',
      x: 4500, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image36);
  
    const image37 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/95/47/8d/95478db32ba7ae305a708762a71fd429.jpg',
      x: 5400, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image37);
  
    const image38 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/0c/b6/59/0cb65903e3e37ee47eabb0e048f3f15a.jpg',
      x: 6300, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image38);
  
    const image39 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/3d/61/dd/3d61dd6c1f5bab085f9bc6e38cb26598.jpg',
      x: 7200, // Default value: horizontal center of the board
      y: 3900, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image39);
  
    const image41 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/2e/a6/4b/2ea64b81861a38698c7fd2defed646f7.jpg',
      x: 0, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image41);
  
    const image42 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/c8/57/f7/c857f751c0e94f9b83e00f316e1482f8.jpg',
      x: 900, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image42);
  
    const image43 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/d7/95/26/d79526b1df65616d45a5007871a96c90.jpg',
      x: 1800, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image43);
  
    const image44 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/8b/5e/9d/8b5e9d99856fbd2fc792257b41d08600.jpg',
      x: 2700, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image44);
  
    const image45 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/d2/ba/07/d2ba0791cdc69d060c6c753badf0fdb2.jpg',
      x: 3600, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image45);
  
    const image46 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/22/db/8e/22db8ed0674cdb2864e8c3f69dfcff95.jpg',
      x: 4500, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image46);
  
    const image47 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/b5/f1/51/b5f1519c7f7905141e3f1995f8603f57.jpg',
      x: 5400, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image47);
  
    const image48 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/b0/95/65/b09565ad27eae4ca08f1785be9bde10a.jpg',
      x: 6300, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image48);
  
    const image49 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/60/a4/65/60a465d489ced4e3531885345a7d2289.jpg',
      x: 7200, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image49);
  
    const image50 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/4b/04/4d/4b044dd50d67766613572465006b4c71.jpg',
      x: 8100, // Default value: horizontal center of the board
      y: 5200, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image50);
  
    const image51 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/e9/e2/65/e9e26579c4b2241bbc4ef6e08e170009.jpg',
      x: 0, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image51);
  
    const image52 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/98/99/bb/9899bb5f96345094c7b3f05a15441969.jpg',
      x: 900, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image52);
  
    const image53 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/98/99/bb/9899bb5f96345094c7b3f05a15441969.jpg',
      x: 1800, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image53);
  
    const image54 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/59/cf/26/59cf26d13b3f81f1597b5ccd22ef35b3.jpg',
      x: 2700, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image54);
  
    const image55 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/82/3b/b5/823bb565acf6730f10da30da414c43f1.jpg',
      x: 3600, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image55);
  
    const image56 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/f4/39/f2/f439f249bd8c6f14f17424e3d2827e9b.jpg',
      x: 4500, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image56);
  
    const image57 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/bf/31/3f/bf313f278aa20f0a44a4f05892f4da31.jpg',
      x: 5400, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image57);
  
    const image58 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/a2/7f/f7/a27ff707016446aed279d7357e40c169.jpg',
      x: 6300, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image58);
  
    const image59 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/a2/7f/f7/a27ff707016446aed279d7357e40c169.jpg',
      x: 7200, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image59);
  
    const image60 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/09/e7/fa/09e7faca25309ffdc65d94c789ccebe4.jpg',
      x: 8100, // Default value: horizontal center of the board
      y: 6500, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image60);
  
    const image61 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/77/05/0a/77050aa67cc5a665a1415a3bf856d814.jpg',
      x: 0, // Default value: horizontal center of the board
      y: 7800, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image61);
  
    const image62 = await miro.board.createImage({
      title: 'This is an image',
      url: 'https://i.pinimg.com/474x/6d/e2/17/6de21785d7998bc3e4de00c007ed604e.jpg',
      x: 900, // Default value: horizontal center of the board
      y: 7800, // Default value: vertical center of the board
      width: 800, // Set either 'width', or 'height'
      rotation: 0.0,
    });
    
    // Output the created item to the developer console
    console.log(image62);
  
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
        <h1 className='blackColor'>Phaseを選択してください</h1>
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
          onClick={addSticky1}
        >
          Phase1
        </a>
        <a
          className="button button-primary"
          // target="_blank"
          // href="https://developers.miro.com"
          onClick={addSticky2}
        >
          Phase2
        </a>
        <a
          className="button button-primary"
          // target="_blank"
          // href="https://developers.miro.com"
          onClick={addSticky3}
        >
          Phase3
        </a>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
