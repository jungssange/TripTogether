package com.trip.mytrip;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Handles requests for the application home page.
 */
@Controller
public class mytrip {
	
	@RequestMapping(value = "/mytrip")
	public String main_(Locale locale, Model model) throws Exception {
		return "mytrip/mytrip";
	}
	
}
