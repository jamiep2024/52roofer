export const formatTownName = (name: string) => {
  // Remove any trailing location qualifiers in parentheses or after comma
  const cleanedName = name.replace(/\s*\(.*?\)|\s*,\s*.*/g, '');
  // Capitalize first letter of each word
  return cleanedName.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
