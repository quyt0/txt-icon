$(document).ready(function() {
    var txtArray = ["a", "à", "á", "ả", "ã", "ạ", "ă", "ắ", "ằ", "ẳ", "ẵ", "ặ", "â", "ấ", "ầ", "ẩ", "ẫ", "ậ", "b", "c", "d", "đ", "e", "é", "è", "ẻ", "ẽ", "ẹ", "ê", "ế", "ề", "ể", "ễ", "ệ", "f", "g", "h", "i", "í", "ì", "ỉ", "ĩ", "ị", "k", "j", "l", "m", "n", "o", "ó", "ò", "ỏ", "õ", "ọ", "ô", "ố", "ồ", "ổ", "ỗ", "ộ", "ơ", "ớ", "ờ", "ở", "ỡ", "ợ", "p", "q", "r", "s", "t", "u", "ú", "ù", "ủ", "ũ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự", "v", "x", "y", "ý", "ỳ", "ỷ", "ỹ", "ỵ", "w", "z", " "];
    var iconArray = ["😀", "🤬", "😈", "👿", "🤡", "😺", "😆", "🤩", "😘", "😗", "😋", "😛", "😄", "😜", "🤪", "😝", "🤑", "🤗", "😃", "😁", "😅", "🤭", "🥰", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "🙄", "😬", "🤥", "🤣", "🥲", "☺️", "😊", "😌", "😔", "😪", "🤤", "😴", "😇", "😷", "😉", "😒", "😞", "😙", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "🙁", "😮", "😟", "😕", "🙂", "🙃", "☹️", "😡", "😯", "😲", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😱", "😖", "😍", "😩", "😭", "😣", "😓", "😫", "😤", "😚", "😳", "😠", "."];
    var originTextArea = $('#origin-text');
    var resultTextArea = $('#converted-text');
    var copyBtn = document.querySelector('#copy-result');
    var transBtn = document.querySelector('#transTypeBtn');
    var pasteBtn = document.querySelector('#pasteBtn');
    var clearBtn = document.querySelector('#clearBtn');
    var transType = "txt2icn";

    async function PasteFunction() {
        const text = await navigator.clipboard.readText();
        originTextArea.val(text);
        doConversion();
    }

    function doConversion() {
        var originText = originTextArea.val();
        if (transType == 'txt2icn') {
            originText = originText.toLowerCase();
            for (let i = 0; i < txtArray.length; i++) {
                originText = originText.replaceAll(txtArray[i], iconArray[i]);
            };

        } else if (transType == 'icn2txt') {
            originText = originText.toLowerCase();
            for (let i = 0; i < iconArray.length; i++) {
                originText = originText.replaceAll(iconArray[i], txtArray[i]);
            };
        };
        resultTextArea.val(originText);
    }

    copyBtn.addEventListener('click', function(event) {
        resultTextArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

    transBtn.addEventListener('click', function(event) {
        if (transType == 'icn2txt') {
            transType = 'txt2icn';
            document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Tin nhắn ---> icon)';
        } else if (transType == 'txt2icn') {
            transType = 'icn2txt'
            document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Icon ---> tin nhắn)';
        }
        doConversion();
    });

    pasteBtn.addEventListener('click', function(event) {
        PasteFunction();
    });

    clearBtn.addEventListener('click', function(event) {
        originTextArea.val('');
        resultTextArea.val('');
    });

    originTextArea.bind('input propertychange', function() {
        doConversion();
    });
});