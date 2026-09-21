// The source GLB (Microsoft GLTF Exporter) uses the deprecated
// KHR_materials_pbrSpecularGlossiness extension, which three.js's
// GLTFLoader no longer parses. Without it every material falls back to
// pbrMetallicRoughness defaults (white, fully metallic, fully rough),
// which renders almost black under a plain env light. These are the
// diffuseFactor/glossinessFactor values read straight from the glTF
// materials array (in primitive order) so they can be reapplied after load.
export const ESP32_MATERIAL_FIX = [
  { diffuse: [0.0029, 0.0029, 0.0029], glossiness: 0.76 },
  { diffuse: [1, 1, 1], glossiness: 0.76 },
  { diffuse: [0.0265, 0.0265, 0.0265], glossiness: 0.76 },
  { diffuse: [1, 1, 1], glossiness: 0.75 },
  { diffuse: [0.2271, 0.1768, 0.1193], glossiness: 0.76 },
  { diffuse: [0.0060, 0.0060, 0.0060], glossiness: 0.76 },
  { diffuse: [0.9658, 0.9574, 0.9158], glossiness: 0.75 },
  { diffuse: [0.5605, 0.5605, 0.5605], glossiness: 0.79 },
  { diffuse: [0.0066, 0.0066, 0.0066], glossiness: 0.76 },
  { diffuse: [0.0046, 0.0046, 0.0046], glossiness: 0.75 },
  { diffuse: [0, 0, 0], glossiness: 0.76 },
  { diffuse: [0.6121, 0.6121, 0.6121], glossiness: 0.76 },
  { diffuse: [1, 0.6187, 0.1801], glossiness: 0.76 },
  { diffuse: [0.5989, 0.6456, 0.8592], glossiness: 0.75 },
  { diffuse: [0.3838, 0.3489, 0.3112], glossiness: 0.76 },
  { diffuse: [0.0478, 0.0478, 0.0478], glossiness: 0.75 },
  { diffuse: [1, 1, 1], glossiness: 0.76 },
  { diffuse: [0, 0, 0], glossiness: 0.75 },
  { diffuse: [0.0037, 0.0037, 0.0037], glossiness: 0.76 },
  { diffuse: [0.6121, 0.6121, 0.6121], glossiness: 0.76 },
  { diffuse: [0.4535, 0, 0], glossiness: 0.76 },
  { diffuse: [0.3787, 0.3787, 0.3787], glossiness: 0.76 },
  { diffuse: [0.3066, 0.3066, 0.3066], glossiness: 0.76 },
  { diffuse: [0.5795, 0.5480, 0.5174], glossiness: 0.76 },
  { diffuse: [0, 0, 1], glossiness: 0.75 },
  { diffuse: [0.9658, 0.9574, 0.9158], glossiness: 0.76 },
  { diffuse: [1, 0.8200, 0.1604], glossiness: 0.75 },
  { diffuse: [0.8122, 0.1669, 0.0005], glossiness: 0.75 },
]
