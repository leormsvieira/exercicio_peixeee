//configuração inicial do jogo
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

//definição das principais funções do jogo
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

//criação do objeto principal do jogo com configuração definida
var game = new Phaser.Game(config);

//criação de variáveis para armazenar os objetos do jogo
var tubarao;
var mergulhador;

//função que define os apelidos das imagens para identifica-las
function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('tubarão', 'assets/peixes/tubarao.png');
    this.load.image('baby-yellow', 'assets/peixes/baby-shark.png');
    this.load.image('baby-blue', 'assets/peixes/baby-shark2.png');
    this.load.image('baby-pink', 'assets/peixes/baby-shark3.png');
    this.load.image('algas', 'assets/algas.png');
    this.load.image('algas-invertidas', 'assets/algas-invertidas.png');
    this.load.image('mergulhador', 'assets/mergulho.png');
    
}

//função que adiciona as imagens na tela do jogo e define suas posições e escalas
function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(400, 350, 'baby-yellow').setScale(0.67);
    this.add.image(600, 400, 'baby-blue').setScale(0.07);
    this.add.image(200, 400, 'baby-pink').setScale(0.23);
    this.add.image(690, 535, 'algas').setScale(0.2);
    this.add.image(110, 535, 'algas-invertidas').setScale(0.2);
    //guarda o mergulhador em uma variável
    mergulhador = this.add.image(150, 175, 'mergulhador').setScale(0.4);
   
    //guarda o tubarão em uma variável
    tubarao = this.add.image(400, 300, 'tubarão');

    //transforma a variável
    tubarao.setFlip(true, false);

}

function update() { 

    //controles do tubarão para seguir o cursor do mouse
    tubarao.x = this.input.x;
    tubarao.y = this.input.y;

    //estabelece uma variável para a velocidade do mergulhador
    var velocidade = 2;

    //estabelece uma velocidade constante para o mergulhador
    mergulhador.x += velocidade;
 
    //condição para fazer o mergulhador reaparecer no lado esquerdo da tela quando sai pelo lado direito
    if(mergulhador.x > 1000){
        mergulhador.x = -200;
    }
}