export const year: number = 2023;
export const locale: string[] = ["DE", "SN"];

interface Page {
  file: string,
  caption: string
}

export const pages: Page[] = [
  {
    file: "eoe/0.jpg",
    caption: "An den Rändern Europas"
  },
  {
    file: "eoe/1.jpg",
    caption: "Jökulsárlón, Island"
  },
  {
    file: "eoe/2.jpg",
    caption: "Ståvatn, Norwegen"
  },
  {
    file: "eoe/3.jpg",
    caption: "São Cristovão, Madeira"
  },
  {
    file: "eoe/4.jpg",
    caption: "Kálfafell, Island"
  },
  {
    file: "eoe/5.jpg",
    caption: "Capo d'Orso, Sardinien"
  },
  {
    file: "eoe/6.jpg",
    caption: "Senja, Norwegen"
  },
  {
    file: "eoe/7.jpg",
    caption: "Seljalandsfoss, Island"
  },
  {
    file: "eoe/8.jpg",
    caption: "Punta Goloritzè, Sardinien"
  },
  {
    file: "eoe/9.jpg",
    caption: "Fjaðrárgljúfur, Island"
  },
  {
    file: "eoe/10.jpg",
    caption: "Møysalen, Norwegen"
  },
  {
    file: "eoe/11.jpg",
    caption: "Fanal, Madeira"
  },
  {
    file: "eoe/12.jpg",
    caption: "Fagradalsfjall, Island"
  },
];

interface SpecialDay {
  month?: number;
  caption: string;
  day: number
};
export const specialDays: SpecialDay[] = [];

export const dimensions = {
  DinA2Landscape: {
    width: '600mm',
    height: '426mm'
  },
  DinA3Portrait: {
    width: '303mm',
    height: '426mm'
  },
}.DinA2Landscape;
export const filenamePrefix: string = "seite";
