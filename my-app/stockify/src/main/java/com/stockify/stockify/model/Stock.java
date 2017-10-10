package com.stockify.stockify.model;

public class Stock {
	private String ticker;
	private int limit;
	
    public Stock(String ticker, int limit)
    {
    	this.ticker = ticker;
    	this.limit = limit;
    }
    
    public String getTicker()
    {
    	return this.ticker;
    }
    
    public int getLimit()
    {
    	return this.limit;
    }
    
    public void setTicker(String tickerName)
    {
    	this.ticker = tickerName;
    }
    
    public void setLimit(int value)
    {
    	this.limit = value;
    }
}
