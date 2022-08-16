function myFunction(){
    let name = document.getElementById('name');
    let _name = name.value;
    let age = document.getElementById('age');
    let _age = age.value;
    let gender = document.getElementById('gender');
    let _gender = gender.value;
    let mail = document.getElementById('mail');
    let _mail = mail.value;
    let phno = document.getElementById('phno');
    let _phno = phno.value;
    let pw1 = document.getElementById('pw1');
    let _pw1 = pw1.value;
    let pw2 = document.getElementById('pw2');
    let _pw2 = pw2.value;
    

    if( (_name.length!=0) && ( (_age>18)&&(_age<100) ) && (_gender.length == "male"||"female") && (_mail.length!=0) && ( _phno.toString().length == 10 ) && ((_pw1 == _pw2) && (_pw1!=null)) )
    {
        document.getElementById('demo').innerHTML="Welcome "+ document.getElementById('name').value;
    }
    else{
        alert("Something Wrong");
    }
}