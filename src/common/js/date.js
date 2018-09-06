
export function goodTime(str){
	var str = str*1000,
		now = new Date().getTime(),
		oldTime = new Date(str).getTime(),
		difference = now - oldTime,

		minute = 1000 * 60,
		hour = minute * 60,
		day = hour * 24,
		halfamonth = day * 15,
		month = day * 30,
		year = month * 12,

		_year = difference / year,
		_month = difference / month,
		_week = difference / (7*day),
		_day = difference / day,
		_hour = difference / hour,
		_min = difference / minute;

	if(_year>=1) {
		// 超过1年，直接显示年月日
        return (function () {
            var date = new Date(str);
            return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
        })();
	}
	else if(_month>=1) {
		return ~~(_month) + "个月前"
	}
	else if(_week>=1) {
		return ~~(_week) + "周前"
	}
	else if(_day>=1) {
		return ~~(_day) +"天前"
	}
	else if(_hour>=1) {
		return ~~(_hour) +"小时前"
	}
	else if(_min>=1) {
		return ~~(_min) +"分钟前"
	}
	else return "刚刚";
}
