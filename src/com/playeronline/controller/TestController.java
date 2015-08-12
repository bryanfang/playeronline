package com.playeronline.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("test.do")
public class TestController {
	@RequestMapping(method = RequestMethod.POST)
	public String test(ModelMap model){
		model.addAttribute("result","Hello World!");
		return "test";
	}
}
