package com.trip.board;

import java.util.List;
import java.util.Locale;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.trip.common.searchParam;

/**
 * Handles requests for the application home page.
 */
@Controller
public class board {
	// private static final Logger logger = LoggerFactory.getLogger(main.class);

	@Resource(name = "boardDAO")
	private boardDAO boardDAO;

	@RequestMapping(value = "/boardList")
	public String boardList(Locale locale, Model model, @ModelAttribute("searchInfo") searchParam searchInfo) throws Exception {
		
		if(searchInfo.getSearchType()==null) {
			searchInfo.setSearchType("TITLE");
		}
		
		searchInfo.PageCalculate(boardDAO.selectBoardCount(searchInfo));
		List<boardDO> listview = boardDAO.selectBoardList(searchInfo);
		model.addAttribute("listview", listview);
		model.addAttribute("searchInfo", searchInfo);
		
		return "board/boardList";
	}
	
	@RequestMapping(value = "/boardListOn")
	public String boardListOn(Locale locale, Model model, @ModelAttribute("searchInfo") searchParam searchInfo) throws Exception {
		
		List<boardDO> listview = boardDAO.selectBoardListOn();
		model.addAttribute("listview", listview);
		model.addAttribute("searchVO", searchInfo);
		
		return "board/boardListOn";
	}
	
	@RequestMapping(value = "/boardForm")
	public String boardForm(HttpServletRequest request, Locale locale, Model model) throws Exception {
		String brdno = request.getParameter("brdno");
		boardDO boardInfo = null;
		
		if(brdno!=null) {
			boardInfo = boardDAO.selectBoardOne(brdno);
		} else {
			boardInfo = new boardDO();
			boardInfo.setType("1");
		}
		
		model.addAttribute("boardInfo", boardInfo);
		
		return "board/boardForm";
	}
	
	@RequestMapping(value = "/boardView")
	public String boardView(HttpServletRequest request, Locale locale, Model model) throws Exception {
		String brdno = request.getParameter("brdno");
		boardDO boardInfo = boardDAO.selectBoardOne(brdno);
		
		model.addAttribute("boardInfo", boardInfo);
		
		return "board/boardView";
	}
	
	@RequestMapping(value = "/boardSave")
	public String boardSave(HttpServletRequest request, Locale locale, Model model, boardDO boardInfo) throws Exception {
		boardDAO.insertBoard(boardInfo);
		
		return "redirect:/boardList";
	}
	
	@RequestMapping(value = "/boardDelete")
	public String boardDelete(HttpServletRequest request, Locale locale, Model model) throws Exception {
		String brdno = request.getParameter("brdno");
		boardDAO.deleteBoard(brdno);
		
		return "redirect:/boardList";
	}

}
