document.addEventListener("DOMContentLoaded", function () {

     /* highlighting trust logos */
    $('.imgTrust').mouseenter(function() {
     $(this).removeClass('imgTrust ');
    });
    $('.imgTrust').mouseleave(function() {
     $(this).addClass('imgTrust ');
    });
    /* end highlighting trust logos */

    /* script from hexagon */
    var imgIcon = document.getElementById('imgIcon'),
    headingIcon = document.getElementById('headingIcon'),
    describeRght = document.getElementById('describeRght');

    function dataHex(arg){ 
        headingIcon.innerHTML = textHex[arg].heading;
        describeRght.innerHTML = textHex[arg].description;
        let value = (textHex[arg].bgPosition)+'px';
        $('#imgIcon').css('background-position', value);
}
$('.hexagon').click(function(event) {
     dataHex((event.target.id-1));
});
// but better I think need make like this >>
// STEP 1 >> create file hexagon.json
// STEP 2 make some func >>

//     function dataHex(arg){ 
//     $.getJSON( 'js/hexagon.json', function( data ) {
//         headingIcon.innerHTML = data.text[arg].heading;
//         describeRght.innerHTML = data.text[arg].description;
//         let value = (data.text[arg].bgPosition)+'px';
//         $('#imgIcon').css('background-position', value);
//     });
// }
// BUT it doesn't work on local server in Chrome =(

    /* end script from hexagon */

});






    var textHex = [ {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"1",
    "heading":"Human assistance",
    "description":"Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-1377",
    "heading":"Internet security",
    "description":"Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-278",
    "heading":"Anti-theft",
    "description":"If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-1468",
    "heading":"Fast cleanup",
    "description":"Quickly remove junk files (such as temporary caches, logs, unused language packages and legacy application parts) that may take up hard drive space and slow down your Mac."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-1566",
    "heading":"Duplicates finder",
    "description":"Delete unnecessary copies of your files and free up disk space on your Mac."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-96",
    "heading":"Geek on demand",
    "description":"Geek on Demand is the ultimate tool when you have a problem or question that is related to your Mac's health and need an expert's opinion or technical assistance."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-1188",
    "heading":"Update tracker",
    "description":"With Update Tracker you will never miss out any important security patches and upgrades for most of your applications."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-374",
    "heading":"Backup",
    "description":"Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-1287",
    "heading":"Files recovery",
    "description":"Now you can recover files that were once deleted from the Trash!"
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-1077",
    "heading":"Disk usage",
    "description":"Visualize the size of the folders on your hard drive so you can tell at a glance which folders are taking up the most space."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-966",
    "heading":"Smart uninstaller",
    "description":"Prevent future junk by making sure that you're not just sweeping old applications under the rug when you are trying to delete them."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-567",
    "heading":"Data encryptor",
    "description":"Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information."
},
{
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-476",
    "heading":"Default apps",
    "description":"The easiest way to define which application will open each file type."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-861",
    "heading":"Shredder",
    "description":"Securely delete files and folders that you don't ever want to be recovered."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-754",
    "heading":"Files finder",
    "description":"Quickly search for and find any lost or misplaced file, even if you don't know in which folder it is located."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-660",
    "heading":"Login items",
    "description":"Take control of how fast your Mac boots up by deciding which applications launch every time you start it."
}, {
    "url":"img/icon/icon__sprire_big.png",
    "bgPosition":"-190",
    "heading":"Memory Cleaner",
    "description":"Automatically optimizes and monitors your Mac’s RAM memory while you are performing your daily tasks."
}
]

