# magoosh_test
This is a repository for both of backend and frontend of web application developed with Django3.1.3, Angular 9, built by superdev0714

### Requirements
1. A user can see the current counter’s value. It always takes the value from a single table database in postgres. You may assume this table exists now. (Frontend)
2. Every time a user clicks a button, reduce the value of the counter by 1 and save it to the database. (Both frontend and backend)
3. Every monday at 00:00 am PST the counter resets to 2. (Backend)


### Recommended Installation For Backend
1. [Postgresql](https://www.postgresql.org/download/)
2. [Python](https://www.python.org/downloads/release/python-3.7/)

### Installation For Backend
1. Install [pipenv](https://pypi.org/project/pipenv/)
2. Clone this repo and `cd magoosh_test`
3. Run `pip install -r requirements.txt` to install the environments
4. Run `cp .env.example .env`
5. Update .env file `DATABASE_URL` with your `database_name`, `database_user`, `database_password`, if you use postgresql. 
    Can alternatively set it to `sqlite:////tmp/my-tmp-sqlite.db`, if you want to use sqlite for local development.


### Getting Started For Backend
1. Run `pipenv shell`
2. Run `python manage.py migrate`
3. Run `python manage.py crontab add`
4. Run `python manage.py runserver`


### Recommended Installation For Frontend
1. Run `cd frontend`
2. Run `npm install`
3. Run `ng serve`