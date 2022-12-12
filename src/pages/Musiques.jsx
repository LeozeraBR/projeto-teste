import React from 'react';
import CardList from '../card-list/Card-list';
let MUSIQUES = [
  {
    id: '1',
    auteur: 'Daft Punk',
    annee: '2013',
    title: 'Get Lucky',
    imagemUrl:
      ' https://media.pitchfork.com/photos/5931c188d4294b0bc2dd7f7e/16:9/w_1280,c_limit/81bd60e2.jpg',
  },

  {
    id: '2',
    auteur: 'DeadMau5',
    annee: '2017',
    title: 'Um rato muito louco',
    imagemUrl:
      'https://www.guettapen.com/wp-content/uploads/2022/04/deadmau5-press-photo-2019-billboard-1548-1000x600-1.jpeg',
  },

  {
    id: '3',
    auteur: 'Racionais',
    annee: '1991',
    title: 'Sobrevivendo no inferno',
    imagemUrl: 'https://m.media-amazon.com/images/I/919bTGWXAxL._SX425_.jpg',
  },
  {
    id: '4',
    auteur: 'Le Chat Polux',
    annee: '2020',
    title: 'Le chat PoPo',
    imagemUrl:
      'https://i.pinimg.com/474x/ce/0c/c5/ce0cc58d99d7f8862a35499d50c17029.jpg',
  },
];

const Musiques = () => {
  return (
    <div>
      <CardList oeuvres={MUSIQUES} />
    </div>
  );
};

export default Musiques;
