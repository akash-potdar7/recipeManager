package com.gfs.recipeApp.recipeMgr.config;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.gfs")
@Import({ThymeleafConfig.class})
public class WebMvcConfig extends WebMvcConfigurerAdapter {
	
	 @Override
	    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
	        configurer.enable();
	    }

	    @Override
	    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
	        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	    }

	    @Override
	    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	        converters.add(new MappingJackson2HttpMessageConverter());
	        super.configureMessageConverters(converters);
	    }
	
}
