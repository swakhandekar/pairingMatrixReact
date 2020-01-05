export class ColourBuilder {
  constructor(minCount, maxCount) {
    this.minCount = minCount;
    this.maxCount = maxCount;
  }

  updateMinMax(updatedCount) {
    if (updatedCount > this.maxCount) {
      return new ColourBuilder(this.minCount, updatedCount);
    } else if(updatedCount)return this;
  }

  getColour(count) {
    const intensity = count / (this.maxCount - this.minCount);
    return intensity > 0.5 ? this.rangeGreenToRed(intensity * 2 - 1) : this.rangeBlueToGreen(intensity * 2);
  }

  rangeGreenToRed(intensity) {
    const r = Math.ceil(115 + (140 * (intensity)));
    const g = Math.ceil(209 - (132 * (intensity)));
    const b = Math.ceil(61 + (18 * (intensity)));
    return {r, g, b};
  };

  rangeBlueToGreen(intensity) {
    const r = Math.ceil(64 + (51 * (intensity)));
    const g = Math.ceil(169 + (40 * (intensity)));
    const b = Math.ceil(255 - (194 * (intensity)));
    return {r, g, b};
  };
}

