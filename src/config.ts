export const year: number = 2023;
export const locale: string[] = ["DE", "SN"];

interface Page {
  file: string,
  caption?: string
}

export const pages: Page[] = [
  {
    file: "demo/demo.jpg",
    caption: "Demo Calendar"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
  {
    file: "demo/demo.jpg",
    caption: "Something"
  },
];

interface SpecialDay {
  month?: number;
  caption: string;
  day: number
};
export const specialDays: SpecialDay[] = [
  {
    month: 3,
    day: 14,
    caption: 'Pi Day'
  }
];

export const dimensions = {
  DinA2Landscape: {
    width: '600mm',
    height: '426mm'
  },
  DinA3Portrait: {
    width: '303mm',
    height: '426mm'
  },
  DinA4Portrait: {
    width: '216mm',
    height: '303mm'
  },
}.DinA4Portrait;
export const filenamePrefix: string = "demo";
