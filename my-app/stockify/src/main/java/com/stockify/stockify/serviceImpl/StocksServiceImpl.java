package com.stockify.stockify.serviceImpl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockify.stockify.dao.StocksDAO;
import com.stockify.stockify.model.Stock;
import com.stockify.stockify.service.StocksService;

@Service
public class StocksServiceImpl implements StocksService{
	
	@Autowired
	StocksDAO stocksDao;

	public Collection<Stock> getAllStocks() {
		// TODO Auto-generated method stub
		return stocksDao.getAllStocks();
	}

}
