package com.gfs.recipeApp.recipeMgr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mexican")
public class MexicanController {

	@RequestMapping("/layout")
	public String getPartialPage(){
		return "mexican/layout";
	}
}