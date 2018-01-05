(function(){

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

    // example WIFI access settings
    // var defaultString = 'WIFI:S:MyMagicalNetworkName;T:WPA;P:TalkingAboutABC123;;';

    // example URL for hyperlink
    // var defaultString = 'https://google.com';

    function generateQR(){
        $('#qrcodeCanvas').empty();
        var str = (document.querySelector('.buildMyInfo').value||'');
        if( '' == str.trim() ){
            str = defaultString;
        }
        $('#qrcodeCanvas').qrcode({
            render: "canvas",
            text: str
        });
    }

    generateQR();

    document.querySelector('.buildMyInfo').addEventListener('keyup', generateQR);

})();