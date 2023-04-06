const transformer = (baseOption: any, color: string) => ({
  ...baseOption,
  series: [{ ...baseOption.series[0], lineStyle: { color: color } }],
});

const baseOption = {
  title: {
    show: false,
  },
  grid: {
    show: false,
    width: '96px',
    height: '40px',
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    left: { drawGridLines: false },
    right: { drawGridLines: false },
    type: 'value',
    show: false,
  },
  series: [
    {
      data: [20, 932, 901, 934, 1290, 1330, 13, 20, 1235, 0],
      type: 'line',
      smooth: false,
      symbol: 'none',
    },
  ],
};

export const linkedinData = (color: string) => transformer(baseOption, color);
export const USIMData = (color: string) => transformer(baseOption, color);
export const mobilDeData = (color: string) => transformer(baseOption, color);
export const bankingData = (color: string) => transformer(baseOption, color);
