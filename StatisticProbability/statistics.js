class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency

  mean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  median() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  mode() {
    const frequencyMap = new Map();

    for (const value of this.data) {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    }

    let maxFrequency = 0;
    let modes = [];

    frequencyMap.forEach((frequency, value) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        modes = [value];
      } else if (frequency === maxFrequency) {
        modes.push(value);
      }
    });

    return modes;
  }

  // Measures of Dispersion

  range() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  variance() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
    return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
  }

  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  skewness() {
    const meanValue = this.mean();
    const varianceValue = this.variance();
    const cubedDifferences = this.data.map(value => Math.pow(value - meanValue, 3));
    const sumCubedDiff = cubedDifferences.reduce((acc, value) => acc + value, 0);

    return sumCubedDiff / (this.data.length * Math.pow(varianceValue, 1.5));
  }

  kurtosis() {
    const meanValue = this.mean();
    const varianceValue = this.variance();
    const fourthPowerDifferences = this.data.map(value => Math.pow(value - meanValue, 4));
    const sumFourthPowerDiff = fourthPowerDifferences.reduce((acc, value) => acc + value, 0);

    return sumFourthPowerDiff / (this.data.length * Math.pow(varianceValue, 2)) - 3;
  }
}

// Example usage
const data = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8];
const stats = new DescriptiveStatistics(data);

console.log('Mean:', stats.mean());
console.log('Median:', stats.median());
console.log('Mode:', stats.mode());
console.log('Range:', stats.range());
console.log('Variance:', stats.variance());
console.log('Standard Deviation:', stats.standardDeviation());
console.log('Skewness:', stats.skewness());
console.log('Kurtosis:', stats.kurtosis());
