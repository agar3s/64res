var attackM = '{\'{({){*{7{9{:{G{H{I{J{g{h{i{j{k!"#$%&1234ABCDQRSTabcdqrst~+~.~;~>~K~N~[~^~k~n';
var attackN = '{[';
var attackO = '{L{M{W{X{Y{Z{\\';
var attackP = '{8';
var cocoM = '{%{&{\'{({5{7{8{E{F{G{H{e{f{g{h{u{v!"/012@ABCPQRS`abcpqrs~*~.~:~>~K~L~N~_~o';
var cocoN = '{I{J{U{V{W{X{Y';
var cocoO = '{j';
var heroM = '{\'{({){*{7{9{:{G{H{I{J{g{h{i{j!"#$1234ABCDQRSTabcdqrst~+~.~;~>~K~N~[~^~k~n';
var heroN = '{K{L{W{X{Y{Z{[';
var heroO = '{l';
var jump1M = '{\'{){*{7{8{9{:{G{H{I{J{g{h{i{j!"#$1234ABCDQRSTabcdqrst~+~.~;~>~L~N~\\~^~n';
var jump1O = '{W{X{Y{Z{\\{l&';
var jump1P = '{(';
var jump2M = '{\'{({){*{7{9{:{G{H{I{J{g{h{i{j!"#$1234ABCDQRSTabcdqrst~*~-~:~=~K~N~^';
var jump2O = '{W{X{Y{Z{\\{]{m';
var jump2P = '';
var jump3M = '{\'{({){*{7{8{9{:{G{I{J{g{h{i{j!"#$1234ABCDQRSTabcdqrst~+~-~;~=~K~[~k';
var jump3O = '{<{L{W{X{Y{Z{\\';
var jump3P = '{H';
var jump4M = '{7{8{9{:{G{H{I{J{W{Y{Z!"#$1234ABCDQRSTabcdqrst~+~,~-~.~;~=~K~N~\\~^~l';
var jump4N = '{k';
var jump4O = '{]{g{h{i{j{l{m';
var jump4P = '{X';
var powerM = '{X{Y{f{g{h{j{k{u!$&/02356>?ACDGNORSUVW_adfoprsuv~*~+~,~.~/~<~=';
var powerN = '{i{v"4@BFQ`ceq';
var powerO = '#%1EPTbt~-';
var runM = '{\'{({){*{7{9{:{G{H{I{J{g{h{i{j!"#$1234ABCDQRSTabcdqrst~*~.~:~>~J~N~[~_~o';
var zombie_attackM = '{&{\'{({7{8{9{F{G{H{I{J{X{Y{Z{[{i{j{k!"#$%&0456@DEFTUVWcgs~!~-~1~=~A~N~R~^~b~n~r';
var zombie_attackO = '{6';
var zombie_wakeM = '~J~K~L~M~N~Y~Z~\\~]~^~_~`~a~b~h~i~j~k~l~m~n~o~p~q~r~s~t';
var zombie_wakeO = '~[';

var frames = [
  '', // 0
  '~o~j~_~Z~J{8~n~k~^~[~K{9', // 1
  '~p~i~`~O~?~/~-~,ueUFE65{v{[{Z{Y{X{K{;{9~o~j~_~N~>~+qaQA1{k{j{i{h{g{I{G{7{*{){({\'', // 2
  '~K~<~0vfXVH8\'{u{\\{L{<~J~;~,rbRB2{X{H{8', // 3
  '~n~k~^~[~N~>~;~+rqbaRQBA21{k{j{i{h{g{I{H{G{7{*{){({\'~p~i~`~Z~O~?~<~0~/~-vufeXVUHFE865\'{v{u{\\{[{Z{Y{L{K{<{;', // 4
  '{l{[', // 5
  '{m{l', // 6
  '{[{m', // 7
  '{n{m{k{j{i{h{_{\\{Z{Y{X{W{M{L', // 8
  '{p{o{l{m{h{_', // 9
  '{\\{Z{Y{X{W{M{L{p{o{n{l{k{j{i', // 10
  '{9{8', // 11
  '{I{9', // 12
  '{8{I', // 13
  '~p~O~;~9~8~(o_O?{D{6{4{$~o~N~L~K~*C{H{8{5{(', // 14
  '~N~H~=~7~-~\'nN>.{t{d{C{5{3{#~O~>~;~:~9~8~.~(scSRB2"{h{G{7{4{\'', // 15
  '~`~W~G~p~H', // 16
  '~g~P~O~8~(RB~`~_~7~\'nN>', // 17
  '~i~X~M~H~<~9~,~)2"{G{7{4{\'~g~W~P~G~=~8~-~(.{t{C{5{3{#', // 18
  '~k~Z~J~=~:~-~*scSC3{h{H{8{5{(~i~X~M~H~<~9~,~)o_O?/{d{D{6{4{$', // 19
  '~l~\\~M~K~<~;~,~+/~k~Z~O~J~=~:~-~*3', // 20
  '~o~_~L~>~:~.~*~l~\\~M~<~;~,~+', // 21
  '{T{Y', // 22
  '{S{J', // 23
  '{Y{I', // 24
  '{I{Y', // 25
  '{Y{J{S{I', // 26
  '{I{T', // 27
  '{Y', // 28
  '{Y{j', // 29
  '{H', // 30
  '{Y{H', // 31
  '{Z{Y', // 32
  '{j{Z', // 33
  '{i{j', // 34
  '{j{i', // 35
  '~\\~k', // 36
  '~k~\\', // 37
  '~_~n', // 38
  '~n~_', // 39
  '{M', // 40
  '{8{7', // 41
  '{7{J', // 42
  '{J{7', // 43
  '{7{8', // 44
  '{8{9', // 45
  '{9{:', // 46
  '{:{9', // 47
  '{Z{[', // 48
  '{Y{Z', // 49
  '{[{Z', // 50
  '{[', // 51
  '{V', // 52
  '{[{K{\\{Z{M', // 53
  '{Z{J{[{Y{L', // 54
  '{[{Y{L{Z{J', // 55
  '{\\{Z{M{[{K', // 56
  '{\\{M{L', // 57
  '{U{E{D', // 58
  '{7', // 59
  '{8{H', // 60
  '~o~n', // 61
  '~_~^', // 62
  '~Q~P~O~o~_~N', // 63
  '~o~_~N~Q~P~O', // 64
  '~^~_', // 65
  '~n~o', // 66
  '{H{G', // 67
  '{G{7', // 68
  '{H{8', // 69
  '{G{H', // 70
  '{7{G', // 71
  '~Z~J~>~,~^~N~K~-', // 72
  '~k~[~K~;~-~+{8~Z~J~>~:~,~*{H', // 73
  '{M{m', // 74
  '{L{<{]{M', // 75
  '{8', // 76
  '~n~[~M~>~<{j{i{h{g~\\~N$#"!{:{9{8{7', // 77
  '~k$#"!{X{:{9{8{7~l~>~<{j{i{h{g{H', // 78
  '%{k', // 79
  '{k%', // 80
  '\'&$#"!{m{l{j{i{h{g{]', // 81
  '{m{l{j{i{h{g&$#"!', // 82
  '{H{X', // 83
  'qbQF%usrpaURC53', // 84
  'U5#~,qbVSQOFDA?0${h', // 85
  'sqbSPECA1${v{h5%#!', // 86
  '~,urpaVROD?530!qbPE1{v', // 87
  'saUT53qQF', // 88
  '~-tqbVSQOEDC1$saUT54{i', // 89
  '~,paF?%~-qb`VSQOECB@1${v', // 90
  'q`QB@4{v{i~,tpaD?3%', // 91
  'urpRCbT%', // 92
  '~,saTFA?40{i{h~-tEC1#', // 93
  '~-`VQOB@5#!~,spaPFA?{h', // 94
  'tbPE1%ur`VRQOB@540!{i', // 95
  '~p~O~Kp~o~[~N~J', // 96
  '~q~`~Z~P~I~?~9~/~)~p~_~O~K~>~:~.~*', // 97
  '~i~b~a~Y~:~*{Z{Y{X{W{8~q~`~Z~9~)p{j{i{h{g{H{*{){({\'', // 98
  '~k~Z~O~J~A~>~;~.~+{j{i{h{g{H~i~b~a~Y~I~?~:~/~*$#"!{X{:{9{8{7', // 99
  '~m~]~N~L~=~<~-~,~k~Z~J~A~>~;~.~+', // 100
  '~M$#"!{:{9{7{*{){({\'~P~O{Z{Y{W', // 101
  '~n~^~K~;~+~m~]~N~<~,', // 102
  '~o~_~[~N~J~>~:~.~*~n~^~M~L~K~=~;~-~+', // 103
  '{k{[', // 104
  '{[%', // 105
  '{^{]{M{L', // 106
  '{l{j{i{h{g{^{Z{Y{X{W', // 107
  '&$#"!{j{i{h{g{]', // 108
  '(\'{l{\\', // 109
  '{m{l{\\{Z{Y{X{W(\'&$#"!', // 110
  '{]{m{l', // 111
  '{M{L{]', // 112
  '{X{H', // 113
  '{8{X', // 114
  '~o~_~O~?~.tdG7\'{o{n{m{l{^{]{\\{M{L{K{<{;{:{+{*{)~n~^~N~=~-scD@40$#"!{i{Y{X{H{G{F{9{8{7{({\'{&', // 115
  '~n~^~N~=~-scD{Y{X{W{O{N{H{={9{8{7~o~_~O~?~.td{o{n{:{+{*{)', // 116
  '~m~]~M~<~,fed43210/$#{t{i{h{g{f{d{G{F~n~^~N~=~-WG7\'{m{l{^{]{\\{[{Z{O{N{M{L{K{J{I{={<{;{9{8{7', // 117
  '~n~^~N~=~-W@"!{[{Z{J{I{9{8{7{({\'{&~m~]~M~<~,fed321/{t{h{g{f{d{W', // 118
  '{9{6', // 119
  '{G{9', // 120
  '{V{G', // 121
  '{6{V', // 122
  '~X~Q~P~I~H~@~?~>~<~;~:~0~/~.~-~,~+~*utsrqdcb~t~p~o~k~i~a~_~]~\\~N', // 123
  '~p~_~]~O~A~9~8~1~)~!vpofea`_UTSRQPODCBA@~s~q~n~l~h~`~^~P~M~K~I~@~?~;~/~-~+s', // 124
  '~n~a~^~N~;~/~+gWVFE543210/#"!{v{g{f{e~p~m~j~_~]~Z~Y~X~O~L~J~H~<~:~9~8~.~,~*~)tqpodca`_SQPOA@', // 125
  '~R~=~-sc@6&%${k{j{i{[{Z{Y{X{J{I{H{G{F{9{8{7{({\'{&~a~Q~>~;~0~/~+vurfebRCB321/{v{g{f{e', // 126
  '~t~s~q~p~o~m~l~k~j~i~h~a~`~_~]~\\~Z~Y~M~L~K~J~R~A~=~1~-~!sgcWVUTFED@6540&%$#"!{k{j{i{[{Z{Y{X{J{I{H{G{F{9{8{7{({\'{&', // 127
  '~i~[', // 128
  '~I~i', // 129
  '{u~I', // 130
  '{6{u', // 131
  '~[{6', // 132
  '~s~o~c~_~O~B~>~.tfed`PGCBA73{h{g{f{W~r~n~b~^~N~A~=~-scTD@0"!{[{Z{J{I{9{8{7{({\'{&', // 133
  '~r~p~b~`~Q~P~A~?~0~/vu@21\'{l{[{Z{V{J{I{8{7{6~s~o~c~_~R~O~B~>~1~.~!tgd`CBA4{h{g{f{F', // 134
  '~q~n~a~^~N~>~-scTDA"{m{\\{K{F{9{({\'{&~r~p~b~`~P~?~/ueP@32{i{W{V{6', // 135
  '~r~b~R~=~1~!g@40!{i~q~a~Q~>~0vfGA71\'{m{l{\\{K', // 136
  '{V{6', // 137
  '{F{V', // 138
  '{6{F', // 139
];

var animations = {
  attackM: {
    kf: attackM,
    f: [0,1,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,4]
  },
  attackN: {
    kf: attackN,
    f: [0,0,0,0,0,5,0,0,0,6,0,0,0,0,0,0,0,7]
  },
  attackO: {
    kf: attackO,
    f: [0,0,0,0,0,8,0,0,0,9,0,0,0,0,0,0,0,10]
  },
  attackP: {
    kf: attackP,
    f: [0,11,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,13]
  },
  cocoM: {
    kf: cocoM,
    f: [14,15,16,17,18,19,20,21]
  },
  cocoN: {
    kf: cocoN,
    f: [22,23,24,25,26,27,28,28]
  },
  cocoO: {
    kf: cocoO,
    f: [29,28,30,31,32,33,34,35]
  },
  heroM: {
    kf: heroM,
    f: [36,0,37,0,38,0,39]
  },
  heroN: {
    kf: heroN,
    f: [40,0,40,0,40,0,40]
  },
  heroO: {
    kf: heroO,
    f: [0,0,0,0,0,0,0]
  },
  idle0M: {
    kf: heroM,
    f: [0]
  },
  idle0N: {
    kf: attackN,
    f: [0]
  },
  idle0O: {
    kf: attackO,
    f: [0]
  },
  idle0P: {
    kf: attackP,
    f: [0]
  },
  idle1M: {
    kf: heroM,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,0,0,0,0,0,0,0,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0,0,0,0,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  idle1N: {
    kf: attackN,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  idle1O: {
    kf: attackO,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,0,0,0,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,0,0,0,0,0,0,0,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  idle1P: {
    kf: attackP,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0,0,0,0,0,0,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  idle2M: {
    kf: heroM,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,0,0,0,62,0,0,0,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,65,0,0,0,66,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  idle2N: {
    kf: attackN,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  idle2O: {
    kf: attackO,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  idle2P: {
    kf: attackP,
    f: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
  jump1M: {
    kf: jump1M,
    f: [0]
  },
  jump1N: {
    kf: attackN,
    f: [0]
  },
  jump1O: {
    kf: jump1O,
    f: [0]
  },
  jump1P: {
    kf: jump1P,
    f: [0]
  },
  jump2M: {
    kf: jump2M,
    f: [0,0,0,72,0,0,0,73,0,0,0]
  },
  jump2N: {
    kf: attackN,
    f: [0,0,0,0,0,0,0,0,0,0,0]
  },
  jump2O: {
    kf: jump2O,
    f: [0,0,0,74,0,0,0,75,0,0,0]
  },
  jump2P: {
    kf: jump2P,
    f: [0,0,0,76,0,0,0,69,0,0,0]
  },
  jump3M: {
    kf: jump3M,
    f: [0]
  },
  jump3N: {
    kf: attackN,
    f: [0]
  },
  jump3O: {
    kf: jump3O,
    f: [0]
  },
  jump3P: {
    kf: jump3P,
    f: [0]
  },
  jump4M: {
    kf: jump4M,
    f: [0,0,0,77,0,0,0,78,0,0,0]
  },
  jump4N: {
    kf: jump4N,
    f: [0,0,0,79,0,0,0,80,0,0,0]
  },
  jump4O: {
    kf: jump4O,
    f: [0,0,0,81,0,0,0,82,0,0,0]
  },
  jump4P: {
    kf: jump4P,
    f: [0,0,0,0,0,0,0,83,0,0,0]
  },
  powerM: {
    kf: powerM,
    f: [0,0,0,84,0,0,0,85,0,0,0,86,0,0,0,87]
  },
  powerN: {
    kf: powerN,
    f: [0,0,0,88,0,0,0,89,0,0,0,90,0,0,0,91]
  },
  powerO: {
    kf: powerO,
    f: [0,0,0,92,0,0,0,93,0,0,0,94,0,0,0,95]
  },
  runM: {
    kf: runM,
    f: [0,96,0,97,0,98,0,99,0,100,0,101,0,102,0,103,0]
  },
  runN: {
    kf: attackN,
    f: [0,0,0,0,0,104,0,79,0,0,0,105,0,0,0,0,0]
  },
  runO: {
    kf: attackO,
    f: [0,0,0,106,0,107,0,108,0,109,0,110,0,111,0,112,0]
  },
  runP: {
    kf: attackP,
    f: [0,0,0,0,0,69,0,113,0,0,0,114,0,0,0,0,0]
  },
  zombie_attackM: {
    kf: zombie_attackM,
    f: [0,0,0,0,0,0,0,0,0,0,0,115,0,0,0,0,0,0,0,0,0,0,0,116,0,0,0,0,0,0,0,0,0,0,0,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,118]
  },
  zombie_attackO: {
    kf: zombie_attackO,
    f: [0,0,0,0,0,0,0,0,0,0,0,119,0,0,0,0,0,0,0,0,0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,122]
  },
  zombie_wakeM: {
    kf: zombie_wakeM,
    f: [0,0,0,0,0,0,0,0,0,0,0,123,0,0,0,0,0,0,0,0,0,0,0,124,0,0,0,0,0,0,0,0,0,0,0,125,0,0,0,0,0,0,0,0,0,0,0,126,0,0,0,0,0,0,0,0,0,0,0,127]
  },
  zombie_wakeO: {
    kf: zombie_wakeO,
    f: [0,0,0,0,0,0,0,0,0,0,0,128,0,0,0,0,0,0,0,0,0,0,0,129,0,0,0,0,0,0,0,0,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,131,0,0,0,0,0,0,0,0,0,0,0,132]
  },
  zombie_walkM: {
    kf: zombie_attackM,
    f: [0,0,0,0,0,0,0,0,0,0,0,133,0,0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0,0,0,0,135,0,0,0,0,0,0,0,0,0,0,0,136]
  },
  zombie_walkO: {
    kf: zombie_attackO,
    f: [0,0,0,0,0,0,0,0,0,0,0,137,0,0,0,0,0,0,0,0,0,0,0,138,0,0,0,0,0,0,0,0,0,0,0,139,0,0,0,0,0,0,0,0,0,0,0,0]
  },
};