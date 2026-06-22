
// API 

const APIPort = 4321;

// Stadium

const stadium = `{  "name" : "EFT Map",
    "width" : 800,
    "height" : 350,
    "bg" : { "type" : "grass", "color" : "444444", "cornerRadius" : 0, "kickOffRadius" : 0 },
"vertexes" : [
        /* 0 */ { "x" : -700, "y" : 321, "cMask" : ["ball" ] },
        /* 1 */ { "x" : -700, "y" : -319, "cMask" : ["ball" ] },
        /* 2 */ { "x" : 699, "y" : 319, "cMask" : ["ball" ] },
        /* 3 */ { "x" : 601, "y" : -320, "cMask" : ["ball" ] },
        /* 4 */ { "x" : 0, "y" : 350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 5 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 6 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 7 */ { "x" : 0, "y" : -350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 8 */ { "x" : -700, "y" : -99, "bCoef" : 0.1, "cMasak" : ["ball" ] },
        /* 9 */ { "x" : -750, "y" : -99, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 10 */ { "x" : -750, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 11 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 12 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 13 */ { "x" : 749, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 14 */ { "x" : 749, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 15 */ { "x" : 699, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 16 */ { "x" : -700, "y" : 90, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 17 */ { "x" : -700, "y" : 321, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 18 */ { "x" : -700, "y" : -99, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 19 */ { "x" : -700, "y" : -319, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 20 */ { "x" : -700, "y" : 321, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 21 */ { "x" : 699, "y" : 319, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 22 */ { "x" : 700, "y" : 90, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 23 */ { "x" : 700, "y" : 319, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 24 */ { "x" : 700, "y" : -321, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 25 */ { "x" : 700, "y" : -90, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 26 */ { "x" : 601, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
        /* 27 */ { "x" : 601, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
        /* 28 */ { "x" : -699, "y" : -320, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 29 */ { "x" : 699, "y" : -321, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 30 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 31 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 32 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 33 */ { "x" : 0, "y" : 320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 34 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 35 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 36 */ { "x" : 0, "y" : -150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 37 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 38 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 39 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 40 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 41 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 42 */ { "x" : -710, "y" : 90, "cMask" : ["ball" ] },
        /* 43 */ { "x" : -710, "y" : 321, "cMask" : ["ball" ] },
        /* 44 */ { "x" : -710, "y" : 90, "cMask" : ["ball" ] },
        /* 45 */ { "x" : -710, "y" : 321, "cMask" : ["ball" ] },
        /* 46 */ { "x" : -710, "y" : -315, "cMask" : ["ball" ] },
        /* 47 */ { "x" : -710, "y" : -99, "cMask" : ["ball" ] },
        /* 48 */ { "x" : 710, "y" : -90, "cMask" : ["ball" ] },
        /* 49 */ { "x" : 709, "y" : -317, "cMask" : ["ball" ] },
        /* 50 */ { "x" : 709, "y" : -90, "cMask" : ["ball" ] },
        /* 51 */ { "x" : 709, "y" : 94, "cMask" : ["ball" ] },
        /* 52 */ { "x" : 709, "y" : 319, "cMask" : ["ball" ] },
        /* 53 */ { "x" : -699, "y" : 274, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 54 */ { "x" : -506, "y" : 141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 55 */ { "x" : -506, "y" : 141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 56 */ { "x" : -506, "y" : -141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 57 */ { "x" : -506, "y" : -141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 58 */ { "x" : -699, "y" : -274, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 59 */ { "x" : 698, "y" : 273, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 60 */ { "x" : 505, "y" : 140, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 61 */ { "x" : 505, "y" : 140, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 62 */ { "x" : 505, "y" : -142, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 63 */ { "x" : 505, "y" : -142, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 64 */ { "x" : 698, "y" : -275, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 65 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 66 */ { "x" : -700, "y" : -100, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 67 */ { "x" : 700, "y" : 90, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 68 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 69 */ { "x" : -713, "y" : 90, "cMask" : ["ball" ] },
        /* 70 */ { "x" : -713, "y" : 321, "cMask" : ["ball" ] },
        /* 71 */ { "x" : -713, "y" : -315, "cMask" : ["ball" ] },
        /* 72 */ { "x" : -713, "y" : -99, "cMask" : ["ball" ] },
        /* 73 */ { "x" : 712, "y" : -317, "cMask" : ["ball" ] },
        /* 74 */ { "x" : 712, "y" : -90, "cMask" : ["ball" ] },
        /* 75 */ { "x" : 712, "y" : 94, "cMask" : ["ball" ] },
        /* 76 */ { "x" : 712, "y" : 319, "cMask" : ["ball" ] },
        /* 77 */ { "x" : 704, "y" : -317, "cMask" : ["ball" ] },
        /* 78 */ { "x" : 704, "y" : -90, "cMask" : ["ball" ] },
        /* 79 */ { "x" : 704, "y" : -317, "cMask" : ["ball" ] },
        /* 80 */ { "x" : 704, "y" : -90, "cMask" : ["ball" ] },
        /* 81 */ { "x" : 704, "y" : 94, "cMask" : ["ball" ] },
        /* 82 */ { "x" : 704, "y" : 319, "cMask" : ["ball" ] },
        /* 83 */ { "x" : 704, "y" : 94, "cMask" : ["ball" ] },
        /* 84 */ { "x" : 704, "y" : 319, "cMask" : ["ball" ] },
        /* 85 */ { "x" : -705, "y" : 90, "cMask" : ["ball" ] },
        /* 86 */ { "x" : -705, "y" : 321, "cMask" : ["ball" ] },
        /* 87 */ { "x" : -705, "y" : 90, "cMask" : ["ball" ] },
        /* 88 */ { "x" : -705, "y" : 321, "cMask" : ["ball" ] },
        /* 89 */ { "x" : -705, "y" : -315, "cMask" : ["ball" ] },
        /* 90 */ { "x" : -705, "y" : -99, "cMask" : ["ball" ] },
        /* 91 */ { "x" : -705, "y" : -315, "cMask" : ["ball" ] },
        /* 92 */ { "x" : -705, "y" : -99, "cMask" : ["ball" ] },
        /* 93 */ { "x" : -699, "y" : 319.88890075683594, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 94 */ { "x" : 699, "y" : 318.88890075683594, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 95 */ { "x" : -65.65535153283014, "y" : -27.554306573337975, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 96 */ { "x" : -65.65535153283014, "y" : 28.713054537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 97 */ { "x" : -29.48347653283014, "y" : -27.554306573337975, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 98 */ { "x" : -29.48347653283014, "y" : 28.713054537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 99 */ { "x" : -29.48347653283014, "y" : 16.655762871106468, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 100 */ { "x" : -29.48347653283014, "y" : -15.49701490667131, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 101 */ { "x" : -53.59805986616345, "y" : -15.49701490667131, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 102 */ { "x" : -53.59805986616345, "y" : 16.655762871106468, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 103 */ { "x" : -53.59805986616345, "y" : -5.851181573337978, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 104 */ { "x" : -53.59805986616345, "y" : 7.009929537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 105 */ { "x" : -41.540768199496796, "y" : -5.851181573337978, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 106 */ { "x" : -41.540768199496796, "y" : 7.009929537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 107 */ { "x" : -17.426184866163453, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 108 */ { "x" : -17.426184866163453, "y" : 29.516873982217575, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 109 */ { "x" : 18.745690133836547, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 110 */ { "x" : 18.745690133836547, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 111 */ { "x" : -5.368893199496796, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 112 */ { "x" : -5.368893199496796, "y" : 29.516873982217575, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 113 */ { "x" : -5.368893199496796, "y" : -5.047362128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 114 */ { "x" : -5.368893199496796, "y" : 7.813748982217577, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 115 */ { "x" : 6.688398467169861, "y" : -5.047362128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 116 */ { "x" : 6.688398467169861, "y" : 7.813748982217577, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 117 */ { "x" : 29.19534291161432, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 118 */ { "x" : 29.19534291161432, "y" : -6.655001017782421, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 119 */ { "x" : 65.36721791161432, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 120 */ { "x" : 65.36721791161432, "y" : -6.655001017782421, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 121 */ { "x" : 53.30992624494763, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 122 */ { "x" : 41.252634578281004, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 123 */ { "x" : 41.252634578281004, "y" : 31.92833231555091, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 124 */ { "x" : 53.30992624494763, "y" : 31.92833231555091, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] }],
"segments" : [
        { "v0" : 8, "v1" : 9, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 9, "v1" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 10, "v1" : 11, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 12, "v1" : 13, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 13, "v1" : 14, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 14, "v1" : 15, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 5, "v1" : 6, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
        { "v0" : 6, "v1" : 5, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
        { "v0" : 6, "v1" : 7, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 16, "v1" : 17, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
        { "v0" : 18, "v1" : 19, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
        { "v0" : 22, "v1" : 23, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "x" : 700 },
        { "v0" : 24, "v1" : 25, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "x" : 700 },
        { "v0" : 26, "v1" : 27, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ] },
        { "v0" : 28, "v1" : 29, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ] },
        { "v0" : 30, "v1" : 31, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 32, "v1" : 33, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 42, "v1" : 43, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 44, "v1" : 45, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 46, "v1" : 47, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 49, "v1" : 50, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 51, "v1" : 52, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 54, "v1" : 53, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 56, "v1" : 55, "curve" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 11.430052302761343 },
        { "v0" : 58, "v1" : 57, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 59, "v1" : 60, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 61, "v1" : 62, "curve" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 11.430052302761343 },
        { "v0" : 63, "v1" : 64, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 65, "v1" : 66, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "x" : -700 },
        { "v0" : 67, "v1" : 68, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 700 },
        { "v0" : 69, "v1" : 70, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 71, "v1" : 72, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 73, "v1" : 74, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 75, "v1" : 76, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 77, "v1" : 78, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 79, "v1" : 80, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 81, "v1" : 82, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 83, "v1" : 84, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 85, "v1" : 86, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 87, "v1" : 88, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 89, "v1" : 90, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 91, "v1" : 92, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 93, "v1" : 94, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ] },
        { "v0" : 95, "v1" : 96, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 95, "v1" : 97, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 96, "v1" : 98, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 98, "v1" : 99, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 100, "v1" : 97, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 100, "v1" : 101, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 99, "v1" : 102, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 101, "v1" : 103, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 104, "v1" : 102, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 103, "v1" : 105, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 104, "v1" : 106, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 105, "v1" : 106, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 107, "v1" : 108, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 107, "v1" : 109, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 110, "v1" : 109, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 110, "v1" : 111, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 111, "v1" : 113, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 114, "v1" : 112, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 113, "v1" : 115, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 114, "v1" : 116, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 115, "v1" : 116, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 108, "v1" : 112, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 117, "v1" : 118, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 117, "v1" : 119, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 120, "v1" : 119, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 120, "v1" : 121, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 122, "v1" : 118, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 122, "v1" : 123, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 121, "v1" : 124, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 123, "v1" : 124, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] }],
    "planes" : [
        { "normal" : [0,1 ], "dist" : -320, "cMask" : ["ball" ] },
        { "normal" : [0,-1 ], "dist" : -317.5, "cMask" : ["ball" ] },
        { "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
        { "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1 },
        { "normal" : [1,0 ], "dist" : -800, "bCoef" : 0.1 },
        { "normal" : [-1,0 ], "dist" : -800, "bCoef" : 0.1 }],
    "goals" : [
        { "p0" : [-707,-99 ], "p1" : [-707,89 ], "team" : "red" },
        { "p0" : [707,90 ], "p1" : [707,-90 ], "team" : "blue" }],

    "discs" : [
        { "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFFFFF", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
        { "radius" : 6, "invMass" : 0, "pos" : [-700,89 ], "color" : "FF0000" },
        { "radius" : 6, "invMass" : 0, "pos" : [-700,-99 ], "color" : "FF0000" },
        { "radius" : 6, "invMass" : 0, "pos" : [700,90 ], "color" : "33FF" },
        { "radius" : 6, "invMass" : 0, "pos" : [700,-89 ], "color" : "33FF" } ],
    "playerPhysics" : {
        "bCoef" : 0,
        "acceleration" : 0.11,
        "kickingAcceleration" : 0.083},
    "ballPhysics" : "disc0",
    "spawnDistance" : 350,
    "canBeStored" : false,
    "traits" : {}}`;

// Init Room

document.title = '⚡ x4 - EFT ⚡';
const roomName = "[⚡] x4 - El futbol de Toto [T1] [⚡]";
const maxPlayers = 20;
const scoreLimit = 4;
const timeLimit = 4;

var room = HBInit({
	roomName: roomName,
	maxPlayers: maxPlayers,
	noPlayer: true,
    public: false,
    geo: {code: "ar", lat: -36, lon:-59.9964}
});

room.setCustomStadium(stadium);
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);

// Announcements

const textColor = {
    ERROR: 0xFF0000,
    NORMAL: 0xFFFFFF,
    STATS: 0xD69D29,
    ADMIN: 0x38D6D6,
    SUCCESS: 0x58C78E,
    GAME: 0xEDE06D,
    RED: 0xFF6363,
    BLUE: 0x708DFF
};

const textSound = {
    MUTE: 0,
    NORMAL: 1,
    IMPORTANT: 2
};

const textFont = {
    NORMAL: "normal",
    BOLD: "bold",
    ITALIC: "italic",
    SMALL: "small",
    SMALL_BOLD: "small-bold",
    SMALL_ITALIC: "small-italic"
};

// Player Management

let playersTeam = [
    new Set(),
    new Set(),
    new Set()
    ];

let adminsList = new Set();

let playersInfo = new Map();

let playerKickBall = [ 
    -1, 
    -1
    ];

let playersAFK = new Set();

// GoalKeeper Management

let isGKgot = false; 
let gkRed = -1;
let gkBlue = -1;

// MVP Management

let MVPstats = {};

const MVPpoints = {

    goal: 2,
    assist: 1,
    own_goal: -1,
    clean_sheet: 3

}

// Game Management

let isGameStarted = false;

// Teams management

const SPEC = 0;
const RED = 1;
const BLUE = 2;

let ProfitXP = [-1,-1];

// Ranks management

const RANKS = [
    {
        name: "CONO",
        display: "👻CONO",
        min: -Infinity,
        max: -5
    },
    {
        name: "BRONCE",
        display: "🟤BRONCE",
        min: -5,
        max: 100
    },
    {
        name: "PLATA",
        display: "⚪PLATA",
        min: 100,
        max: 250
    },
    {
        name: "ORO",
        display: "🟡ORO",
        min: 250,
        max: 500
    },
    {
        name: "PLATINO",
        display: "🔵PLATINO",
        min: 500,
        max: 1000
    },
    {
        name: "DIAMANTE",
        display: "🟣DIAMANTE",
        min: 1000,
        max: 2000
    },
    {
        name: "ESMERALDA",
        display: "🟢ESMERALDA",
        min: 2000,
        max: 3000
    },
    {
        name: "LEGEND",
        display: "💠LEGEND",
        min: 3000,
        max: Infinity
    }
];

// EVENTS

room.onRoomLink = async function(){

    room.startGame();

};

room.onPlayerJoin = async function(player){

    const auth = player.auth;
    const playerID = player.id;
    const playerName = player.name;

    // Roles
    const ADMIN = 1;
    const BANNED = 5;

    if(!(await playerExists(auth))){
        await API.createPlayer(playerName, auth);
    }

    const stats = await API.searchPlayer(auth);
    
    if(stats.nombre !== playerName){
        room.sendAnnouncement(stats.nombre + " se ha cambiado el nombre a " + playerName + "!", null, textColor.SUCCESS, textFont.BOLD, textSound.MUTE);
        await API.changeName(auth, playerName);
    }

    if(await isRole(auth, ADMIN)){
        adminsList.add(playerID);
        room.setPlayerAdmin(playerID, true);
    }

    if(await isRole(auth, BANNED)){
        room.kickPlayer(playerID, "[❌] Estás blacklisteado flaquito", true);
    }

    if(!areEnoughPlayers()){
        fillEmptiestTeam(playerID);
    } else {
        // Stays on spectator
        updateTeamsChange(SPEC, playerID);
    }

    playersInfo.set(playerID, {
        auth: auth.toString(),
        conn: player.conn.toString(),
        rank: (await getRank(stats)).toString(),
        rankMessage: (await getRankMessage(stats)).toString(),
        club: stats.id_club
    });

};

room.onPlayerLeave = async function(player){
    
    await managePlayerLeft(player);

};

room.onPlayerKicked = async function (kickedPlayer, reason, ban, byPlayer) {

    await managePlayerLeft(kickedPlayer);

};

room.onTeamGoal = async function(team){

    await manageGoalStatsAndDisplay(team);

};

room.onTeamVictory = async function(scores){

    const result = getTeamResult(scores);
    const winningTeam = result.winner;
    const loosingTeam = result.loser;

    await saveGameStats(winningTeam);

    autoStop();

    moveLosersToSpec(loosingTeam);
    if(winningTeam === BLUE){
        movePlayersToStreak(BLUE, RED);
    }
    moveSpecToTeam(BLUE);

};

room.onPlayerChat = function (player, message, playerName) {

    const permissionMessage = "No tenés los permisos para realizar este comando.";
    const playerID = player.id;

    if (message.charAt(0) == '!') {
        words = message.split(" ")
        switch (words[0].substring(1)) {

            case "nv":
            case "bb":
                room.kickPlayer(playerID, "Nos vemos!", false);
            break;

            case "stats":
                showStats(playerID);
            break;

            case "rank":
                showRank(playerID);
            break;

            // Admins Only

            case "rr":

                if(!adminsList.has(playerID)){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                room.stopGame();
                room.startGame();

            break;

            case "kick":

                if(!adminsList.has(playerID)){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                kickBanPlayer(words, false, playerID);

            break;

            case "ban":

                if(!adminsList.has(playerID)){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                kickBanPlayer(words, true, playerID);

            break;

            case "blacklist":

                if(!adminsList.has(playerID)){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                addBlackList(playerID);
                kickBanPlayer(words, true, playerID);

            break;


            default:
                room.sendAnnouncement("Comando no existente, utiliza !help para ver los comandos", null, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);

        }

        return false; // Avoid sending messages after calling commands

    }

    // Message management

    let color = textColor.NORMAL;
    let font = textFont.NORMAL;
    let teamEmoji = getTeamEmoji(player.team);
    let rank = playersInfo.get(playerID).rank;

    if(adminsList.has(playerID)){
        color = textColor.ADMIN;
    }

    room.sendAnnouncement("[" + teamEmoji + "]" + "["+ rank +"] " +  player.name + ": " + message, null, color, font, textSound.NORMAL);

    return false; // Don't send default message

};

room.onPlayerTeamChange = function (changedPlayer, byPlayer){

    updateTeamsChange(changedPlayer.team, changedPlayer.id);

};

room.onPlayerBallKick = function (player) {
    playerKickBall[1] = playerKickBall[0];
    playerKickBall[0] = player;
};

room.onGameStart = async function (byPlayer){

    await initJerseys();
    await calculateXPGains();

};

room.onGameStop = function () {

    restartGameStats();

};

room.onGameTick = function(){

    let ballPosition = room.getBallPosition();

    if ((ballPosition.x != 0 || ballPosition.y != 0) && !isGameStarted) {
        
        isGameStarted = true;

        if(!isGKgot){
            
            gkRed = getGK(RED, false)
            gkBlue = getGK(BLUE, false); 
            isGKgot = true;

        }

    }

};

room.onStadiumChange = function(newStadiumName, byPlayer) {
    if (newStadiumName === "EFT Map") return;
    
    if (!adminsList.has(byPlayer.id)) {
        room.sendAnnouncement("No se puede cambiar de mapa", byPlayer.id, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        room.setCustomStadium(stadium);
    }
};

// FUNCTIONS 

async function initJerseys(){

    const jerseyAmount = await API.getAmountJerseys();

    let jerseyNames = ["", ""];
    let randomJerseyID = [-1, -1];

    randomJerseyID[0] = randomIntFromInterval(1, jerseyAmount);

    do{

        randomJerseyID[1] = randomIntFromInterval(1, jerseyAmount);

    }while(randomJerseyID[0] == randomJerseyID[1] && jerseyAmount > 1);

    for(let i = 1; i < playersTeam.length; i++){

        let jerseyData = await API.searchJerseyByID(randomJerseyID[i-1]);
        let jersey = JSON.parse(jerseyData.color);

        room.setTeamColors(
            i,
            jersey[0],
            parseInt(jersey[1], 16),
            jersey.slice(2).map(c => parseInt(c, 16))
        );

        jerseyNames[i-1] = jerseyData.nombre;

    }

    room.sendAnnouncement("[🔰] PARTIDO:", null, textColor.GAME, textFont.BOLD, textSound.IMPORTANT);
    room.sendAnnouncement("[🔴] " + jerseyNames[0] + " VS " + jerseyNames[1] + " [🔵]", null, textColor.GAME, textFont.BOLD, textSound.IMPORTANT);

}

async function autoStop(){

    const cooldown = 5000;

    room.stopGame();
    room.sendAnnouncement("Comenzando proximo partido pronto...");
    await delay(cooldown);
    room.startGame();

}

async function calculateXPGains(){

    const defaultGains = 8;

    const TEAMS_AMOUNT = 2;
    const PLAYERS_AMOUNT = 4;

    let averageXP = [
        0,
        0
    ]

    for(let team = 1; team < TEAMS_AMOUNT + 1; team++){

        for (const playerID of playersTeam[team]) {

            averageXP[team - 1] += (await searchPlayer(getAuth(playerID))).xp;

        }

        averageXP[team - 1] /= playersTeam[team].size;

    }

    const winRate = [
        getExpectedWinRate(averageXP[0], averageXP[1]),
        getExpectedWinRate(averageXP[1], averageXP[0]),
    ];

    ProfitXP[RED - 1] = Math.ceil(defaultGains * (1 - winRate[RED - 1]));
    ProfitXP[BLUE - 1] = Math.ceil(defaultGains * (1 - winRate[BLUE - 1]));

}

function getExpectedWinRate(ratingA, ratingB){
    return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function getTeamResult(scores){

    let winner = -1;
    let loser = -1;

    if(scores.red > scores.blue){
        winner = RED;
        loser = BLUE;
    } else if (scores.blue > scores.red){
        winner = BLUE;
        loser = RED;
    }

    return {
        winner,
        loser
    }

}

function fillEmptiestTeam(playerID){

    if(playersTeam[RED].size <= playersTeam[BLUE].size){

        updateTeamsChange(RED, playerID);
        room.setPlayerTeam(playerID, RED);

    } else {

        updateTeamsChange(BLUE, playerID);
        room.setPlayerTeam(playerID, BLUE);

    }

}

function moveSpecToTeam(team){
    
    if(team === -1){
        return;
    }

    const MAX_PLAYERS = 1;
    let i = 0;

    const players = [...playersTeam[SPEC]];

    for(const playerID of players){

        if(i >= MAX_PLAYERS){
            break;
        }

        if(playersAFK.has(playerID)){
            continue;
        }

        room.setPlayerTeam(playerID, team);
        updateTeamsChange(team, playerID);

        i++;

    }

}

function movePlayersToStreak(team, toTeam){

    if(team === -1 || toTeam === -1){
        return;
    }

    const players = [...playersTeam[team]];
    
    for(const playerID of players){
        room.setPlayerTeam(playerID, toTeam);
        updateTeamsChange(toTeam, playerID);

    };

}

function moveLosersToSpec(loosingTeam) {

    if(loosingTeam === -1){
        return;
    }

    const players = [...playersTeam[loosingTeam]];
    
    for(const playerID of players){

        room.setPlayerTeam(playerID, SPEC);
        updateTeamsChange(SPEC, playerID);

    };

}

function getMVP(){

    let mvpID = Object.keys(MVPstats)[0];

    for (const playerID in MVPstats) {
        if (MVPstats[playerID] > MVPstats[mvpID]) {
            mvpID = playerID;
            
        }

    }

    return parseInt(mvpID);

}

function addPointsMVP(playerID, points){

    if (!MVPstats[playerID]) {
        MVPstats[playerID] = 0;
    }

    MVPstats[playerID] += points;

}

function getPlayerIDbyName(name) {

    const playersList = room.getPlayerList();

    for (let i = 0; i < playersList.length; i++) {

        playerName = playersList[i].name.replace(/ /g, '_');

        if (playerName == name) {
            return playersList[i].id;
        }
    }

    return -1;

}

function kickBanPlayer(words, ban, playerID){

    const kickedID = getPlayerIDbyName(words[1].substring(1));

    if(kickedID === -1){
        room.sendAnnouncement("Jugador no encontrado", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        return;
    }
    
    room.kickPlayer(kickedID, words.slice(2).join(' '), ban);

}

async function addBlackList(playerID){

    const kickedID = getPlayerIDbyName(words[1].substring(1));

    if(kickedID === -1){
        room.sendAnnouncement("Jugador no encontrado", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        return;
    }

    const playerAuth = getAuth(kickedID);
    const BANNED = 5;

    await API.createPlayerRole(playerAuth, BANNED);

    room.sendAnnouncement("[🚧] Jugador blacklisteado correctamente.", playerID, textColor.SUCCESS, textFont.BOLD, textSound.IMPORTANT);

}

async function manageGoalStatsAndDisplay(team){

    const scorer = playerKickBall[0];
    const assistant = playerKickBall[1];

    const scorerAuth = getAuth(scorer.id);
    const assistantAuth = getAssistant(scorer, assistant);

    const scoredForOwnTeam = scorer.team === team;

    let color = team === RED ? textColor.RED : textColor.BLUE;

    if(scoredForOwnTeam){

        room.sendAnnouncement("[⚽] " + await getPhrase(scorer.name, 'gol'), null, color, textFont.NORMAL, textSound.IMPORTANT);
        await API.updatePlayerStats(scorerAuth, "goles");
        addPointsMVP(scorer.id, MVPpoints.goal);

        if(assistantAuth !== -1){ // Assist

            room.sendAnnouncement("[👟] " + await getPhrase(assistant.name, 'asistencia'), null, color, textFont.NORMAL, textSound.IMPORTANT);
            await API.updatePlayerStats(assistantAuth, "asistencias");
            addPointsMVP(assistant.id, MVPpoints.assist);

        }

    } else { // own Goal

        room.sendAnnouncement("[🤡] " + await getPhrase(scorer.name, 'gol_en_contra'), null, color, textFont.NORMAL, textSound.IMPORTANT);
        await API.updatePlayerStats(scorerAuth, "goles_en_contra");
        addPointsMVP(scorer.id, MVPpoints.own_goal);

    }

}

async function getPhrase(name, type){

    const phrasesData = await API.getPhrasesByType(type);

    const randomPhrase = phrasesData[randomIntFromInterval(0, phrasesData.length - 1)].frase;

    const phrase = randomPhrase.replaceAll("{player}", name);

    return phrase;    

}

function getAssistant(scorer, assistant){

    const thereIsAssistant = scorer.id !== assistant.id && scorer.team === assistant.team;

    if(thereIsAssistant){   
        return getAuth(assistant.id);
    }

    return -1;

}

function getGK(team, replacement) {

    if (team >= 3 || team <= 0) return -1;
    if (playersTeam[team].size <= 0) return -1;

    let firstPlayer = playersTeam[team].values().next().value
    if (playersTeam[team].size == 1) return firstPlayer;

    // Define arch position
    let archPositionX;
    if (team == 1) {
        archPositionX = -700;
    } else {
        archPositionX = 700;
    }

    // start the search with the first one
    let id = firstPlayer;
    let lesserDistance = Math.abs(
        room.getPlayer(id).position.x - archPositionX
    );

    // Search the nearbiest player to the arch
    for (const playerID of playersTeam[team]) {

        let distance = Math.abs(
            room.getPlayer(playerID).position.x - archPositionX
        );

        if (distance < lesserDistance) {
            lesserDistance = distance;
            id = playerID;
        }
    }

    // Only move at the start of the game
    if(!replacement){
        movePlayer(id, archPositionX, -10);
    }

    return id;
}

function getTeamEmoji(team){

    switch(team){

        case SPEC:
            return '⚪';

        case RED:
            return '🔴';

        case BLUE:
            return '🔵';

        default:
            return '⚫';
    }
}

function movePlayer(id, x, y) {
    room.setPlayerDiscProperties(id, {
        x: x,
        y: y,
        xspeed: 0,
        yspeed: 0
    });
}

function restartGameStats(){
    
    isGKgot = false;
    gkRed = -1;
    gkBlue = -1;

    playerKickBall = [
        -1,
        -1
    ];

    ProfitXP = [
        -1,
        -1
    ];

    isGameStarted = false;

    MVPstats = {};

}

async function saveGameStats(winningTeam){

    if(!areEnoughPlayers()){
        console.log("No hay jugadores suficientes para guardar estadísticas de partido");
        return;
    }
    
    if(winningTeam === -1){
        console.log("ERROR: No se guardaron estadisticas, equipo mal cargado");
        return;
    }
    
    const PLAYERS_AMOUNT = 4;
    const TEAMS_AMOUNT = 2;
    const xpGains = ProfitXP[winningTeam - 1];

    const scores = room.getScores();


    for(let team = 1; team < TEAMS_AMOUNT + 1; team++){

        for (const playerID of playersTeam[team]) {
            
            let playerAuth = getAuth(playerID);

            await API.updatePlayerStats(playerAuth, "partidos_jugados");

            if(isGK(playerID)){

                await API.updatePlayerStats(playerAuth, "partidos_arquero");

                const cleanSheet = winningTeam === team && (scores.red == 0 || scores.blue == 0);

                if(cleanSheet){
                    await API.updatePlayerStats(playerAuth, "vallas_invictas");
                    addPointsMVP(playerID, MVPpoints.clean_sheet);
                }
            }            

            if(team === winningTeam){

                await API.updatePlayerStats(playerAuth, "partidos_ganados");
                await API.updateXP(playerAuth, xpGains);

            } else {

                await API.updatePlayerStats(playerAuth, "partidos_perdidos");
                await API.updateXP(playerAuth, -xpGains);

            }
            
        }
        
    }

    let mvpAuth = getAuth(getMVP());
    await API.updatePlayerStats(mvpAuth, "mvps");
}

function isGK(playerID){
    return playerID === gkRed || playerID === gkBlue;
}

async function showStats(playerID){

    const auth = getAuth(playerID);

    if(!(await playerExists(auth))){
        room.sendAnnouncement("ERROR: No estas cargado en la base de datos", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        return;
    }

    const player = await API.searchPlayer(auth);

    room.sendAnnouncement("--- Estadísticas de " + player.nombre + " ---", null, textColor.STATS, textFont.NORMAL, textSound.MUTE);
    room.sendAnnouncement(
    `
    G⚽: ${player.goles} | A👟:  ${player.asistencias} | EC🤡: ${player.goles_en_contra} | MVP🏆: ${player.mvps}
    PJ: ${player.partidos_jugados} | PG✅: ${player.partidos_ganados} | PP❌: ${player.partidos_perdidos} | DF💩: ${player.partidos_abandonados}
    PA🧤: ${player.partidos_arquero} | VI🥅: ${player.vallas_invictas}

    💲 ${player.monedas}
    XP🔰: ${player.xp}
    `, null, textColor.STATS, textFont.SMALL, textSound.NORMAL
    );

    console.log(await getRank(player));

}

async function showRank(playerID){

    const auth = getAuth(playerID);

    if(!(await playerExists(auth))){
        room.sendAnnouncement("ERROR: No estas cargado en la base de datos", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        return;
    }

    const player = await API.searchPlayer(auth);
    const rankMessage = playersInfo.get(playerID).rankMessage;

    room.sendAnnouncement("--- Rango de " + player.nombre + " ---", null, textColor.STATS, textFont.NORMAL, textSound.MUTE);
    room.sendAnnouncement(rankMessage, null, textColor.STATS, textFont.NORMAL, textSound.NORMAL);


}

async function getRankProgress(player) {

    const XP = player.xp;

    const rank = RANKS.find(
        rank => XP >= rank.min && XP < rank.max
    );

    if (!rank) {
        return null;
    }

    const currentRank = (await getRank(player)).toString();

    if (rank.name === "LEGEND") {
        return {
            currentRank,
            nextRank: "MAX",
            currentXP: XP,
            nextXP: XP,
            progress: 1
        };
    }

    if (rank.name === "CONO") {
        return {
            currentRank,
            nextRank: RANKS[1].display,
            currentXP: XP,
            nextXP: rank.max,
            progress: 1
        };
    }

    const LEVEL_AMOUNT = 5;
    const totalXP = rank.max - rank.min;
    const xpPerDivision = totalXP / LEVEL_AMOUNT;

    let rankLevel = 0;

    for (let i = 1; i <= LEVEL_AMOUNT; i++) {
        const threshold = rank.min + (i - 1) * xpPerDivision;

        if (XP >= threshold) {
            rankLevel++;
        }
    }

    const currentDivisionMin =
        rank.min + (rankLevel - 1) * xpPerDivision;

    const currentDivisionMax =
        rankLevel === LEVEL_AMOUNT
            ? rank.max
            : rank.min + rankLevel * xpPerDivision;

    let nextRank;

    if (rankLevel < LEVEL_AMOUNT) {
        nextRank =
            rank.display +
            " " +
            getRankByInt(rankLevel + 1);
    } else {
        nextRank =
            RANKS.find(r => r.min === rank.max)?.display ??
            "MAX";
    }

    const progress =
        (XP - currentDivisionMin) /
        (currentDivisionMax - currentDivisionMin);

    return {
        currentRank,
        nextRank,
        currentXP: XP,
        nextXP: currentDivisionMax,
        progress
    };
}

function generateXPBar(progress, size = 11) {
    const filled = Math.floor(progress * size);

    return (
        "█ ".repeat(filled) +
        ". ".repeat(size - filled)
    ).trim();
}

async function getRankMessage(player) {
    const info = await getRankProgress(player);

    const bar = generateXPBar(info.progress);

    let xpLine;

    if (info.nextRank === "MAX") {
        xpLine = `[ ${info.currentXP} ]`;
    } else {
        xpLine = ` ${info.currentXP} / ${info.nextXP}]`;
    }

    return (
        `${info.currentRank} ` +
        `[ ${bar} ] ` +
        `${info.nextRank}\n` +
        `Progreso XP: ${xpLine}`
    );
}

async function getRank(player){

    const XP = player.xp;

    const rank = RANKS.find(
        rank => XP >= rank.min && XP < rank.max
    );

    let rankName = rank.name

    if(rankName == "LEGEND" || rankName == "CONO"){
        return rank.display;
    }
    
    let rankLevel = 0;
    const LEVEL_AMOUNT = 5;
    const total = rank.max - rank.min;
    const xpPerDivision = total / LEVEL_AMOUNT;

    for(let i=1; i<=LEVEL_AMOUNT; i++){

        const divisionThreshold = rank.min + (i - 1) * xpPerDivision;

        if (XP >= divisionThreshold) {
            rankLevel++;
        }

    }

    return rank.display + ' ' + getRankByInt(rankLevel);

}

function getRankByInt(level){

    switch(level){

    case 1:
        return "I";

    case 2:
        return "II";

    case 3:
        return "III";

    case 4:
        return "IV";

    case 5:
        return "V";

    default: 
        return " ";

    }

}   

function updateTeamsChange(team, playerID) {  

    for(let i = 0; i < playersTeam.length; i++) {
        playersTeam[i].delete(playerID);
    }

    playersTeam[team].add(playerID);
    
}

function updateTeamsQuit(team, playerID) {
    switch (team) {
            case 0:
                playersTeam[0].delete(playerID);
                break;
            case 1:
                playersTeam[1].delete(playerID);
                break;
            case 2:
                playersTeam[2].delete(playerID);
                break;
        }
}

function getAuth(playerId) {

    if (!playersInfo.has(playerId)) {
        return -1;
    }

    const playerInfo = playersInfo.get(playerId);

    return playerInfo.auth;
}

function areEnoughPlayers(){

    const PLAYER_AMOUNT = 4;

    if(playersTeam[RED].size != PLAYER_AMOUNT || playersTeam[BLUE].size != PLAYER_AMOUNT){
        return false;
    }

    return true;

}

async function managePlayerLeft(player){

    const ID = player.id;
    const team = player.team;
    const auth = getAuth(ID);

    if(team !== SPEC && isGameStarted){
        await API.updatePlayerStats(auth, "partidos_abandonados");
    }

    updateTeamsQuit(team, ID);

    if (adminsList.has(ID)){
        adminsList.delete(ID);
    }

    if(ID === gkBlue){
        gkBlue = getGK(2, true);
    }else if(ID === gkRed){
        gkRed = getGK(1, true);
    }

    delete playersInfo[ID];

}

async function playerExists(auth){

    const player = await API.searchPlayer(auth);
    return player !== null;

}

async function isRole(auth, role){

    const player = await API.searchPlayerRole(auth, role);

    return player !== null;

}

function randomIntFromInterval(min, max) {

    if(min > max){
        throw new Error("El minimo no puede ser mayor al maximo");
    }

    return Math.floor(Math.random() * (max - min + 1) + min)
}

const API = {

    async createPlayer(name, auth){
    
        const response = await fetch(
            `http://localhost:${APIPort}/jugador/crear`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    auth
                })
            }
        );

        /*
        console.log(response.status);
        const data = await response.text();
        console.log(data);
        */
    
    },

    async createPlayerRole(auth, roleID){

        const response = await fetch(
            `http://localhost:${APIPort}/jugador-rol/crear`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth,
                    roleID
                })
            }
        );

        /*
        console.log(response.status);
        const data = await response.text();
        console.log(data);
        */

    },

    async searchPlayer(auth){

        const response = await fetch(
            `http://localhost:${APIPort}/jugador/buscar/${auth}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )

        //console.log(response.status);
    
        return await response.json();

    },

    async searchPlayerRole(auth, role){

        const response = await fetch(
            `http://localhost:${APIPort}/jugador-rol/buscar/${auth}/${role}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )

        return await response.json();

    },

    async getPhrasesByType(tipoFrase){

        const response = await fetch(
            `http://localhost:${APIPort}/frases/buscar/${tipoFrase}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )

        return await response.json();

    },

    async searchJerseyByID(id){

        const response = await fetch(
            `http://localhost:${APIPort}/remera/buscar/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )

        return await response.json();

    },

    async getAmountJerseys(){

        const response = await fetch(
            `http://localhost:${APIPort}/remera/cantidad`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )

        const data = await response.json();
        const amount = parseInt(data.cantidad);

        return amount;

    },

    async updatePlayerStats(auth, stat){

        if(!areEnoughPlayers()){
            console.log("No hay jugadores suficientes para guardar estadísticas");
            return;
        }

        const scores = room.getScores();
        const extra = scores.time >= scores.timeLimit;

        const player = playersInfo.get(auth);
        const clubId = player.club;

        const response = await fetch(
            `http://localhost:${APIPort}/jugador/agregar-estadistica`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    stat,
                    auth,
                    extra,
                    clubId
                })
            }
            
        )

        // update cache of player rank
        
        const stats = await API.searchPlayer(auth);
        player.rank = (await getRank(stats)).toString(),
        player.rankMessage = (await getRankMessage(player)).toString();

        /*
        console.log(response.status);
        const data = await response.text();
        console.log(data);
        */

    },

    async updateXP(auth, xp){

        if(!areEnoughPlayers()){
            console.log("No hay jugadores suficientes para guardar estadísticas");
            return;
        }

        const player = playersInfo.get(auth);
        const clubId = player.club;

        const response = await fetch(
            `http://localhost:${APIPort}/jugador/cambiar-nombre`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    xp,
                    auth,
                    clubId
                })
            }
            
        )

    },

    async changeName(auth, name){

        const response = await fetch(
            `http://localhost:${APIPort}/jugador/cambiar-nombre`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    auth,
                    name
                })
            }
            
        )

    }

};
