$(init);

$('#deal').click(function (){dealCards(randomCard())});

function init()
{
    $('.drop').droppable( {
      drop: handleDropEvent
    } );   
}

var cardsInDeck = new Array();
var numberOfCardsInDeck = 5;
cardsInDeck[0] = "ace_of_hearts";
cardsInDeck[1] = "2_of_clubs";
cardsInDeck[2] = "ace_of_clubs";
cardsInDeck[3] = "king_of_diamonds";
cardsInDeck[4] = "jack_of_spades";

function dealCard(i)
{
    if (numberOfCardsInDeck == 0)
    {
        return false;
    }
    var img = document.createElement("img");
    img.src = "cards/" + cardsInDeck[i] + ".png";
    img.id = cardsInDeck[i];

    document.body.appendChild(img);
    $("#" + img.id).draggable();

    removeCard(i);
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
    $('#drop').html( ui.draggable.attr('id'));
}