var haslo = "DUPA";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var pudlo = 0;

var yes = new Audio("music/yes.wav");
var no = new Audio("music/no.wav");

var kreski = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") kreski = kreski + " ";
	else kreski = kreski + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = kreski;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "¥";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Æ";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ê";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "£";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ñ";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Œ";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "¯";
litery[34] = "";


function start()
{
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id ="'+element+'">'+litery[i]+'</div>';
		if ( (i+1) %7 ==0) tresc_diva = tresc_diva + '<div style="clear:both"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	wypisz_haslo();
	
	}
	
	String.prototype.dajZnak = function(miejsce, znak)
	{
		if (miejsce > this.length -1) return this.toString();
		else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
	}
	
	function sprawdz(nr)
	{
		
		var trafiona = false;
		
		for(i=0; i<dlugosc; i++)
		{
			if (haslo.charAt(i) == litery[nr])
			{
				kreski = kreski.dajZnak(i,litery[nr]);
				trafiona = true;
			}
		}
		if(trafiona == true)
		{
			yes.play();
			var element = "lit" + nr;
			document.getElementById(element).style.background = "#003300";
			document.getElementById(element).style.color = "#333333";
			document.getElementById(element).style.border = "3px solid #00C000";
			document.getElementById(element).style.cursor = "default";
			
			wypisz_haslo();
		}
		else
		{
			no.play();
			var element = "lit" + nr;
			document.getElementById(element).style.background = "#330000";
			document.getElementById(element).style.color = "#333333";
			document.getElementById(element).style.border = "3px solid #C00000";
			document.getElementById(element).style.cursor = "default";
			document.getElementById(element).setAttribute("onclick",";");
			
			//skuchy
			pudlo++;
			var obraz = "img/s" + pudlo + ".jpg";
			document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt= "" />';
		}
		
		var stonoga = "img/dramat.gif";
		var dobrze =  "img/dobrze.gif";
		
		var faded  = new Audio("music/Faded.mp3");
		var fanfary  = new Audio("music/Fanfary.mp3");
		
		//wygrana
		if (haslo == kreski)
		{
			fanfary.play();
			document.getElementById("alfabet").innerHTML =  "DOBRZE!!!<br/>HAS£O TO: "+haslo+'<br/><br/><span class="reset" onclick="location.reload()">OD NOWA?</span>'
			document.getElementById("szubienica").innerHTML = '<img src="'+dobrze+'" />';
		}
		
		//przegrana
		if (pudlo>=9)
		{
			faded.play();
			document.getElementById("alfabet").innerHTML =  "PORA¯KA!!!"+'<br/><br/><span class="reset" onclick="location.reload()">OD NOWA?</span>'
			document.getElementById("szubienica").innerHTML = '<img src="'+stonoga+'" />';
		}
		
			
			
	}