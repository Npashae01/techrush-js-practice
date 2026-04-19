// Q7: String methods

function formatName(firstName, lastName) {
  const first = firstName.trim();
  const last = lastName.trim().toUpperCase();

  // Capitalize first letter of first name
  const formattedFirst = first.charAt(0).toUpperCase() + first.slice(1);

  return `${last}, ${formattedFirst}`;
}

// Test
console.log(formatName('  esther  ', '  ogbu  '));
