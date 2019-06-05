$(document).ready(() => {
    let quantidade = Math.floor(Math.random() * 100);
    $("#hotel-status").append(quantidade+"%");

    let mensagens = Math.floor(Math.random() * 60);

    if(mensagens <= 10){
        $("#messages-status")
            .addClass("w3-green")
            .append(mensagens);
    }
    else if(mensagens <= 30){
        $("#messages-status")
            .addClass("w3-yellow")
            .append(mensagens);
    }
    else {
        $("#messages-status")
            .addClass("w3-red")
            .append(mensagens);
    }

    let totalDeQuartos = 30;
    let reservations = Math.floor(Math.random() * 10);
    let calculoMaintenanceRooms = Math.floor((totalDeQuartos) - (Math.floor(Math.random() * (totalDeQuartos))));

    let calculoAvalivableRooms = Math.floor(totalDeQuartos - (reservations + calculoMaintenanceRooms));

    $("#avaliable-rooms-status").append(calculoAvalivableRooms);

    if(reservations <= 5){
        $("#reservations-status")
            .addClass("w3-green")
            .append(reservations);
    }
    else if(reservations <= 15){
        $("#reservations-status")
            .addClass("w3-yellow")
            .append(reservations);
    }
    else {
        $("#reservations-status")
            .addClass("w3-red")
            .append(reservations);
    }


    let solicitacoes = Math.floor(Math.random() * 30);
    if(solicitacoes <= 5){
        $("#requests-status")
            .addClass("w3-green")
            .append(solicitacoes);
    }
    else if(solicitacoes <= 15){
        $("#requests-status")
            .addClass("w3-yellow")
            .append(solicitacoes);
    }
    else {
        $("#requests-status")
            .addClass("w3-red")
            .append(solicitacoes);
    }


    $("#rooms-maintenance-status").append(calculoMaintenanceRooms+'/'+totalDeQuartos);

    let mes = [
        'January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August', 'September', 
        'October', 'November', 'December'
    ];

    let dia = [
       '', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
    ];

    $("#hour-date-header").append(
        (new Date).getHours()+':'+(new Date).getMinutes()+' '+dia[(new Date).getDay()]+' - '+mes[(new Date).getMonth()]+', '+(new Date).getDate()
    );

    let nome = [
        "Zoé", 
        "Ayla", 
        "Liz", 
        "Maitê", 
        "Lis", 
        "Agnes", 
        "Pérola", 
        "Agatha", 
        "Lia", 
        "Jade", 
        "Ohana", 
        "Olívia", 
        "Ana Paula", 
        "Aisha", 
        "Jennifer",

        "Valentim", 
        "Gael", 
        "Ravi", 
        "Ícaro", 
        "Levi", 
        "Edson", 
        "Noah", 
        "Lucca", 
        "Theo", 
        "Danilo", 
        "Bento", 
        "Eduardo", 
        "Benício", 
        "Leandro", 
        "Samuel"
    ];

    let nomeAtual  = nome[Math.floor(Math.random() * nome.length)];

    $("#name-user").append(nomeAtual);

    for(let i = 0; i < (Math.floor(Math.random() * 10)+1); i++){
        $("#messages-old ul").append("<li>"+nome[Math.floor(Math.random() * nome.length)]+' '+
        "<span class=\"w3-badge w3-gray\">"+(Math.floor(Math.random() *     10) + 1)+"</span>"+"</li>");
    }

    for(let i = 0; i < mensagens; i++){
        $("#messages-new ul").append("<li>"+nome[Math.floor(Math.random() * nome.length)]+' '+
        "<span class=\"w3-badge w3-green\">"+(Math.floor(Math.random() * 10) + 1)+"</span>"+"</li>");
    }



    let cont = 0;
    let hora = () => {setTimeout(() => {
            $("#hour-date-header").html(
                (new Date).getHours()+':'+(new Date).getMinutes()+' '+dia[(new Date).getDay()]+' - '+mes[(new Date).getMonth()]+', '+(new Date).getDate()
            );
            console.log((new Date).getHours()+':'+(new Date).getMinutes()+':'+(new Date).getSeconds());
            cont++;
            console.log('Minutos:'+cont);
            hora();
        }, 60000);
    }
    hora();

    let tipos = [ 'deluxe', 'master', 'double', 'single' ];
    let logo = [ '<i class="fas fa-lock w3-text-red"></i>', '<i class="fas fa-lock-open w3-text-green"></i>', '<i class="fas fa-screwdriver"></i>'];
    let contQuantidadeQuartosUtilizada = 0;
    let contQuantidadeQuartosManutencao = 0;
    let contQuantidadeQuartosVazios = 0;

    $("#avaliable-rooms-status-all").append('<div class="w3-row">');
    for(let i = 0; i < totalDeQuartos; i++){
        let id   = (Math.floor(Math.random() * tipos.length));
        let tipo = tipos[id];
        let logotipo = "";
        let idLogo = (Math.floor(Math.random() * logo.length));
        logotipo = logo[idLogo];
        if(contQuantidadeQuartosUtilizada < calculoAvalivableRooms){
            contQuantidadeQuartosUtilizada++;
        }
        else if(contQuantidadeQuartosManutencao < calculoMaintenanceRooms){
            contQuantidadeQuartosManutencao++;
        }
        else{
            contQuantidadeQuartosVazios++; 
        }
        $("#avaliable-rooms-status-all").append(
                '<div class="w3-col l2 w3-center w3-card-2">'+
                    '<div class="w3-text-deep-orange w3-large">'+tipo+'</div>'+
                    logotipo+
                '</div>'
        );
        
    }
    $("#avaliable-rooms-status-all").append('</div>');

    console.log('total: '+totalDeQuartos);
    console.log('ocupados: '+calculoAvalivableRooms);
    console.log('em manutenção: '+calculoMaintenanceRooms);

    console.log('contadore:');
    console.log('qartos manutenção:'+contQuantidadeQuartosManutencao);
    console.log('quartos utilizados:'+contQuantidadeQuartosUtilizada);
    console.log('quartos vazios:'+contQuantidadeQuartosVazios);

});