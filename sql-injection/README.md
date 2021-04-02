# SQL injection

SQL injections are a common and old method for malicious actors to drop tables, log in as admins, and screw with databases.

## Getting Started
First run
```bash
yarn install
```
or
```bash
npm install
```

then run
```bash
yarn start
```
or
```bash
npm start
```

This is a very simple example of this, but to get data about an individual user, use the credentials: "Joe" as the username and "pass" as the password.

To implement a SQL injection, for the username and password fields use the text `' OR 1=1; --`

By appending this *always* truthy statement to the SQL query `"SELECT * FROM USERS WHERE USERNAME='' OR 1=1; -- AND PASSWORD='' OR 1=1; --"`, it's going to grab all user and password information in the users table and send this as a response.

*ofc this isn't a practical query, just a demonstration*

## How to Avoid:
The best approach would be through parametized queries. In my PostgreSQL example, I'm using string concatenation for the query, which is extremely dangerous, since it allows malicious actors to easily append more to the query. By using dynamic parameters instead, attempting to append to the query will just break the query. See the [docs](https://node-postgres.com/features/queries) for more.
