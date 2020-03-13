package com.trip.main;

import java.util.List;
import java.util.Locale;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.trip.user.userDAO;
import com.trip.user.userDO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class main {
	//private static final Logger logger = LoggerFactory.getLogger(main.class);
	
	@Resource(name = "userDAO")
	private userDAO userDAO;
	
	@RequestMapping(value = "/")
	public String index(Locale locale, Model model) throws Exception {
		return "index";
	}
	
	@RequestMapping(value = "/main")
	public String main_(Locale locale, Model model) throws Exception {
		
		/* DB ÄÁ³Ø¼Ç ¹× ¼¿·ºÆ® Å×½ºÆ® */
		List<userDO> userList = userDAO.selectUserList();
		model.addAttribute("userList", userList);
		
		return "main/main";
	}
	
}
