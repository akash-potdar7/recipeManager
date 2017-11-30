package com.gfs.recipeApp.recipeMgr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/recipes")
public class RecipesController {

	@RequestMapping("/layout")
	public String getPartialPage(){
		return "recipes/layout";
	}
}
