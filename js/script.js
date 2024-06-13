// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"


async function getFact() {
  try {
    const resultJSON = await fetch("https://api.api-ninjas.com/v1/facts?X-Api-Key=feqFGVrIadML22mN/VFsZA==j53YXX5ZUwiNWrLT")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    // extract data
    const fact = jsonData[0].fact
    // display data
    document.getElementById("answer").innerHTML = fact
  } catch (error) {
    console.error(error)
  }
}