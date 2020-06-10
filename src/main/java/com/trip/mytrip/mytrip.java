package com.trip.mytrip;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Handles requests for the application home page.
 */
@Controller
public class mytrip {
	
	@RequestMapping(value = "/mytrip")
	public String mytrip_(HttpServletRequest request, Locale locale, Model model) throws Exception {
		
		String searchKeyword = request.getParameter("searchKeyword");
		model.addAttribute("searchKeyword", searchKeyword);
		
		return "mytrip/mytrip";
	}
	
}
