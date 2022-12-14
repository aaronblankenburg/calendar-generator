import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";
import {pages, locale, year, specialDays} from '../../config';
import {Moment} from "moment";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  month: number;
  days = [];
  captions = pages.map((x) => x.caption);
  holidays = createMomentHolidayConfiguration("DE", "SN");

  constructor(private route: ActivatedRoute) {
    this.month = Number(this.route.snapshot.paramMap.get('id')) - 1;
    moment.locale(locale);
    for (let i = 1; i <= 31; i++) {
      const day = moment(new Date(year, this.month, i));
      if (day.month() === this.month) this.days.push(day);
    }
  }

  public isTitlepage() {
    return this.month === -1;
  }

  public getYear() {
    return year;
  }

  public isHoliday(day) {
    return day.isHoliday(this.holidays);
  }

  public isSunday(day) {
    return day.day() === 0;
  }

  public getImage() {
    return `assets/wallpapers/${pages[this.month + 1].file}`;
  }

  public getCaption() {
    return pages[this.month + 1].caption || "";
  }

  isSpecialDay(day: Moment) {
    return specialDays.some((special) => special.month
      ? special.day === day.date() && special.month === this.month + 1
      : special.day === day.date());
  }

  getSpecialDay(day: Moment) {
    return specialDays.find((special) => special.month
      ? special.day === day.date() && special.month === this.month + 1
      : special.day === day.date());
  }
}
