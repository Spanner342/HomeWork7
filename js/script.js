
const Lightbulb = function (name) {
    let power = 0;
    let costEnergy = 0;
    let timeStart = 0;
    let timeEnd = 0;
    let result = 0
    let timeWork = 0;
 
    this.getLightbulb = function() {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки в Вт');
        this.costEnergy = +prompt('Введите стоймость электроинергии руб/кВтч'); 
    }



    this.switch = function(position) {
        if (position == 'on') {
            alert('Лампочка включена');
            this.timeStart = new Date();
        } 
        
        if (position == 'off') {
            alert('Лампочка выключена');
            this.timeEnd = new Date();
            this.timeWork = this.timeEnd - this.timeStart;
            this.costResult();
        }
    }

    this.costResult = function() {
        this.result = (this.power / 1000) * this.costEnergy * this.timeWork;
    }

    this.showInfo = function() {
        if (this.timeStart == 0 || this.timeStart == undefined) {
            alert('Вы не включали лампочку');
        } else if (this.timeEnd == 0 ||this.timeEnd == undefined) {
            alert('Вы не выключили лампочку');
        } else if (this.timeWork > 0) {
            console.log(`Лампочка ${this.name} мощность ${this.power} Вт стоймость электроинергии ${this.costEnergy} проработала ${this.timeWork/60/60/1000} ч и стоймость потраченной электроэнергии составляет ${this.result} р` );
        }
        
    }

};

 
let bulb = new Lightbulb('A60');
bulb.getLightbulb();
