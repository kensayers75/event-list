//split venue to get location (city)
export const getLocationFromVenue = (val) => {
  let split = val.split(',');
  return split[split.length-1].trim().toUpperCase();
};

// Simplifying Event type to make filtering more efficient
export const cleanEventType = (val) => {
  let x = val.replace(/[^a-zA-Z ]/g, ' ');
  return x.toUpperCase().trim();
};

const getMonthNumber = (monthString) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months.indexOf(monthString);
};

// Date is a string without the year so to order we need to compare with today's date. i.e. yesterday will be last adn today first.
// More time I would check the format more incase input changes.
const createDate = (givenDate,today) => {

  let splitDate = givenDate.split(' ');
  let monthName = splitDate[2].trim();
  let date = Number(splitDate[1].replace(/[^0-9.]/g, ''));
  let month = getMonthNumber(monthName);
  let year;

  if(month > today.month){
    year = Number(today.year);
  }

  //add next year if before today
  if((month == today.month && date < today.date) || month < today.month){
    year = Number(today.year)+1;
  }

  //create date to help comparison later
  return new Date(year, month, date);
};

// I found when I was filtering the type, location and date order I was repeating functions. I felt it was more efficient to do it up front.
// This function formats the data ready for the reducer
export const applyEventData = (events) => {

  const uglyDate = new Date();

  const today = {
    date: uglyDate.getDate(),
    month: uglyDate.getMonth(),
    year: uglyDate.getFullYear()
  };

  return events.map((ev) => {
    return {
      ...ev,
      myDate: createDate(ev.date, today),
      myCity: getLocationFromVenue(ev.venue),
      myType: cleanEventType(ev.type)
    };
  });
};


export const findUnique = (arr, key) => {
  let result = [];
  arr.forEach((v) => {
    let val = v[key];
    if(key==='venue'){
      val = getLocationFromVenue(val);
    }
    val = cleanEventType(val);
    if(val && (result.indexOf(val)===-1)){
      result.push(val);
    }
  });
  return result.sort();
};