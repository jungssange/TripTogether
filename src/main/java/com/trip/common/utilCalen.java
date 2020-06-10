package com.trip.common;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang.ArrayUtils;

import com.ibm.icu.util.ChineseCalendar;

@SuppressWarnings("static-access")

public class utilCalen{
	private static SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
	private static Calendar calendar = Calendar.getInstance();
	private static final String[] DayArr = {"일", "월", "화", "수", "목", "금", "토"};
	
	public utilCalen(){}
	
	public static void set_today(){
		calendar.setTime( new Date() );
	}
	
	/**
	 * 오늘날짜를 세팅합니다.
	 * @param date 날짜
	 */
	public static void set_today(String date) {
		try {
			calendar.setTime( ft.parse( date ) );
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}
	public static String get_today() {
		set_today();
		return ft.format( calendar.getTime());
	}	
	public static String get_year() {
		set_today();
		return Integer.toString(calendar.get(calendar.YEAR));
	}
	
	public static String get_firstOfYear(){
		return calendar.get(calendar.YEAR)+"-01-01";    
	}
	
	public static Integer get_DayOfWeek(String date) {
		set_today(date);
		return calendar.get(calendar.DAY_OF_WEEK)-1;    
	}
	public static Integer get_WeekOfYear(String date){
		set_today(date);
		return calendar.get(calendar.WEEK_OF_YEAR);    
	}
	public static Integer get_Month(String date){
		set_today(date);
		return calendar.get(calendar.MONTH)+1;    
	}
	public static String get_WeekStrOfYear(String date){
		String str = "0" + get_WeekOfYear(date);
		return str.substring(str.length()-2, 3);    
	}	
	public static Integer get_Quarter(String date){
		set_today(date);
		return calendar.get(calendar.MONTH) / 3 + 1;    
	}
	
	public static String get_String4DayOfWeek(String date){
		set_today(date);
		return "(" + DayArr[calendar.get(calendar.DAY_OF_WEEK)-1] + ")";    
	}

	public static String get_WeekString(Integer idx){
		return DayArr[idx]+"요일";    
	}
	
	/**
	 * get_firstOfWeek + get_lastOfWeek 한 세트입니다.
	 * @param init true/false
	 * @return 리턴
	 */
	public static String get_firstOfWeek(boolean init){				// 일요일 0 ~
		if (init) {
			set_today();
		}
		
		Integer dw = calendar.get(calendar.DAY_OF_WEEK)-1;
		calendar.add(Calendar.DATE, dw * -1);
		return ft.format( calendar.getTime() );    
	}
	
	/**
	 * 마지막 주를 출력합니다.
	 * @param init true/false
	 * @return 리턴
	 */
	public static String get_lastOfWeek(boolean init){				// ~ 토요일 6
		if (init){
			set_today();
		}
		
		calendar.add(Calendar.DATE, 6);
		return ft.format( calendar.getTime());		
	}

	/**
	 * 이달의 1일을 출력합니다.
	 * @return 리턴
	 */
	public static String get_firstOfMonth(){				// ex: 2013-02-01
		String str = ft.format( calendar.getTime() );
		
		return str.substring(0, 8)+"01";    
	}

	/**
	 * 이달의 마지막일을 출력합니다.
	 * @param init 초기화여부
	 * @return 리턴
	 */
	public static String get_lastOfMonth(boolean init){	// 이달의 마지막일 
		if (init){
			set_today();
		}

		try {
			calendar.setTime( ft.parse( calendar.get(calendar.YEAR) + "-" + (calendar.get(calendar.MONTH)+2) + "-01" ) );
		} catch (ParseException e) {
			e.printStackTrace();
		}
		calendar.add(Calendar.DATE, -1);
		return ft.format( calendar.getTime() );
		 
	}	

	/**
	 * get_lastBeforeMonth + get_firstBeforeYear 한 세트입니다.
	 * 호출 순서 중요: 다음 순서가 아닌 경우에는 set_today()로 초기화 후 이용
	 * get_lastBeforeMonth > get_firstBeforeYear 순으로 호출
	 * @param init true/false
	 * @return 리턴
	 */
	public static String get_lastBeforeMonth(boolean init){	// 지난달의 마지막일 
		if (init){
			set_today();
		}

		try {
			calendar.setTime( ft.parse( calendar.get(calendar.YEAR) + "-" + (calendar.get(calendar.MONTH)+1) + "-01" ) );
		} catch (ParseException e) {
			e.printStackTrace();
		}
		calendar.add(Calendar.DATE, -1);
		return ft.format( calendar.getTime() );
		 
	}	
	/**
	 * 1년전의 1일을 계산합니다.
	 * @param init true/false
	 * @return 리턴
	 */
	public static String get_firstBeforeYear(boolean init) {	//1년전의 1일
		if (init){
			set_today();
		}
		
		calendar.add(Calendar.YEAR, -1);
		try {
			calendar.setTime( ft.parse( calendar.get(calendar.YEAR) + "-" + (calendar.get(calendar.MONTH)+1) + "-01" ) );
			//return ft.format( ft.parse( calendar.get(calendar.YEAR) + "-" + (calendar.get(calendar.MONTH)+1) + "-01" ) );
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return ft.format( calendar.getTime() );
	}

	/**
	 * 두 날짜(date1,date2)의 일수를 계산합니다.
	 * 1~7의 일수는 7이기때문에 +1
	 * @param date1 날짜1
	 * @param date2 날짜2
	 * @return 리턴
	 * @throws ParseException 예외처리
	 */
	public static Integer datediff(String date1, String date2) throws ParseException{ 
		Date dt1 = ft.parse( date1 );
		Date dt2 = ft.parse( date2 );
		
		return  (int) ( (dt1.getTime()-dt2.getTime()) / (24 * 60 * 60 * 1000) ) + 1;
	}	

	/**
	 * 날짜에 일자 감소를 계산합니다.
	 * @param date 날짜
	 * @param calDay 차감일
	 * @return 리턴
	 */
	public static String DateAdd(String date, Integer calDay){ 
		set_today(date);
		calendar.add(Calendar.DATE, calDay); //-1 * 
		
		return  ft.format( calendar.getTime() );
	}	
	/**
	 * 달을 더합니다.
	 * @param date 날짜
	 * @param month 더할 달
	 * @return 리턴
	 */
	public static String MonthAdd(String date, Integer month){ 
		set_today(date);
		calendar.add(Calendar.MONTH, month); //-1 * 
		
		return  ft.format( calendar.getTime() );
	}	
	/*public static String CalculatePreDate( String datetype, String date1, String date2){
		String str="";
		set_today(date1);

		try {
			switch (datetype) {
			      case "W": calendar.add(Calendar.DATE, -1);  str = get_firstOfWeek(false); break;
			      case "M": calendar.add(Calendar.MONTH, -1); str = get_firstOfMonth(); break;
			      case "Q": calendar.add(Calendar.MONTH, -3); str = get_firstOfMonth(); break;
			      case "H": calendar.add(Calendar.MONTH, -6); str = get_firstOfMonth(); break;
			      case "Y": calendar.add(Calendar.YEAR, -1);  str = get_firstOfMonth(); break;
			      default : calendar.add(Calendar.DATE, -1 * datediff(date2, date1)); str = ft.format( calendar.getTime() ); 
		    }
		} catch (ParseException e) {
			e.printStackTrace();
		}  
		return  str;
	}	*/

	/**
	 * 날자에 주, 일, 월, 분기로 표시합니다.
	 * "시간으로보기","일간으로보기","주간으로보기","월간으로보기","분기로보기";
	 * @param datetype 날짜타입
	 * @param date1 날짜
	 * @return 리턴
	 */
	public static String getDateByType( Integer datetype, String date1){
		String str="";
		//set_today(date1);

		switch (datetype) {
		      case 2: str = date1.substring(0,4) + '-' + get_WeekStrOfYear(date1); 
		      break;
		      case 3: str = date1.substring(0,4) + '-' + get_Month(date1); 
		      break;
		      case 4: str = date1.substring(0,4) + '-' + get_Quarter(date1); 
		      break;
		      default : str = date1; 
	    }
		return  str;
	}
	
	
	

	/**
	 * 입력한 오늘 날짜가 토요일 또는 일요일인지 결과 값을 반환 합니다.
	 * @param toDay 오늘 날짜
	 * @return 오늘이 토요일,일요일이라면 TRUE반환
	 */
	  public static boolean isWeekend(String date) 
	  {
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	        try {
	        	calendar.setTime(sdf.parse(date));
			}
	        catch (ParseException e) {
			}
	        return calendar.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY || calendar.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY;
	  }
	  
	  
	  
	  
	  /**
	   *  yyyy-MM-dd 형식의 문자열 날짜를  음력 날짜로 바꿔 줍니다.
	   * @param toDay "2018-04-18" 형식의 날짜
	   * @return 음력 날짜 yyyy-MM-dd
	   */
	  public static String toLunar(String date)
	  {
		ChineseCalendar chinaCal = new ChineseCalendar();
	         
		calendar.set(Calendar.YEAR, Integer.parseInt(date.substring(0, 4)));
		calendar.set(Calendar.MONTH, Integer.parseInt(date.substring(5, 7))-1);
		calendar.set(Calendar.DAY_OF_MONTH, Integer.parseInt(date.substring(8,10)));
	    chinaCal.setTimeInMillis(calendar.getTimeInMillis());
	 
	    int chinaYY = chinaCal.get(ChineseCalendar.EXTENDED_YEAR) - 2637 ;
	    int chinaMM = chinaCal.get(ChineseCalendar.MONTH) + 1;
	    int chinaDD = chinaCal.get(ChineseCalendar.DAY_OF_MONTH);
	         
	    String chinaDate = "" ;     // 음력 날짜
	         
	    chinaDate += chinaYY ;      // 년
	    chinaDate += "-" ;          // 연도 구분자
	         
	    if(chinaMM < 10)         // 월
	    	chinaDate += "0" + Integer.toString(chinaMM) ;
	    else
	       chinaDate += Integer.toString(chinaMM) ;
	         
	       chinaDate += "-" ;          // 날짜 구분자
	         
	    if(chinaDD < 10)         // 일
	    	chinaDate += "0" + Integer.toString(chinaDD) ;
	        
	    else
	        chinaDate += Integer.toString(chinaDD) ;

	    
	    return chinaDate;
	  }
	  
	  
	  
	  
	  
	  /**
	   * 입력한 날짜가 법정공휴일 + 주말인지 체크 합니다. 
	   * 
	   * 양력: 0101 - 신정
	   * 	   0301 - 3.1절
	   * 	   0505 - 어린이날
	   *       0606 - 현충일
	   *       0815 - 광복절
	   *       1003 - 개천절
	   *       1009 - 한글의 날
	   *       1225 - 크리스마스
	   *       
	   * 음력: 1231, 0101, 0102 - 구정연휴
	   * 	   0408 - 부처님 오신날
	   *   	   0814, 0815, 0816 - 추석연휴
	   *   
	   * @param date 
	   * @return true, false
	   */
	  public static boolean isHoliday(String date)
	  {
		 boolean result = false; 
		 
		 String[] solarArr={"0101","0301","0505","0606","0815","1003","1009","1225"};
		 String[] lunarArr={"1231","0101","0102","0408","0814","0815","0816"};
		 
		 String strDate = date.replaceAll("-","").substring(4,8); 
		 String lunarDate = toLunar(date).replaceAll("-","").substring(4,8);
		 
		 if(ArrayUtils.contains(solarArr, strDate) || ArrayUtils.contains(lunarArr, lunarDate)){
			 result = true;
		 }
		  
		 return result;
	  }
}
