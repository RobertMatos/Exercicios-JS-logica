const maskify = (string) => {
  if (string.length <= 4) {
    return string;
  }

  const numHashes = string.length - 4;
  const hashes = "#".repeat(numHashes);
  const lastFour = string.slice(-4);

  return hashes + lastFour;
};

module.exports = maskify;
