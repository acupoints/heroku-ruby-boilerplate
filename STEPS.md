### STEPS

## Start the backend service
```bash
bundle install
yarn install
rails server

# rails g model FyrbUser name:string username:string email:string password_digest:string
# rails g controller FyrbUsers
# rails g controller FyrbAuths

# You can see which tables are there
# select tablename from pg_tables where schemaname='public'
# You can first upload the code, database migration delay
# heroku run rails db:migrate RAILS_ENV=production --app damp-plateau-39759

```
