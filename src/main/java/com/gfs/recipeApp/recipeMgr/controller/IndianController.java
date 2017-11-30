package com.gfs.recipeApp.recipeMgr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/indian")
public class IndianController {

	@RequestMapping("/layout")
	public String getPartialPage(){
		return "indian/layout";
	}
}
