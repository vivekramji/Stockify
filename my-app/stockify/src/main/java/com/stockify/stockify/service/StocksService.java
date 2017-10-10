package com.stockify.stockify.service;

import java.util.Collection;

import com.stockify.stockify.model.Stock;

public interface StocksService {
	public abstract Collection<Stock> getAllStocks();
}
