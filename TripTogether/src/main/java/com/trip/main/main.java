package com.trip.main;

import java.util.Locale;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.trip.user.userDAO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class main {
	// private static final Logger logger = LoggerFactory.getLogger(main.class);

	@Resource(name = "userDAO")
	private userDAO userDAO;

	@RequestMapping(value = "/")
	public String index(Locale locale, Model model) throws Exception {
		return "index";
	}

	@RequestMapping(value = "/main")
	public String main_(Locale locale, Model model/* , @ModelAttribute("searchInfo") searchParam searchInfo */)
			throws Exception {
		/*
		 * DB ���ؼ� �� ����Ʈ �׽�Ʈ if (searchInfo.getFrdate()==null){
		 * searchInfo.setFrdate(com.trip.common.utilCalen.get_firstOfYear()); } if
		 * (searchInfo.getTodate()==null){
		 * searchInfo.setTodate(com.trip.common.utilCalen.get_today()); }
		 * 
		 * List<userDO> userList = userDAO.selectUserList();
		 * model.addAttribute("userList", userList); model.addAttribute("searchInfo",
		 * searchInfo); model.addAttribute("searchVO", searchInfo);
		 */
		return "main/main";
	}

}
