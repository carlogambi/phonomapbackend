import mongoose from 'mongoose';

const example = {
  id: '13d9fe5b-34a978af-86e400b-555b876',
  title: 'Chiesa Annunziata, interno. A cura di C.Bevegni.',
  author: 'Electropark',
  sounds: [
    'https://soundcloud.com/forevergreenrec/chiesa-annunziata-interno?in=forevergreenrec/sets/geona-sounscape-project',
  ],
  position: ['44.414190385664384', '8.928281038733294'],
  description:
    'In un giorno di inaspettata chiusura delle porte ai fedeli, causa lavori di pulizia sotto il pronao della sua facciata, si può ascoltare come suona veramente la chiesa: si sentono, riprodotti in diffusione continua, lievi e cullanti canti gregoriani, qualche rumore interno anche di passi e, purtroppo, anche i rumori della piazza omonima antistante, sebbene attenuati. La riverberazione delle navate non lascia tregua neppure ai rumori urbani, soprattutto, quando il microfono a parabola, usato a mo’ di fonendoscopio, viene puntato verso il rosone della chiesa.\n' +
    'Catture: 05-10-2019, Cristina Bevegni.',
};

const positionSchema = mongoose.Schema(
  {
    id: {
      requiredL: true,
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    position: [Number],
    sounds: [String],
  },
  {
    timestamps: true,
  }
);

const PositionData = mongoose.model('PositionData', positionSchema);

export default PositionData;
