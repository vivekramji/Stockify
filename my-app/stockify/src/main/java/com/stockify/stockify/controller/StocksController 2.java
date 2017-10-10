package com.stockify.stockify.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.stockify.stockify.model.Stock;
import com.stockify.stockify.service.StocksService;

@CrossOrigin
@RestController
@RequestMapping("/stocks")
public class StocksController {
	
	@Autowired
	StocksService ssv;
	
	@RequestMapping(value = "/display", method = RequestMethod.GET)
	public Collection<Stock> getAllStocks(){
		return ssv.getAllStocks();
	}

}
