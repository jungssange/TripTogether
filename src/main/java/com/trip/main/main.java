package com.trip.main;

import java.util.List;
import java.util.Locale;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.trip.common.commonDAO;
import com.trip.common.hashTag;
import com.trip.common.searchParam;
import com.trip.user.userDAO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class main {
	// private static final Logger logger = LoggerFactory.getLogger(main.class);

	@Resource(name = "userDAO")
	private userDAO userDAO;
	
	@Resource(name = "commonDAO")
	private commonDAO commonDAO;

	@RequestMapping(value = "/")
	public String index(Locale locale, Model model) throws Exception {
		return "index";
	}

	@RequestMapping(value = "/main")
	public String main_(Locale locale, Model model, @ModelAttribute("searchInfo") searchParam searchInfo) throws Exception {
		
		List<hashTag> tagList = commonDAO.selectTagList();
		model.addAttribute("tagList", tagList);
		model.addAttribute("searchVO", searchInfo);
		
		return "main/main";
	}

}
