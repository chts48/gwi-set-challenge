# GWI SET(Software Engineer in Test) Challenge

## Exercise: Charts page testing

### Describe the test scenarios and automate them

In this assigment you need to implement a testing solution of your taste based on a preexisting micro application. 
Instructions on how to run the micro application can be found right below.

### `My Charts` Micro application

Charts are a central piece of our platform. `My Charts` is a small app that allows you to view your existing charts. This micro application consists of a

- dummy server with a single endpoint and
- a 3-page web interface where the e2e testing should only take place on the first page  

### Setup

In order to be able to run the application locally you have to:

1. Install node version < 16 (due to a bug on [create-react-app](https://stackoverflow.com/questions/69693907/error-err-package-path-not-exported-package-subpath-lib-tokenize-is-not-d))
2. Clone git repository: `git clone https://github.com/GlobalWebIndex/gwi-set-challenge.git`
3. Goto dir: `cd gwi-set-challenge`
4. Install dependencies: `npm install`
5. Start application: `npm run start`
    - This creates and runs a server on <http://localhost:3001> and also
    - a react application on <http://localhost:3000> which proxies requests to the server above.
6. After that the micro application can be found here: <http://localhost:3000>

### SET Testing challenge

Please provide E2E & API testing for the `My Charts` app and endpoints.

1. #### Frontend / Functional automation test on the following

    Please provide Functional UI Test Suite using your automation framework of choice (preferable Cypress or Playwright).

    Note that we have omitted a lot of details in this description on what kind of tests should be implemented and how.
    We hope you will fill these details in and prove to us that you are aware of industry best practices and that you also follow them.
    In your code, we would like to see your code structure, test design and test strategy.

3. #### API test

    The below endpoint is responsible for fetching the charts.
    How would you normally test it?
   
    | URL | `http://localhost:3000/api/charts` |
    | --- | --- |
    | Method | GET |
    
    | Param | Values | Description|
    | --- | --- | --- |
    | orderBy | dateCreated | Order results based on their creation date |
    | orderBy | dateModified | Order results based on their modified date |
    | orderBy | name | Order results based on their name |
    | order | desc / asc | Specify ascending or descending order |


    #### Responses

    | Code | Description |
    | --- | --- |
    | 200 | OK ```[{ name: string, created_at: timestamp, modified_at: timestamp}]``` |
    | 400 | Client Error |
    | 404 | Not Found  |
    | 500 | Server Error |

### Bonus

1. #### CI/CD
Could you provide a workflow that builds and starts application run your existing test suites and informs with the results back to the end user. 
If not using Github Actions to implement the workflow, please describe the steps of an ideal CI/CD pipeline.

Feel free to ask questions if something is not clear, please give your best shot on this task!

### Submission

Just a make a PR to the current repo! Good luck, potential colleague!
