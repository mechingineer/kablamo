import { expect, test, APIRequest } from '@playwright/test';
import * as helper from '../helper/api'
import testData from '../fixtures/testData.json'

test('TestCase1 - test to find the the average forex rate for CAD to AUD for the recent weeks', async () => {
  
  const startDate = await helper.getDateMinusWeeks(testData.testcase1.weeks);
  const endDate = new Date();
  const response = await helper.getObservations(testData.testcase1.series,startDate,endDate.toLocaleDateString('en-CA'),testData.testcase1.format);  
  await expect(response).toBeOK();
  const body = await response.body();
  const jsonResponse = JSON.parse(body.toString()); 
  expect(jsonResponse["seriesDetail"][testData.testcase1.series]["label"]).toBe(testData.testcase1.label);
  expect(jsonResponse["seriesDetail"][testData.testcase1.series]["description"]).toBe(testData.testcase1.description);
  const rates = jsonResponse["observations"].map(obs => parseFloat(obs[testData.testcase1.series].v))
  const sum = rates.reduce((acc, rate) => acc + rate, 0);
  const average = sum/rates.length;
  console.log("Average is last "+testData.testcase1.weeks+" weeks is "+ average);
  
});

test('TestCase2 - test to validate the error message in case of incorrect series', async () => {
  
  const response = await helper.getObservations(testData.testcase2.series);  
  await expect(response.status()).toEqual(404);
  const body = await response.body();
  const jsonResponse = await JSON.parse(body.toString());
  expect(jsonResponse["message"]).toBe('Series '+testData.testcase2.series+' not found.');
  
});

test('TestCase3 - test to validate the error message in case of incorrect date format', async () => {
  
  const response = await helper.getObservations(testData.testcase3.series, testData.testcase3.startDate, testData.testcase3.endDate);  
  await expect(response.status()).toEqual(400);
  const body = await response.body();
  const jsonResponse = await JSON.parse(body.toString());
  expect(jsonResponse["message"]).toBe('Start date contains a value that is not allowed. Expected format is YYYY-MM-DD, e.g. 2001-01-27');
  
});

test('TestCase4 - test to validate the error message in case of end date is less than start date', async () => {
  
  const response = await helper.getObservations(testData.testcase4.series, testData.testcase4.startDate, testData.testcase4.endDate);  
  await expect(response.status()).toEqual(400);
  const body = await response.body();
  const jsonResponse = await JSON.parse(body.toString());
  expect(jsonResponse["message"]).toBe('The End date must be greater than the Start date.');
  
});

test('TestCase5 - Additional test to find the average forex rates for AUD to CAD for recent weeks', async () => {
  
  const startDate = await helper.getDateMinusWeeks(testData.testcase5.weeks);
  const endDate = new Date();
  const response = await helper.getObservations(testData.testcase5.series,startDate,endDate.toLocaleDateString('en-CA'),testData.testcase6.format);  
  await expect(response).toBeOK();
  const body = await response.body();
  const jsonResponse = JSON.parse(body.toString());
  expect(jsonResponse["seriesDetail"][testData.testcase5.series]["label"]).toBe(testData.testcase5.label);
  expect(jsonResponse["seriesDetail"][testData.testcase5.series]["description"]).toBe(testData.testcase5.description);
  const rates = jsonResponse["observations"].map(obs => parseFloat(obs[testData.testcase5.series].v))
  const sum = rates.reduce((acc, rate) => acc + rate, 0);
  const average = sum/rates.length;
  console.log("Average is last "+testData.testcase5.weeks+" weeks is "+ average);
  
});

test('TestCase6 - Additional test to find the average forex rates for USD to CAD for recent weeks', async () => {
  
  const startDate = await helper.getDateMinusWeeks(testData.testcase6.weeks);
  const endDate = new Date();
  const response = await helper.getObservations(testData.testcase6.series,startDate,endDate.toLocaleDateString('en-CA'),testData.testcase6.format);  
  await expect(response).toBeOK();
  const body = await response.body();
  const jsonResponse = JSON.parse(body.toString());
  expect(jsonResponse["seriesDetail"][testData.testcase6.series]["label"]).toBe(testData.testcase6.label);
  expect(jsonResponse["seriesDetail"][testData.testcase6.series]["description"]).toBe(testData.testcase6.description);
  const rates = jsonResponse["observations"].map(obs => parseFloat(obs[testData.testcase6.series].v))
  const sum = rates.reduce((acc, rate) => acc + rate, 0);
  const average = sum/rates.length;
  console.log("Average is last "+testData.testcase6.weeks+" weeks is "+ average);
  
});