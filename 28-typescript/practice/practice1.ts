type Olimpic = {
  name: string;
  type: string;
};

const olimpic_newgame: [Olimpic, boolean] = [
  { name: '쇼트트랙', type: '혼성 계주' },
  true,
];

olimpic_newgame[1] = false;
