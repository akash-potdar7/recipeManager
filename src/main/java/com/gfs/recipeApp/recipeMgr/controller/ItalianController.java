package com.gfs.recipeApp.recipeMgr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/italian")
public class ItalianController {

	@RequestMapping("/layout")
	public String getPartialPage(){
		return "italian/layout";
	}
}