(function(){

    var targetDiv = document.getElementById('qrcodeCanvas');
    var qrcode = new QRCode(targetDiv);

    // example VCARD
    var defaultString = 
        ['BEGIN:VCARD',
        'N:Simpson;Homer',
        'ORG:Springfield Nuclear Power Plant',
        'TITLE:Safety Engineer',
        'TEL;WORK;VOICE:(123)456-7890',
        'ADR;WORK:;;100 Industrial Way;Springfield;??;12345',
        'EMAIL;WORK:homer.j.simpson@springfieldpower.com',
        'END:VCARD'
    ].join('\n'); // joins into string with a newline character as the separator

    // check for passed value in query param 'value'
    var params = (new URL(document.location)).searchParams;
    var queryParamValue = params.get('value');


    function generateQR(val){

        var str = val||(document.querySelector('.buildMyInfo').value||'');
        if( '' == str.trim() ){
            str = defaultString;
        }
        qrcode.clear();
        qrcode.makeCode(str);
        var img = document.querySelector('img');
        img.title = str;

    }

    generateQR(queryParamValue);

    document.querySelector('.buildMyInfo').addEventListener('keyup', generateQR);

})();