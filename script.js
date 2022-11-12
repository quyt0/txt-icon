$(document).ready(function() {

    var txtArray = ["a", "à", "á", "ả", "ã", "ạ", "ă", "ắ", "ằ", "ẳ", "ẵ", "ặ", "â", "ấ", "ầ", "ẩ", "ẫ", "ậ", "b", "c", "d", "đ", "e", "é", "è", "ẻ", "ẽ", "ẹ", "ê", "ế", "ề", "ể", "ễ", "ệ", "f", "g", "h", "i", "í", "ì", "ỉ", "ĩ", "ị", "k", "j", "l", "m", "n", "o", "ó", "ò", "ỏ", "õ", "ọ", "ô", "ố", "ồ", "ổ", "ỗ", "ộ", "ơ", "ớ", "ờ", "ở", "ỡ", "ợ", "p", "q", "r", "s", "t", "u", "ú", "ù", "ủ", "ũ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự", "v", "x", "y", "ý", "ỳ", "ỷ", "ỹ", "ỵ", "w", "z", " "];
    var iconArray = ["😀", "🤬", "😈", "👿", "🤡", "😺", "😆", "🤩", "😘", "😗", "😋", "😛", "😄", "😜", "🤪", "😝", "🤑", "🤗", "😃", "😁", "😅", "🤭", "🥰", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "🙄", "😬", "🤥", "🤣", "🥲", "☺️", "😊", "😌", "😔", "😪", "🤤", "😴", "😇", "😷", "😉", "😒", "😞", "😙", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "🙁", "😮", "😟", "😕", "🙂", "🙃", "☹️", "😡", "😯", "😲", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😱", "😖", "😍", "😩", "😭", "😣", "😓", "😫", "😤", "😚", "😳", "😠", "."];
    var transType = "txt2icn";
    var inputText = document.querySelector("#input-text");
    var resultText = document.querySelector("#result-text");

    async function PasteFunction() {
        const text = await navigator.clipboard.readText();
        $(inputText).val(text);
        doConversion();
    }

    function doConversion() {
        var originText = $(inputText).val();
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
        $(resultText).val(originText);
    }
    
    document.querySelector('.btn-change').onclick = function() {
        if (transType == 'icn2txt') {
            transType = 'txt2icn';
            document.getElementById('convert-type').innerHTML = '(Loại dịch: Tin nhắn ---> icon)';
            document.getElementById("input-text").style.fontFamily = "Roboto,sans-serif";
            document.getElementById("result-text").style.fontFamily = "NotoColorEmoji,sans-serif";
        } else if (transType == 'txt2icn') {
            transType = 'icn2txt'
            document.getElementById('convert-type').innerHTML = '(Loại dịch: Icon ---> tin nhắn)';
            document.getElementById("input-text").style.fontFamily = "NotoColorEmoji,sans-serif";
            document.getElementById("result-text").style.fontFamily = "Roboto,sans-serif";
        }
        doConversion();
    };
    
    document.querySelector('.btn-copy').onclick = function() {
        resultText.select();
        resultText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(resultText.value);
    };

    document.querySelector('.btn-paste').onclick = function() {
        PasteFunction();
    };
    
    document.querySelector('#input-text').addEventListener('input', () => {
        doConversion();
    });

    document.querySelector('.btn-clear').onclick = function() {
        $(inputText).val('');
        $(resultText).val('');
    };

    document.querySelector('.btn-trans').onclick = function() {
        doConversion();
    }
});

