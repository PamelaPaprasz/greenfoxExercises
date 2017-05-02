'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var dailyWorkingHours = 6;
var daysInWeek = 5;
var allWeeks = 17;
var avarageWorkHoursWeekly = 52;
var allWorkDays = daysInWeek * allWeeks;

console.log(allWorkDays * dailyWorkingHours);

var allHoursCoding = (dailyWorkingHours * daysInWeek / avarageWorkHoursWeekly) * 100;

console.log( allHoursCoding + '%');
