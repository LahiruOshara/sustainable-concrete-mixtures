export const inlandSelection = [
    { key: 'COLOMBO', value: 'Colombo Area' },
    { key: 'KURUNEGALA', value: 'Kurunegala Area' },
];

export const marineSelection = [
    { key: 'COLOMBO', value: 'Colombo Area' },
];

export const structureTypes = [
    { key: 'INLAND', value: 'Inland Structure' },
    { key: 'MARINE', value: 'Marine Structure' },
];

export const KURUNEGALA = "KURUNEGALA";
export const COLOMBO = "COLOMBO";
export const INLAND = "INLAND";
export const MARINE = "MARINE";

export const carbonationClassList = [
    { key: 'XC2', value: 'XC2', disabled: true },
];

export const corrosionMarineList = [
    { key: 'XS1', value: 'XS1', disabled: true },
    { key: 'XS2', value: 'XS2', disabled: false },
    { key: 'XS3', value: 'XS3', disabled: true }
];

export const chemicalAttackInlandList = [
    { key: 'XA1', value: 'XA1', disabled: false },
    { key: 'XA2', value: 'XA2', disabled: true },
    { key: 'XA3', value: 'XA3', disabled: true },
]

export const designLifeList = [
    { key: '25', value: '25', disabled: true },
    { key: '50', value: '50', disabled: false },
    { key: '100', value: '100', disabled: true }
]

export const strengthGradeListKurunegala = [
    { key: 'C25/30', value: 'C25/30' },
    { key: 'C35/45', value: 'C35/45' },
    { key: 'C45/55', value: 'C45/55' }
];
export const strengthGradeListColombo = [
    { key: 'C35/45', value: 'C35/45' },
    { key: 'C45/55', value: 'C45/55' }
];

export const surfaceResistivityList = [
    { key: 'Poor', value: 'Poor' },
    { key: 'Normal', value: 'Normal' },
];

export const waterPermeabilityList = [
    { key: '< 50mm', value: '< 50mm' },
    { key: '> 50mm', value: '> 50mm' },
];

export const sustainabilityWeightList = [
    { key: 'W1', value: 'W1' },
    { key: 'W2', value: 'W2' },
    { key: 'W3', value: 'W3' },
    { key: 'W4', value: 'W4' },
    { key: 'W5', value: 'W5' },
];

export const mixBatchSelectionList = [
    { key: 'M1, B1', value: 'M1, B1' },
    { key: 'M1, B2', value: 'M1, B2' },
    { key: 'M1, B3', value: 'M1, B3' },
    { key: 'M2, B1', value: 'M2, B1' },
    { key: 'M2, B2', value: 'M2, B2' },
    { key: 'M2, B3', value: 'M2, B3' },
    { key: 'M3, B1', value: 'M3, B1' },
    { key: 'M3, B2', value: 'M3, B2' },
    { key: 'M3, B3', value: 'M3, B3' },
    { key: 'M4, B1', value: 'M4, B1' },
    { key: 'M4, B2', value: 'M4, B2' },
    { key: 'M4, B3', value: 'M4, B3' },
    { key: 'M5, B1', value: 'M5, B1' },
    { key: 'M5, B2', value: 'M5, B2' },
    { key: 'M5, B3', value: 'M5, B3' },
    { key: 'M6, B1', value: 'M6, B1' },
    { key: 'M6, B2', value: 'M6, B2' },
    { key: 'M6, B3', value: 'M6, B3' },
    { key: 'M7, B1', value: 'M7, B1' },
    { key: 'M7, B2', value: 'M7, B2' },
    { key: 'M7, B3', value: 'M7, B3' },
    { key: 'M8, B1', value: 'M8, B1' },
    { key: 'M8, B2', value: 'M8, B2' },
    { key: 'M8, B3', value: 'M8, B3' },
    { key: 'M9, B1', value: 'M9, B1' },
    { key: 'M9, B2', value: 'M9, B2' },
    { key: 'M9, B3', value: 'M9, B3' },
    { key: 'M10, B1', value: 'M10, B1' },
    { key: 'M10, B2', value: 'M10, B2' },
    { key: 'M10, B3', value: 'M10, B3' },
    { key: 'M11, B1', value: 'M11, B1' },
    { key: 'M11, B2', value: 'M11, B2' },
    { key: 'M11, B3', value: 'M11, B3' },
  ];
  

export const mixtureMap = new Map([
    ['C25/30', [0, 4]],
    ['C35/45', [4, 8]],
    ['C45/55', [8, 11]]
]);

export const sustainabilityScoreListForC1W1 = [

    ["M1", 0.836, 0.825, 0.897],
    ["M2", 0.87, 0.858, 0.939],
    ["M3", 0.828, 0.817, 0.896],
    ["M4", 0.794, 0.782, 0.857],
    ["M5", 0.926, 0.914, 0.987],
    ["M6", 0.783, 0.772, 0.842],
    ["M7", 0.857, 0.845, 0.916],
    ["M8", 0.568, 0.561, 0.634],
    ["M9", 0.643, 0.638, 0.641],
    ["M10", 0.707, 0.692, 0.966],
    ["M11", 0.547, 0.625, 0.818],
];

export const sustainabilityScoreListForC1W2 = [

    ["M1", 0.869, 0.856, 0.905],
    ["M2", 0.881, 0.867, 0.923],
    ["M3", 0.805, 0.793, 0.849],
    ["M4", 0.845, 0.832, 0.883],
    ["M5", 0.944, 0.93, 0.98],
    ["M6", 0.822, 0.809, 0.857],
    ["M7", 0.883, 0.87, 0.919],
    ["M8", 0.495, 0.489, 0.542],
    ["M9", 0.716, 0.708, 0.705],
    ["M10", 0.78, 0.764, 0.964],
    ["M11", 0.612, 0.667, 0.808],
];

export const sustainabilityScoreListForC1W3 = [

    ["M1", 0.808, 0.795, 0.908],
    ["M2", 0.842, 0.828, 0.954],
    ["M3", 0.807, 0.795, 0.918],
    ["M4", 0.778, 0.765, 0.881],
    ["M5", 0.889, 0.875, 0.99],
    ["M6", 0.777, 0.765, 0.874],
    ["M7", 0.834, 0.821, 0.933],
    ["M8", 0.614, 0.605, 0.715],
    ["M9", 0.525, 0.522, 0.531],
    ["M10", 0.575, 0.559, 0.974],
    ["M11", 0.451, 0.571, 0.863],
];

export const sustainabilityScoreListForC1W4 = [

    ["M1", 0.832, 0.823, 0.877],
    ["M2", 0.888, 0.879, 0.939],
    ["M3", 0.871, 0.863, 0.922],
    ["M4", 0.758, 0.749, 0.805],
    ["M5", 0.944, 0.935, 0.99],
    ["M6", 0.75, 0.741, 0.794],
    ["M7", 0.853, 0.844, 0.898],
    ["M8", 0.595, 0.59, 0.644],
    ["M9", 0.687, 0.683, 0.685],
    ["M10", 0.765, 0.754, 0.959],
    ["M11", 0.579, 0.638, 0.782],
];

export const sustainabilityScoreListForC1W5 = [

    ["M1", 0.84, 0.826, 0.912],
    ["M2", 0.856, 0.841, 0.938],
    ["M3", 0.793, 0.78, 0.876],
    ["M4", 0.823, 0.809, 0.898],
    ["M5", 0.911, 0.896, 0.984],
    ["M6", 0.809, 0.796, 0.88],
    ["M7", 0.86, 0.846, 0.932],
    ["M8", 0.547, 0.538, 0.626],
    ["M9", 0.608, 0.602, 0.605],
    ["M10", 0.66, 0.643, 0.971],
    ["M11", 0.522, 0.615, 0.846],
];

export const sustainabilityScoreList = [
    {
        "W1": sustainabilityScoreListForC1W1,
        "W2": sustainabilityScoreListForC1W2,
        "W3": sustainabilityScoreListForC1W3,
        "W4": sustainabilityScoreListForC1W4,
        "W5": sustainabilityScoreListForC1W5
    },

    [],

    [],
];

export const mixToTypeMap = new Map([
    ["M1", "CEM II/A-V"],
    ["M2", "CEM IV/A"],
    ["M3", "CEM II/B-M"],
    ["M4", "CEM II/A-LL"],
    ["M5", "CEM II/B-M"],
    ["M6", "CEM II/A-LL"],
    ["M7", "CEM II/A-S"],
    ["M8", "CEM I"],
    ["M9", "CEM II/A-V"],
    ["M10", "CEM IV/A"],
    ["M11", "CEM I"],
  ]);

  export const mixToMixTypeMap = new Map([
    ["M1", "Mix 2"],
    ["M2", "Mix 2"],
    ["M3", "Mix 2"],
    ["M4", "Mix 2"],
    ["M5", "Mix 1"],
    ["M6", "Mix 1"],
    ["M7", "Mix 1"],
    ["M8", "Mix 2"],
    ["M9", "Mix 1"],
    ["M10", "Mix 1"],
    ["M11", "Mix 1"],
  ]);
  
  