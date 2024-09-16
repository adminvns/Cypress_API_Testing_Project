[![Cypress Tests](https://github.com/adminvns/shell_assignment_api/actions/workflows/cypress-tests.yml/badge.svg?branch=main)](https://github.com/adminvns/shell_assignment_api/actions/workflows/cypress-tests.yml)
# Cypress API Test Suite for Assignment- Shell

## Overview

This project contains an automated test suite for SWAPI (Star Wars API), leveraging Cypress for REST API testing. The suite includes test cases for verifying various Star Wars API endpoints such as fetching the list of people and retrieving a specific person by ID.

## Table of Contents

1. [Running the Tests Locally](#running-the-tests-locally)
2. [Test Flows](#test-flows)
3. [GitHub Actions CI/CD Pipeline](#github-actions-cicd-pipeline)

## Running the Tests Locally

To run the tests locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <this repo>
   cd repo
2. **Install Dependencies**

     ```bash
   npm install
   npx cypress run

## Test Flows
The test suite covers the following cases:

1. **Verify List of People**

Endpoint: GET /people/
Test Description: Verify that the response returns a status of 200 and contains a list of people.
Validation:
Status code is 200
The response contains a results array

2. **Verify a Specific Person by ID**

Endpoint: GET /people/{id}
Test Description: Verify that a request for a specific person (Luke Skywalker) returns the correct details.
Validation:
Status code is 200
The response contains the name field with the value 'Luke Skywalker'

## GitHub Actions CI/CD Pipeline

This project includes a GitHub Actions workflow for continuous integration and deployment. The workflow is triggered on every push to the repository and performs the following:

**Runs on Ubuntu-latest**: The tests are executed on an Ubuntu virtual machine to ensure consistency across environments.

**Headless Mode**: Tests are run in headless mode for efficient execution.

**Merge and Generate Reports**: After running the tests, the results are merged and a detailed report is generated.

**Upload Reports**: The test reports are uploaded as artifacts, allowing you to download and review them from the GitHub Actions interface.We can also see Cypress Results Summary by Navigating to Actions in Github and Selecting particular Run and then Clicking on Summary.

##
