var a = document.forms["form"]["ad"].value;
var b = document.forms["form"]["soyad"].value;
var c = document.forms["form"]["adres"].value;
var d = document.forms["form"]["mail"].value;
var e = document.forms["form"]["numara"].value;


function funk() {

    a = document.forms["form"]["ad"].value;
    if(a.length > 15 || a == "" || a == null) 
    {
        alert("your name is too tall!\nyour name must not be empty!");
        return false;
    }

    b = document.forms["form"]["soyad"].value;
    if(b.length > 10 || b == "" || b == null) 
    {
        alert("your last name must be shorter!\nlast name must not be empty!");
        return false;
    }

    d = document.forms["form"]["mail"].value;
    var sayac = 0;
    for(i=0; i<d.length; i++) 
    {
        if(d[i] == "@")
        sayac++;
    }
    if(sayac == 0 || d == "" || d[0] == "@") 
    {
        alert("mail boş bırakmayınız!\n@ operatoru kullanmanız gerekiyor!");
        return false;
    }

    c= document.forms["form"]["adres"].value;
    if(a.length > 15 || a == "" || a == null) 
    {
        alert("the adress should not be empty!!");
        return false;
    }


    e= document.forms["form"]["numara"].value;
    if(a.length > 15 || a == "" || a == null) 
    {
        alert("the number should not be empty!!");
        return false;
    }
    
       

} 





