import YAML from 'https://cdn.jsdelivr.net/npm/js-yaml@4/dist/jsyaml.min.js';
export async function loadGameSettings(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Could not find YAML file! status: ${response.status}`);
  }
  const yamlText = await response.text(); // Get the response text
  return YAML.load(yamlText); // Parse the YAML content
}
