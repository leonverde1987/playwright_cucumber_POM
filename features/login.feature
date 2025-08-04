#command to install cucumber in playwright = sudo npm install --save-dev @cucumber/cucumber ts-node

Feature: User Login
    Scenario: Successful login with valida credentials
        Given the user is on the login page
        When the user enters a valid email and password
        Then the user should see their email and password in the URL