module.exports = function(){
	var other = document.createElement('div');
	let xml;
	let txt,xx,x,i;
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest()
	}else{
		xml = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xml.onreadystatechange = function(){
		if(xml.readyState == 4 && xml.status == 200){
			txt = '<table border="1"><tr><th>Title</th><th>Artist</th></tr>';
			x = xml.responseXML.documentElement.getElementsByTagName('CD');
			for(let i = 0; i < x.length; i++){
				txt += '<tr>';
				xx = x[i].getElementsByTagName('TITLE');
				{
					try{
						txt += '<td>' + xx[0].firstChild.nodeValue + '</td>'
					}catch(er){
						txt+='<td></td>';
					}
				}
				xx=x[i].getElementsByTagName("ARTIST");
				{
					try{
						txt += '<td>' + xx[0].firstChild.nodeValue + '</td>'
					}catch(er){
						txt+='<td></td>';
					}
				}
				txt += '</tr>'
			}
			txt+='</table>'
			other.innerHTML = txt;
		}
	}
	xml.open('GET','../data/note.xml',true)
	xml.send()
	return other;
}