$(init);

$('#deal').click(function (){dealCards(randomCard())});

function init()
{
    $('.drop').droppable( {
      drop: handleDropEvent
    } );   
}

var cardsInDeck = new Array();
var numberOfCardsInDeck = 53;
cardsInDeck[0] = "ace_of_hearts";
cardsInDeck[1] = "2_of_hearts";
cardsInDeck[2] = "3_of_hearts";
cardsInDeck[3] = "4_of_hearts";
cardsInDeck[4] = "5_of_hearts";
cardsInDeck[5] = "6_of_hearts";
cardsInDeck[6] = "7_of_hearts";
cardsInDeck[7] = "8_of_hearts";
cardsInDeck[8] = "9_of_hearts";
cardsInDeck[9] = "10_of_hearts";
cardsInDeck[10] = "jack_of_hearts";
cardsInDeck[11] = "queen_of_hearts";
cardsInDeck[12] = "king_of_hearts";
cardsInDeck[13] = "ace_of_clubs";
cardsInDeck[14] = "2_of_clubs";
cardsInDeck[15] = "3_of_clubs";
cardsInDeck[16] = "4_of_clubs";
cardsInDeck[17] = "5_of_clubs";
cardsInDeck[18] = "6_of_clubs";
cardsInDeck[19] = "7_of_clubs";
cardsInDeck[20] = "8_of_clubs";
cardsInDeck[21] = "9_of_clubs";
cardsInDeck[22] = "10_of_clubs";
cardsInDeck[23] = "jack_of_clubs";
cardsInDeck[24] = "queen_of_clubs";
cardsInDeck[25] = "king_of_clubs";
cardsInDeck[26] = "ace_of_spades";
cardsInDeck[27] = "2_of_spades";
cardsInDeck[28] = "3_of_spades";
cardsInDeck[29] = "4_of_spades";
cardsInDeck[30] = "5_of_spades";
cardsInDeck[31] = "6_of_spades";
cardsInDeck[32] = "7_of_spades";
cardsInDeck[33] = "8_of_spades";
cardsInDeck[34] = "9_of_spades";
cardsInDeck[35] = "10_of_spades";
cardsInDeck[36] = "jack_of_spades";
cardsInDeck[37] = "queen_of_spades";
cardsInDeck[38] = "king_of_spades";
cardsInDeck[39] = "ace_of_hearts";
cardsInDeck[40] = "2_of_diamonds";
cardsInDeck[41] = "3_of_diamonds";
cardsInDeck[42] = "4_of_diamonds";
cardsInDeck[43] = "5_of_diamonds";
cardsInDeck[44] = "6_of_diamonds";
cardsInDeck[45] = "7_of_diamonds";
cardsInDeck[46] = "8_of_diamonds";
cardsInDeck[47] = "9_of_diamonds";
cardsInDeck[48] = "10_of_diamonds";
cardsInDeck[49] = "jack_of_diamonds";
cardsInDeck[51] = "queen_of_diamonds";
cardsInDeck[52] = "king_of_diamonds";

var canDraw = 3;

function dealCards(i)
{
    if (numberOfCardsInDeck == 0 || canDraw <= 0)
    {
        return false;
    }
    var img = document.createElement("img");
    img.src = "cards/" + cardsInDeck[i] + ".png";
    img.id = cardsInDeck[i];
    img.style.height = '100px';
    img.style.width = 'auto';
    document.body.appendChild(img);
    $("#" + img.id).draggable();

    removeCard(i);
    canDraw--;
}

function randomCard()
{
    return Math.floor(Math.random()*numberOfCardsInDeck);
}

function removeCard(c)
{
    for (j=c; j<=numberOfCardsInDeck - 2; j++)
    {
        cardsInDeck[j] = cardsInDeck[j+1];
    }
    numberOfCardsInDeck--;
}

function handleDropEvent( event, ui )
{
    var draggable = ui.draggable;
    //$('#drop').html(ui.draggable.attr('id'));
    $("#" + draggable.attr('id')).remove();
    canDraw++;
}