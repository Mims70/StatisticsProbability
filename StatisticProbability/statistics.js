class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Method to calculate the mean
    mean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    // Method to calculate the median
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    // Method to calculate the mode
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
  
    // Method to calculate the variance
    variance() {
      const meanValue = this.mean();
      const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
      return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
    }
  
    // Method to calculate the standard deviation
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  }
  
  // Example usage
  const data = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.mean());
  console.log('Median:', stats.median());
  console.log('Mode:', stats.mode());
  console.log('Variance:', stats.variance());
  console.log('Standard Deviation:', stats.standardDeviation());
  