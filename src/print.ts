import * as puppeteer from "puppeteer";
import { dimensions, filenamePrefix, pages } from './config';

(async () => {
  const browser = await puppeteer.launch();
  for (let index = 0; index < pages.length; index++) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:4200/page/${index}`, { waitUntil: 'networkidle2' });

    await page.pdf({
      path: `prints/${filenamePrefix}-${index}.pdf`,
      width: dimensions.width,
      height: dimensions.height
    });

    // const scalingFactor = 3.7795275591;
    // await page.setViewport({
    //   width: Math.round(303*scalingFactor),
    //   height: Math.round(426*scalingFactor),
    //   deviceScaleFactor: 4,
    //   });
    // await page.screenshot({
    //   path: `prints/${filenamePrefix}-${index}.png`,
    // });

    console.log(index, pages[index].caption);
  }


  await browser.close();
})();
