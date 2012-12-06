$(function() {
    // generate keyboard 
    var $keyboard = $('#keyboard');
    for (var i = 0; i < 5; i++) {
        var row = $('<div class="keyrow" />').attr('id', 'row' + i);
        var start = 1, num = 13;
        if (i == 0) {
            start = 0;
        }
        if (i == 1) {
            row.append('<div id="keytab" class="key keycontrol">Tab</div>');
        }
        else if (i == 2) {
            row.append('<div id="keycapslock" class="key keycontrol">Caps Lock</div>');
            num = 12;
        }
        else if (i == 3) {
            row.append('<div id="keyshiftl" class="key keycontrol">Shift L</div>');
            num = 11;
        }
        else if (i == 4) {
            row.append('<div id="keyctrll" class="key keycontrol">Ctrl L</div>');
            row.append('<div id="keywinl" class="key keycontrol">Win L</div>');
            row.append('<div id="keyaltl" class="key keycontrol">Alt L</div>');
            row.append('<div id="keyblank" class="key keycontrol"></div>');
            row.append('<div id="keyaltr" class="key keycontrol">Alt R</div>');
            row.append('<div id="keywinr" class="key keycontrol">Win R</div>');
            row.append('<div id="keymenu" class="key keycontrol">Menu</div>');
            row.append('<div id="keyctrlr" class="key keycontrol">Ctrl R</div>');
            i = 13;
        }
        for (var j = (!!i); j < 14 - i - (!i); j++) {
            var key = $('<div class="key" />').attr('id', 'key' + (i * 100 + j));
            for (var k = 1; k <= 4; k++) {
                key.append($('<div class="corner" />').addClass('corner' + k));
            }
            row.append(key);
        }
        if (i == 0) {
            row.append('<div id="keybackspace" class="key keycontrol">Backspace</div>');
        }
        else if (i == 1) {
            row.append('<div id="keyslash" class="key keycontrol">\\</div>');
        }
        else if (i == 2) {
            row.append('<div id="keyenter" class="key keycontrol">Enter</div>');
        }
        else if (i == 3) {
            row.append('<div id="keyshiftr" class="key keycontrol">Shift R</div>');
        }
        $keyboard.append(row);
    }

    // fill keyboard use dvorak layout
    var dvorak = keyboard.dvorak;
    for (var i = 0; i < dvorak.length; i++) {
        for (var j = 0; j < dvorak[i].length; j++) {
            if (dvorak[i][j] instanceof Array) {
                if (dvorak[i][j][0]) { 
                    $('#key' + (i * 100 + j) + ' .corner:eq(0)').text(dvorak[i][j][0]);
                }
                if (dvorak[i][j][1]) { 
                    $('#key' + (i * 100 + j) + ' .corner:eq(2)').text(dvorak[i][j][1]);
                }
                if (dvorak[i][j][2]) { 
                    $('#key' + (i * 100 + j) + ' .corner:eq(1)').text(dvorak[i][j][2]);
                }                   
                if (dvorak[i][j][3]) { 
                    $('#key' + (i * 100 + j) + ' .corner:eq(3)').text(dvorak[i][j][3]);
                }
            }
            else {
                $('#key' + (i * 100 + j)).text(dvorak[i][j]);
            }
        }
    }
});

