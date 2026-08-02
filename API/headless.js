
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
const public = false;
let linkAnunciado = false;

var room = HBInit({
	roomName: roomName,
	maxPlayers: maxPlayers,
	noPlayer: true,
    public: public,
    geo: {code: "ar", lat: -36, lon:-59.9964}
});

room.setCustomStadium(stadium);
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);

// Discord webHooks

const webhookURLs = {
    adminRecs: "https://discord.com/api/webhooks/1533534888681144361/PbdQroC8f_S8F_NQ-EfD3KX0zEuuBQFwn5osVWrV7XBq3BJHZg5lSLEErQCfdvZkpQ8Z",
    Recs: "https://discord.com/api/webhooks/1188203698996912138/KtxhoWNi5ChdG8u3-fXWWxFspzfXgzGUwQDDXByyarT56XSl1QWXlMmcJhwrE1u4-4XC",
    banLog: "https://discord.com/api/webhooks/1193650779836387478/daa8v24aiwvDQy25bSvlvkMF9YXbQQ1aXmDO4RLdlI_U10YF4GRWQewA8HP-AjRwDvUi",
    adminCalls: "https://discord.com/api/webhooks/1190405741991960687/bbWX7UTZCRNFKXIcH7V5OFQl0z86M0mpfr1Yb1pihISXoka6oKX1LXEZ0YUdsVRKmyda",
    leaveAndJoinLog: "https://discord.com/api/webhooks/1201610252211204188/U_iOz9yRSbCFoz_0Ych_TpgixHZ-BMkHNgGSq5hMW0GU6Jxu_iYSR733fGWvJa92labV",
    linkLog: "https://discord.com/api/webhooks/1344375156113412158/k1htY8Ocm6euffDySCZDjz_z5og8NRiK4nT6u_DBwI9YZ87d8wfyorx7MbMmTV4WG4YC"
}

// Announcements

const textColor = {
    ERROR: 0xFF0000,
    NORMAL: 0xFFFFFF,
    STATS: 0xD69D29,
    ADMIN: 0x38D6D6,
    SUCCESS: 0x58C78E,
    GAME: 0xEDE06D,
    RED: 0xFF6363,
    BLUE: 0x708DFF,
    HELP: 0xe8a436
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
let VIPList = new Set();

let playersInfo = new Map();

let playerKickBall = [ 
    -1, 
    -1
    ];

let playersAFK = new Set();

let goalList = [];

// GoalKeeper Management

let isGKgot = false; 
let gkRed = -1;
let gkBlue = -1;

// MVP management

let MVPstats = {};

const MVPpoints = {

    goal: 2,
    assist: 1,
    own_goal: -1,
    clean_sheet: 3

}

// Vote management

const VOTE_TIMEOUT = 20;

const ADMIN = 0;
const BAN = 1;

const voteTime = [
    0,
    0
];

const votePlayers = [
    {},
    {}
]

const votes = [
    0,
    0
];

const reason = [
    "",
    ""
];

const voting = [
    false,
    false
];

const minVotes = [
    0,
    0
]

let voteKickID = -1;

// Game management

let isGameStarted = false;
let jerseyNames = ["", ""];
let averageXP = [
        0,
        0
    ]

let winStreak = 0;
let teamVictory = false;

// Teams management

const SPEC = 0;
const RED = 1;
const BLUE = 2;

let ProfitXP = [
    -1,
    -1
];

// Picks management

const MIN_PLAYERS_FOR_PICKS = 12;
const DEFAULT_TIME_PICK = 15;
let picking = false;
let pickingPlayer = null;
let enabledPicks = false;
let timePicking = DEFAULT_TIME_PICK;

// AFK Management

let InGameAFKData = new Map(); // { playerID: { lastX, lastY, lastMoveTick, warned } }
const AFK_TIME_KICK = 15;

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

// Running (Time by 1s)
setInterval(() => {
    
    const time = 1;

    // picker AFK management
    updatePickTimer(time);

    // Command timer
    for(const [id, info] of playersInfo){
        if(info.commandCooldown > 0){
            info.commandCooldown -= time;
        }
    }

    // Vote timers
    for(let i = 0; i<voting.length; i++){
        checkVoteTimer(i, time);
    }

}, 1000);

// Recording management
let RecSistem = {

    getCustomDate: () => {

        let data = new Date().toLocaleDateString().split("/").join("-"),
            relogio = new Date().toLocaleTimeString().split(":");

        return `${data}-${relogio[0]}h${relogio[1]}m`;

    },

    sendDiscordWebhook: (scores) => {

        let form = new FormData();
        let xhr = new XMLHttpRequest();

        if(!teamVictory) {

            form.append(null, new File([room.stopRecording()], `PARTIDO DETENIDO: EFTRec-${RecSistem.getCustomDate()}.hbr2`, {"type": "text/plain"}));
            xhr.open("POST", webhookURLs.adminRecs);
            xhr.send(form);
            return;

        }

        let
            red = room.getPlayerList().filter((player) => player.team == 1).map((player) => player.name),
            blue = room.getPlayerList().filter((player) => player.team == 2).map((player) => player.name);

        form.append(null, new File([room.stopRecording()], `EFTRec-${RecSistem.getCustomDate()}.hbr2`, {"type": "text/plain"}));
        form.append("payload_json", JSON.stringify(RecSistem.getParams(scores, red, blue)));

        xhr.open("POST", webhookURLs.Recs);
        xhr.send(form);
    },

    getParams: (scores, red, blue) => {
        let params = {
            "username": "EFT Recs",
            "avatar_url": "",
            "content": "",
            "embeds": [{
                "title": `${jerseyNames[RED-1]} 🔴 ${scores.red}  Vs.  ${scores.blue} 🔵 ${jerseyNames[BLUE-1]}`,
                "color": 0xBB00BB,
                "description": "",
                "timestamp": null,
                "author": {},
                "image": {},
                "thumbnail": {},
                "footer": {
                    "text": ``,
                    "icon_url": ""
                },
                "fields": [
                    {"name": ``, "value": `${red.join("\n")}`, "inline": true},
                    {"name": ``, "value": ``, "inline": true},
                    {"name": ``, "value": `${blue.join("\n")}`, "inline": true},
                    {"name": `🧮 Cronología`, "value": "```\n" + goalList.join("\n") + "\n```"},
                    {"name": `🌟 MVP: ${room.getPlayer(getMVP()).name}`, "value": ``, "inline": true},
                    {"name": `🏅 Racha: ${winStreak}`, "value": ``, "inline": true},
                ]
            }],
            "components": []
        };

        return params;
    }

};

// EVENTS

room.onRoomLink = async function(){

    room.startGame();
    if (public && !linkAnunciado){

        linkAnunciado = true;
        sendWebhook(
            'linkLog',
            'EFT HOST',
            '### <:_:1199143173759451186> SE ABRIÓ EL HOST DE TOTO <:_:1199143173759451186>: ' + link + "  \n\n## ||@everyone|| :fire:"
        );

    }

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

    // Get roles
    if(await isRole(auth, BANNED)){
        room.kickPlayer(playerID, "[❌] Estás blacklisteado flaquito", true);
    }

    if(await isRole(auth, ADMIN)){
        adminsList.add(playerID);
        room.setPlayerAdmin(playerID, true);
        room.sendAnnouncement("[👮‍♂️] se ha unido el administrador " + playerName, null, textColor.ADMIN, textFont.BOLD, textSound.IMPORTANT);
    }

    // Load cache & info for player
    playersInfo.set(playerID, {
        auth: auth.toString(),
        conn: player.conn.toString(),
        stats: stats,
        rank: (await getRank(stats.xp)).toString(),
        rankMessage: (await getRankMessage(stats)).toString(),
        commandCooldown: 0,
        club: stats.id_club
    });

    InGameAFKData.set(playerID, {
        lastX: null,
        lastY: null,
        lastMoveTick: 0,
        warned: false
    });

    updateTeamsChange(SPEC, playerID);

    updatePickMode();
    if(picking){
        sendPickPrompt();
    }

    if(!enabledPicks && !areEnoughPlayersInGame()){

        fillEmptiestTeam(playerID);
    }

    sendWebhook(
        'leaveAndJoinLog',
        'Log Entrada y Salida',
        '```\n' + 'Ha INGRESADO un Jugador: \nNOMBRE: ' + player.name + '\nIP: ' + player.conn + '\nID: ' + player.id + '\nAUTH: ' + player.auth + '\n```'
    );

};

room.onPlayerLeave = async function(player){
    
    const playerInfo = playersInfo.get(player.id);

    sendWebhook(
    'leaveAndJoinLog',
    'Log Entrada y Salida',
    '```\n' + 'Se ha IDO un Jugador: \nNOMBRE: ' + player.name + '\nIP: ' + playerInfo.conn + '\nID: ' + player.id + '\nAUTH: ' + playerInfo.auth + '\n```'
    );

    await managePlayerLeft(player);
    

};

room.onPlayerKicked = async function (kickedPlayer, reason, ban, byPlayer) {

    if (byPlayer == null) return;

    sendWebhook(
    'banLog',
    'KickLog',
    "se ha " + (ban ? "baneado" : "kickeado") + " a " + kickedPlayer.name + " por " + byPlayer.name + "\nrazón: " + reason
    );

};

room.onPlayerChat = function (player, message, playerName) {

    const permissionMessage = "No tenés los permisos para realizar este comando.";
    const playerID = player.id;
    const words = message.split(" ");
    const cooldown = 5;
    const playerInfo = playersInfo.get(playerID);

    // Commands
    if (message.charAt(0) == '!') {

        if(playerInfo.commandCooldown > 0){
            room.sendAnnouncement("Tenés que esperar " + cooldown + " segundos antes de usar otro comando.", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
            return false;
        }

        if(!adminsList.has(playerID)){
            playerInfo.commandCooldown = cooldown;
        }

        switch (words[0].substring(1)) {

            case "nv":
            case "bb":

                room.kickPlayer(playerID, "Nos vemos!", false);

            break;

            case "stats":
                showStats(playerInfo);
            break;

            case "rank":

                if(words.length === 1){
                    showRank(playerInfo);
                    break;
                }

                let subCommand = words[1];

                switch(subCommand){

                    case "help":
                        room.sendAnnouncement("!rank: para ver tu rango actual\n!rank puntos: para ver cuánta XP te da cada estadística.\n!rank info: para ver cuánta XP necesitas para cada rango.", playerID, textColor.HELP, textFont.BOLD, textSound.NORMAL);
                    break;

                    case "info":
                        for(i = 0; i<RANKS.length; i++){

                            if(RANKS[i].max == Infinity){
                                room.sendAnnouncement(RANKS[i].display + ": " + RANKS[i].min, playerID, textColor.HELP, textFont.BOLD, textSound.NORMAL);
                                continue;
                            }
                            
                            if(RANKS[i].min == -Infinity){
                                room.sendAnnouncement(RANKS[i].display + ": " + RANKS[i].max, playerID, textColor.HELP, textFont.BOLD, textSound.NORMAL);
                                continue;
                            }

                            room.sendAnnouncement(RANKS[i].display + ": " + RANKS[i].min + " A " + (RANKS[i].max - 1), playerID, textColor.HELP, textFont.BOLD, textSound.NORMAL);
                        }
                    break;

                    case "puntos":
                        room.sendAnnouncement("Gol +2\nAsistencia +1\nGol en contra -2\nValla invicta +4\nPartido abandonado -5", playerID, textColor.HELP, textFont.NORMAL, textSound.NORMAL);
                        room.sendAnnouncement("La xp por partidos ganados y perdidos dependerá de la XP del otro equipo.", playerID, textColor.HELP, textFont.BOLD, textSound.NORMAL);
                    break;

                    default:
                        room.sendAnnouncement("comando desconocido, utiliza !rank help para mas información sobre los rangos", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);

                }
                
            break;

            case "discord":
                showDiscordMessage(playerID);
            break;

            case "pagina":
                showPageMessage(playerID);
            break;

            case "gks":

                let announced = playerID;
                if(!adminsList.has(playerID)) announced = null;                

                if(gkRed != -1){
                    room.sendAnnouncement("GK RED: " + getPlayerByID(gkRed).name, announced, textColor.RED, textFont.BOLD, textSound.NORMAL);
                } else{
                    room.sendAnnouncement("EL RED NO TIENE GK", announced, textColor.RED, textFont.BOLD, textSound.NORMAL);
                }

                if(gkBlue != -1){
                    room.sendAnnouncement("GK BLUE: " + getPlayerByID(gkBlue).name, announced, textColor.BLUE, textFont.BOLD, textSound.NORMAL);
                } else{
                    room.sendAnnouncement("EL BLUE NO TIENE GK", announced, textColor.BLUE, textFont.BOLD, textSound.NORMAL);
                }

            break;

            case "llamaradmin":
                
                if(!addVote(ADMIN, playerID, words)) break;
            
                if(votes[ADMIN] >= minVotes[ADMIN] && voting[ADMIN]){

                    room.sendAnnouncement("[📞] SE ACABA DE LLAMAR UN ADMINSTRADOR", null, textColor.SUCCESS, textFont.BOLD, textSound.IMPORTANT)   
                    
                    sendWebhook(
                    'adminCalls',
                    'LLAMADAS ADMINISTRADORES',
                    "Se ha solicitado un <@&1188258083823157309>\nRazón principal: " + reason[ADMIN]
                    );

                    resetVotation(ADMIN);
                }

            break;

            case "top":

                showTopPlayers(words, playerID);

            break;

            case "partido":
                showMatchInfo(playerID);
            break;

            case "help":
                showHelpMessage(playerID);
            break;

            // VIP

            case "afk":

                if(!VIPList.has(playerID) && !adminsList.has(playerID)){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                if(!playersTeam[SPEC].has(playerID)){
                    room.sendAnnouncement("No podes usar este comando mientras jugas.", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                if(playersAFK.has(playerID)){
                    room.sendAnnouncement("Ya no estás afk", playerID, textColor.SUCCESS, textFont.BOLD, textSound.IMPORTANT);
                    playersAFK.delete(playerID);
                    break;
                }

                room.sendAnnouncement("Estás afk", playerID, textColor.SUCCESS, textFont.BOLD, textSound.IMPORTANT);
                playersAFK.add(playerID);

            break;
            
            case "voteban":

                if(!VIPList.has(playerID) && !adminsList.has(playerID) && !voting[BAN]){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                if(words.length < 2){
                    room.sendAnnouncement("Debes especificar el jugador que quieres banear.", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                if(!addVote(BAN, playerID, words)) break;

                if(votes[BAN] >= minVotes[BAN] && voting[BAN]){
                    room.kickPlayer(voteKickID, "[❌] Expulsado por votación", true);
                    resetVotation(BAN);
                }
                
            break;

            // Admins Only

            case "camis":

                if(!adminsList.has(playerID)){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                changeJersey(words, playerID);

            break;

            case "rc":

                if(!adminsList.has(playerID)){
                    room.sendAnnouncement(permissionMessage, playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                    break;
                }

                setRandomJerseys(true);

            break;

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

                kickBanPlayer(words, true, playerID);
                addBlackList(playerID, words);

            break;

            default:
                room.sendAnnouncement("Comando no existente, utiliza !help para ver los comandos", null, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);

        }

        return false; // Avoid sending messages after calling commands

    }

    // Message management

    if(picking && isNumeric(message) && playerID === pickingPlayer){
        pick(message, player);
        return false;
    }

    if (words[0] == "t") {
        sendTeamMessage(message, player);
        return false;
    }

    if(message.charAt(0) == "@" && message.charAt(1) == "@"){
        sendMSG(message, player);
        return false;
    }

    let color = textColor.NORMAL;
    let font = textFont.NORMAL;
    let teamEmoji = getTeamEmoji(player.team);
    let rank = playerInfo.rank;

    if(adminsList.has(playerID)){
        color = textColor.ADMIN;
    }

    room.sendAnnouncement("[" + teamEmoji + "]" + "["+ rank +"] " +  player.name + ": " + message, null, color, font, textSound.NORMAL);

    return false; // Don't send default message

};

room.onTeamGoal = async function(team){

    saveGoalStats(team);
    await manageGoalStatsAndDisplay(team);

};

room.onTeamVictory = async function(scores){
    
    teamVictory = true;
    const result = getTeamResult(scores);
    const winningTeam = result.winner;
    const loosingTeam = result.loser;
    
    await saveGameStats(winningTeam);

    autoStop();

    moveLosersToSpec(loosingTeam);
    if(winningTeam === BLUE){
        movePlayersToStreak(BLUE, RED);
        winStreak = 0;
    }
    winStreak++;

    updatePickMode();

    if(!enabledPicks){
        moveSpecToTeam(BLUE);
    }

    RecSistem.sendDiscordWebhook(scores);

};

room.onPlayerTeamChange = function (changedPlayer, byPlayer){

    updateTeamsChange(changedPlayer.team, changedPlayer.id);

};

room.onPlayerBallKick = function (player) {
    playerKickBall[1] = playerKickBall[0];
    playerKickBall[0] = player;
};

room.onGameStart = async function (byPlayer){

    if (webhookURLs.Recs != "") {
        room.startRecording();
    }

    await setRandomJerseys();
    showMatchInfo();
    await calculateXPGains();
    updatePickMode();

};

room.onGameStop = function () {

    if(teamVictory == false){

        RecSistem.sendDiscordWebhook(null);

    }
    restartGameStats();
    autoFillTeams();

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

    if (room.getPlayerList() === 0) return;

    for(const [id, player] of InGameAFKData){

        let pos = room.getPlayer(id).position;
        if (!pos) return; // Spectator

        // First time: save coords
        if (player.lastX === null) {
            player.lastX = pos.x;
            player.lastY = pos.y;
            player.lastMoveTick = 0;
            return;
        }

        // Check if moved
        const PixelTolerance = 3;
        if (Math.abs(pos.x - player.lastX) > PixelTolerance || Math.abs(pos.y - player.lastY) > PixelTolerance) {

            // Reset AFK info
            player.lastX = pos.x;
            player.lastY = pos.y;
            player.lastMoveTick = 0;
            player.warned = false;
            return;

        }

        // Check Time
        player.lastMoveTick++;
        let secondsAfk = player.lastMoveTick / 60;

        // ADVERTENCIA
        if (!player.warned && secondsAfk >= AFK_TIME_KICK/2) {
            room.sendAnnouncement("[⚠] si estás quieto mucho tiempo vas a ser kickeado, movete si estás jugando.", id, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
            player.warned = true;
        }

        // KICK
        if (secondsAfk >= AFK_TIME_KICK) {
            room.kickPlayer(id, "AFK 😴", false);
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

async function showTopPlayers(words, playerID){
    
    if(words[1] == 'help'){
        room.sendAnnouncement("!top goles\n!top asistencias\n!top gec\n!top mvps\n!top vallas\n!top pj (partidos jugados)\n!top pg (partidos ganados)\n!top pp (partidos perdidos)\n!top pa (partidos arquero)\n!top pab (partidos abandonados)\n!top xp\n!top monedas", playerID, textColor.STATS, textFont.BOLD, textSound.NORMAL);
        return;
    }

    const top = await API.getTopStats(words[1]);

    if(!top){
        room.sendAnnouncement("Esa estadística no existe, usa !top help para conocer los distintos tops.", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        return;
    } 

    room.sendAnnouncement("📊 Top " + words[1], playerID, textColor.STATS, textFont.BOLD, textSound.IMPORTANT);
    for(let i = 0; i<top[0].length; i++){
        room.sendAnnouncement((i+1) + " - " + top[0][i].nombre + ": " + top[0][i].stat + " " + words[1], playerID, textColor.STATS, textFont.NORMAL, textSound.MUTE);
    }

}

async function changeJersey(words, playerID){

    if(words.length < 3 || (words[1] != "blue" && words[1] != "red")){
        room.sendAnnouncement("para usar el comando tenes que hacer: !camis (red / blue) nombreCamiseta", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        room.sendAnnouncement("Ejemplo: !camis red Boca Juniors", playerID, textColor.ERROR, textFont.BOLD, textSound.MUTE);
        room.sendAnnouncement("si en el nombre de la camiseta pones 'random' se cambia por una camiseta aleatoria", playerID, textColor.ERROR, textFont.BOLD, textSound.MUTE);
        return;
    }

    const team = words[1] == "red" ? 1 : 2;
    let jerseyData;

    if(words[2] == "random"){

        const jerseyAmount = await API.getAmountJerseys();
        jerseyData = await API.searchJerseyByID(randomIntFromInterval(1, jerseyAmount));

    } else {

        jerseyData = await API.searchJerseyByName(words.slice(2).join(' '));

        if(!jerseyData){
            room.sendAnnouncement("La remera ingresada no existe.", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
            return;
        }
    }
    
    const jersey = JSON.parse(jerseyData.color);

    room.setTeamColors(
        team,
        jersey[0],
        parseInt(jersey[1], 16),
        jersey.slice(2).map(c => parseInt(c, 16))
    );

    jerseyNames[team-1] = jerseyData.nombre;

    room.sendAnnouncement("Se cambiaron la camiseta del " + words[1] + " a " + jerseyData.nombre, null, textColor.SUCCESS, textFont.NORMAL, textSound.IMPORTANT);

}

async function showMatchInfo(playerID){

    room.sendAnnouncement("[🔰] PARTIDO:", playerID, textColor.GAME, textFont.BOLD, textSound.IMPORTANT);
    room.sendAnnouncement("[🔴] " + jerseyNames[RED-1] + " [" + (await getRank(averageXP[RED-1])).toString() + "]", playerID, textColor.GAME, textFont.BOLD, textSound.IMPORTANT);
    room.sendAnnouncement("[🔵] " + jerseyNames[BLUE-1] + " [" + (await getRank(averageXP[BLUE-1])).toString() + "]", playerID, textColor.GAME, textFont.BOLD, textSound.IMPORTANT);

}

async function setRandomJerseys(enableMessage = false){

    const jerseyAmount = await API.getAmountJerseys();
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

    if(enableMessage){
        room.sendAnnouncement("[🔰] SE CAMBIARON LAS CAMISETAS:", null, textColor.SUCCESS, textFont.BOLD, textSound.NORMAL);
        room.sendAnnouncement("[🔴] " + jerseyNames[0] + " VS " + jerseyNames[1] + " [🔵]", null, textColor.SUCCESS, textFont.BOLD, textSound.MUTE);
    }


}

async function autoStop(){

    const cooldown = 5000;

    room.stopGame();
    room.sendAnnouncement("[🏆] El MVP del partido es " + room.getPlayer(getMVP()).name + "!", null, textColor.STATS, textFont.BOLD, textSound.IMPORTANT);
    room.sendAnnouncement("[🎥] La REC ya fué enviada al discord!", null, textColor.GAME, textFont.NORMAL, textSound.NORMAL);
    room.sendAnnouncement("Empezando partido en " + (cooldown/1000) + " segundos...", null, textColor.GAME, textFont.NORMAL, textSound.NORMAL);
    await delay(cooldown);
    room.startGame();

}

async function calculateXPGains(){

    if(!areEnoughPlayersInGame()){
        return;
    }

    const defaultGains = 8;

    const TEAMS_AMOUNT = 2;
    const PLAYERS_AMOUNT = 4;

    averageXP = [
        0,
        0
    ]

    for(let team = 1; team < TEAMS_AMOUNT + 1; team++){

        for (const playerID of playersTeam[team]) {

            averageXP[team - 1] += (await API.searchPlayer(getAuth(playerID))).xp;

        }

        if(playersTeam[team].size != 0){
            averageXP[team - 1] /= playersTeam[team].size;
        }

    }

    const winRate = [
        getExpectedWinRate(averageXP[0], averageXP[1]),
        getExpectedWinRate(averageXP[1], averageXP[0]),
    ];

    ProfitXP[RED - 1] = Math.ceil(defaultGains * (1 - winRate[RED - 1]));
    ProfitXP[BLUE - 1] = Math.ceil(defaultGains * (1 - winRate[BLUE - 1]));

    for(const playerID of playersTeam[RED]){
        room.sendAnnouncement("[🔴] XP: Si ganas +" + ProfitXP[RED - 1] + ". Si perdes -" + ProfitXP[BLUE - 1], playerID, textColor.STATS, textFont.BOLD, textSound.IMPORTANT);
    }

    for(const playerID of playersTeam[BLUE]){
        room.sendAnnouncement("[🔵] XP: Si ganas +" + ProfitXP[BLUE - 1] + ". Si perdes -" + ProfitXP[RED - 1], playersTeam[BLUE], textColor.STATS, textFont.BOLD, textSound.IMPORTANT);
    }
        

}

function showHelpMessage(playerID){
    room.sendAnnouncement("Comandos disponibles:\n!nv o !bb: para kitear de la sala\n!stats: para ver tus estadísticas\n!rank help: para ver los comandos relacionados al rango\n!discord: para ver el link del discord\n!pagina: para ver el link de la pagina del host\n!gks: para ver los gks del partido\n!llamaradmin: para comenzar una votación para llamar un administrador\n!top o !top help: para ver los distintos rankings de estadísticas\n!partido: para ver información del partido que se esté jugando", playerID, textColor.HELP, textFont.BOLD, textSound.NORMAL);
}

function updatePickTimer(time){

    if(!picking){
        return;
    }

    timePicking -= time;

    if(pickingPlayer == null){
        return;
    }

    if(timePicking == Math.floor(DEFAULT_TIME_PICK/2)){
        room.sendAnnouncement("[⚠] Si no elegís a un jugador vas a ser kickeado por afk", pickingPlayer, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
    }

    if(timePicking <= 0){
        room.kickPlayer(pickingPlayer, "[💤] AFK pickeando", false);
    }

}

function getExpectedWinRate(ratingA, ratingB){
    return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

function showDiscordMessage(playerID){
    room.sendAnnouncement("💬 Discord Link: ➡ https://discord.gg/ ⬅", playerID, 0xF6FF43, textFont.BOLD, textSound.NORMAL);
}

function showPageMessage(playerID){
    room.sendAnnouncement("✨ Página EFT: ➡  ⬅", playerID, 0xF6FF43, textFont.BOLD, textSound.NORMAL);
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

    if(playersAFK.has(playerID)) return;

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

function sendMSG(message, player){

    const words = message.split(" ");
    const playerID = getPlayerIDbyName(words[0].substring(2));
    const playerName = player.name;

    if (playerID != -1) {
        room.sendAnnouncement("[💬] " + playerName + ": " + words.slice(1).join(' ') + " [🔒]", player.id, textColor.GAME, textFont.BOLD, textSound.IMPORTANT);
        room.sendAnnouncement("[💬] " + playerName + ": " + words.slice(1).join(' ') + " [🔒]", playerID, textColor.GAME, textFont.BOLD, textSound.IMPORTANT);
    } else {
        room.sendAnnouncement("Jugador no encontrado. Verifique haberlo escrito de la siguiente forma: @@nombre-del-jugador", player.id, textColor.ERROR, textFont.BOLD);
    }

}

function sendTeamMessage(message, player) {

    const words = message.split(" ");
    const team = player.team

    if(team === 0){
        room.sendAnnouncement("No estás en ningún equipo.", player.id, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        return;
    }

    if (words.length == 1) {
        room.sendAnnouncement("t mensaje", player.id, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);  
        return;
    }
    
    for (const playerID of playersTeam[team]) {

        if (team === RED) {
            room.sendAnnouncement("[🔴] " + player.name + ": " + words.slice(1).join(' '), playerID, textColor.RED, textFont.BOLD);
        } else {
            room.sendAnnouncement("[🔵] " + player.name + ": " + words.slice(1).join(' '), playerID, textColor.BLUE, textFont.BOLD);
        }

    }

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

    sendWebhook(
    'banLog',
    'KickLog',
    "se ha " + (ban ? "baneado" : "kickeado") + " a " + room.getPlayer(kickedID).name + " por " + room.getPlayer(playerID).name + "\nrazón: " + words.slice(2).join(' ')
    );

}

async function addBlackList(playerID, words){

    const kickedID = getPlayerIDbyName(words[1].substring(1));

    if(kickedID === -1){
        room.sendAnnouncement("Jugador no encontrado", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
        return;
    }

    const playerAuth = getAuth(kickedID);
    const BANNED = 5;

    await API.createPlayerRole(playerAuth, BANNED);
    room.sendAnnouncement("[🚧] Jugador blacklisteado correctamente.", playerID, textColor.SUCCESS, textFont.BOLD, textSound.IMPORTANT);

    sendWebhook(
    'banLog',
    'BlackList',
    "se ha blacklisteado a " + room.getPlayer(kickedID).name + " por " + room.getPlayer(playerID).name + "\nrazón: " + words.slice(2).join(' ')
    );

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

    let firstPlayer = getFirstFromTeam(team);
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

    goalList = [];

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

    MVPstats = {};

    isGameStarted = false;
    teamVictory = false;


}

async function saveGameStats(winningTeam){

    if(!areEnoughPlayersInGame()){
        return;
    }
    
    if(winningTeam === -1){
        console.error("No se guardaron estadisticas, equipo mal cargado", winningTeam);
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

function saveGoalStats(team){

    let goalTime = convertSecondsToMinutes(room.getScores().time);
    if (goalTime[1] < 10) {
        goalTime[1] = '0' + goalTime[1].toString();
    }
    const timeString = goalTime[0].toString() + ':' + goalTime[1].toString();
    const goalType = playerKickBall[0].team === team ? '⚽' : '🤡';
    team === 1 ? goalList.push("🟥 " + goalType + " " +  playerKickBall[0].name + " " + timeString) : goalList.push("🟦 "+ goalType + " " +  playerKickBall[0].name + " " + timeString)

}

function isGK(playerID){
    return playerID === gkRed || playerID === gkBlue;
}

async function showStats(playerInfo){

    const stats = playerInfo.stats;

    room.sendAnnouncement("--- Estadísticas de " + stats.nombre + " ---", null, textColor.STATS, textFont.NORMAL, textSound.MUTE);
    room.sendAnnouncement(
    `
    G⚽: ${stats.goles} | A👟:  ${stats.asistencias} | EC🤡: ${stats.goles_en_contra} | MVP🏆: ${stats.mvps}
    PJ: ${stats.partidos_jugados} | PG✅: ${stats.partidos_ganados} | PP❌: ${stats.partidos_perdidos} | DF💩: ${stats.partidos_abandonados}
    PA🧤: ${stats.partidos_arquero} | VI🥅: ${stats.vallas_invictas}

    💲 ${stats.monedas}
    XP🔰: ${stats.xp}
    `, null, textColor.STATS, textFont.SMALL, textSound.NORMAL
    );

}

async function showRank(playerInfo){

    const rankMessage = playerInfo.rankMessage;
    const nombre = playerInfo.stats.nombre;

    room.sendAnnouncement("--- Rango de " + nombre + " ---", null, textColor.STATS, textFont.NORMAL, textSound.MUTE);
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

    const currentRank = (await getRank(XP)).toString();

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
        xpLine = ` ${info.currentXP} / ${info.nextXP}`;
    }

    return (
        `${info.currentRank} ` +
        `[ ${bar} ] ` +
        `${info.nextRank}\n` +
        `Progreso XP: ${xpLine}`
    );
}

async function getRank(XP){

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

function areEnoughPlayersInGame(){

    const PLAYER_AMOUNT = 4;

    if(playersTeam[RED].size != PLAYER_AMOUNT || playersTeam[BLUE].size != PLAYER_AMOUNT){
        return false;
    }

    return true;

}

function checkVoteTimer(value, time){
    if(!voting[value]) {
        return;
    }

    voteTime[value] -= time;

    if(voteTime[value] <= 0){
        voteTime[value] = 0;
        voting[value] = false;
        room.sendAnnouncement("[❌] VOTACIÓN: no se llegaron a los votos necesarios", pickingPlayer, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
    }
    
}

function addVote(value, playerID, words){

    if (votePlayers[value][playerID]){
        room.sendAnnouncement("[❗] Ya estás dentro de la votación!", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);   
        return false;
    }

    voteTime[value] = VOTE_TIMEOUT; // Reiniciar contador
    votePlayers[value][playerID] = true;
    votes[value]++;

    let players = room.getPlayerList();
    
    if(!voting[value]){ // init votation

        let reasonSlice = 2;
        if(value === ADMIN){
            reasonSlice = 1;
        } else {

            voteKickID = getPlayerIDbyName(words[1].substring(1));
            if(voteKickID === -1){
                room.sendAnnouncement("[❌] El jugador mencionado no existe.", playerID, textColor.ERROR, textFont.BOLD, textSound.IMPORTANT);
                return false;
            }

        }

        reason[value] = words.slice(reasonSlice).join(' ');
        minVotes[value] = Math.ceil(players.length / 2);
        voting[value] = true;

        

        room.sendAnnouncement("[📝] Se inició una votación para " + getVoteMessage(value) + " ( 1 / " + minVotes[value] + " )\nRazón: " + reason[value], null, textColor.HELP, textFont.BOLD, textSound.IMPORTANT);

    } else {

        if(voteKickID != getPlayerIDbyName(words[1].substring(1)) && value !== ADMIN){
            room.sendAnnouncement("[❌] Ese no es el jugador de la votación.", null, textColor.HELP, textFont.BOLD, textSound.IMPORTANT);
            return false;
        }

        room.sendAnnouncement("[📝] " + getPlayerByID(playerID).name + " votó para " + getVoteMessage(value) + " ( " + votes[value] + " / " + minVotes[value] + " )", null, textColor.HELP, textFont.BOLD, textSound.IMPORTANT);
    }

    return true;
}

function resetVotation(value){

    voting[value] = false;
    votes[value] = 0;
    votePlayers[value] = {};
    reason[value] = '';
    
}

function getVoteMessage(value){
    switch(value){
        case ADMIN:
        return "llamar un administrador";

        case BAN:
        return "banear a " + getPlayerByID(voteKickID)?.name;

        default:
            return "ERROR";
    }
}

function autoFillTeams(){
    
    while(!areEnoughPlayersInGame() && thereAreSpecs()){
        fillEmptiestTeam(getFirstFromSpec());
    }
    
}

function updatePickMode(){

    const totalPlayers = room.getPlayerList().length;

    if(totalPlayers < MIN_PLAYERS_FOR_PICKS){

        if(enabledPicks || picking){

            if(picking){
                room.sendAnnouncement("[⚠️] No hay suficientes jugadores, se desactivó el modo picks.", null, textColor.ERROR, textFont.BOLD, textSound.NORMAL);
                room.pauseGame(false);
            }

            enabledPicks = false;
            picking = false;
            pickingPlayer = null;

            autoFillTeams();

        }

        return;
    }

    enabledPicks = true;

    if(!picking){
        startPickMode();
    }

}

async function managePlayerLeft(player){
    
    const ID = player.id;
    const team = player.team;
    const auth = getAuth(ID);

    if(team !== SPEC && isGameStarted && areEnoughPlayersInGame()){
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

    playersInfo.delete(ID);
    InGameAFKData.delete(ID);
    if(playersAFK.has(ID)){
        playersAFK.delete(ID);
    }

    const wasPicker = picking && ID === pickingPlayer;
    const wasSpecWaiting = picking && team === SPEC;

    updatePickMode();

    if(picking && wasPicker){

        startPickMode();

    } else if(picking && wasSpecWaiting){

        sendPickPrompt();

    } else if(!enabledPicks && !areEnoughPlayersInGame() && thereAreSpecs()){

        fillEmptiestTeam(getFirstFromSpec());

    }

    const players = room.getPlayerList();

    if(players.length < 1){
        enabledPicks = false;
        picking = false;
        pickingPlayer = null;
    }

}

function startPickMode(){

    if(areEnoughPlayersInGame() || !thereAreSpecs()){

        if(picking){
            room.pauseGame(false);
        }
        picking = false;
        pickingPlayer = null;
        return;

    }

    const pickingTeam = playersTeam[RED].size <= playersTeam[BLUE].size ? RED : BLUE;
    const nextPicker = getFirstFromTeam(pickingTeam);

    if(nextPicker == null){
        if(picking){
            room.pauseGame(false);
        }
        picking = false;
        pickingPlayer = null;
        return;
    }

    const wasAlreadyPicking = picking;

    picking = true;
    pickingPlayer = nextPicker;
    timePicking = DEFAULT_TIME_PICK;

    if(!wasAlreadyPicking){
        room.pauseGame(true);
    }

    sendPickPrompt();

}

function sendPickPrompt(){

    const pickerObj = getPlayerByID(pickingPlayer);
    const pickingTeam = pickerObj ? pickerObj.team : null;
    const teamEmoji = getTeamEmoji(pickingTeam);

    room.sendAnnouncement(`[${teamEmoji}] Elegí un jugador según el número:`, pickingPlayer, textColor.ERROR, textFont.SMALL_BOLD, textSound.IMPORTANT);

    let i = 0;
    for(const playerID of playersTeam[SPEC]){

        const playerObj = getPlayerByID(playerID);
        const displayName = playerObj ? playerObj.name : ("ID " + playerID);
        room.sendAnnouncement((i + 1) + " - " + displayName, pickingPlayer, textColor.ERROR, textFont.SMALL_BOLD, textSound.MUTE);
        i++;
        
    }

}

function pick(message, player) {

    if (!picking || player.id !== pickingPlayer) return;

    const index = parseInt(message, 10) - 1;
    const specArray = [...playersTeam[SPEC]];
    const pickedPlayer = specArray[index];

    if(pickedPlayer == null){
        room.sendAnnouncement("El número ingresado no corresponde a ningún jugador!", pickingPlayer, textColor.ERROR, textFont.SMALL_BOLD, textSound.MUTE);
        return;
    }

    const teamThatPicks = player.team;

    room.setPlayerTeam(pickedPlayer, teamThatPicks);
    updateTeamsChange(teamThatPicks, pickedPlayer);

    if(areEnoughPlayersInGame()){
        room.sendAnnouncement("[🚨] Los equipos ya están completos, el partido puede comenzar.", null, textColor.SUCCESS, textFont.BOLD, textSound.IMPORTANT);
    }

    startPickMode();

}

function getPlayerByID(id){
    let players = room.getPlayerList(); // Obtener lista de jugadores
    return players.find(player => player.id === id) || null; // Buscar jugador por auth
}

function getFirstFromTeam(team){
    return playersTeam[team].values().next().value;
}

function getFirstFromSpec(){

    for(const playerID of playersTeam[SPEC]){
        if(!playersAFK.has(playerID)) return playerID;
    }

}

function thereAreSpecs(){
    return playersTeam[SPEC].size - playersAFK.size > 0
}

function isNumeric(value){
    return /^-?\d+$/.test(value);
}

function convertSecondsToMinutes(seconds) {

    if (seconds < 0) {
        return -1;
    }

    let time = [0, 0];
    time[0] = Math.floor(seconds / 60);
    time[1] = Math.floor(seconds - time[0] * 60);

    return time;
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

function getPlayerInfoByAuth(auth) {
    for (const [playerID, info] of playersInfo) {
        if (info.auth === auth.toString()) {
            return info;
        }
    }
    return null;
}

function sendWebhook(type, username, content, avatarUrl = '') {
    const url = webhookURLs[type];
    if (!url) {
        console.error("URL del webhook no encontrada para el tipo: ", type);
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');

    request.onerror = function() {
        console.error("Error de red al enviar mensaje.");
    };

    const payload = {
        avatar_url: avatarUrl,
        username: username,
        content: content
    };

    request.send(JSON.stringify(payload));
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
            `http://localhost:${APIPort}/remera/buscarID/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )

        return await response.json();

    },

    async searchJerseyByName(name){
        
        const response = await fetch(
            `http://localhost:${APIPort}/remera/buscarNombre/${name}`,
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

        if(!areEnoughPlayersInGame()){
            return;
        }

        const scores = room.getScores();
        const extra = scores.time >= scores.timeLimit;

        const player = getPlayerInfoByAuth(auth);
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
        player.stats = await API.searchPlayer(auth);
        player.rank = (await getRank(player.stats.xp)).toString(),
        player.rankMessage = (await getRankMessage(player.stats)).toString();

    },

    async updateXP(auth, xp){

        if(!areEnoughPlayersInGame()){
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

    },

    async getTopStats(estadistica){

        const response = await fetch(
            `http://localhost:${APIPort}/estadisticas/obtenerTop/${estadistica}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )
        
        return await response.json();

    }

};
