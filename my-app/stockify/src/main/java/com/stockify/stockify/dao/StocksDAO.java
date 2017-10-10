package com.stockify.stockify.dao;

import java.util.*;

import org.springframework.stereotype.Repository;

import com.stockify.stockify.model.Stock;

@Repository
public class StocksDAO {
	private static Map<Integer, Stock> stockMap;
	
	static {
		stockMap = new HashMap<Integer, Stock>() {
			{
				put(1, new Stock("GOOG", 930));
				put(2, new Stock("MSFT", 75));
				put(3, new Stock("AMZN", 945));
			}
		};
	}
	
	public Collection<Stock> getAllStocks(){
		return stockMap.values();
	}
	
}
