// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

// global variables
const randomNumber = Math.floor(Math.random() * 9)

function guessClicked () {
  // this function has the user guess a number between 0 and 9

  // input
  let userGuess = parseInt(document.getElementById("user-guess").value)

  // process
  if (userGuess == randomNumber) {
    // output
    document.getElementById("user-answer").innerHTML = " That is correct"
  } else if (userGuess > randomNumber) {
    // output
    document.getElementById("user-answer").innerHTML = userGuess + " is too high"
  } else if (userGuess < randomNumber) {
    // output
    document.getElementById("user-answer").innerHTML = userGuess + " is too low"
  } else {
    // output
    document.getElementById("user-answer").innerHTML = "That is not a number between 0 - 9"
  }
}
