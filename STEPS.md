### STEPS

## Start the backend service
```bash
bundle install
yarn install
rails server
user
# rails g controller FyrbAuths

# rails g model FyrbUser name:string username:string email:string password_digest:string
# rails g controller FyrbUsers

# You can see which tables are there
# select tablename from pg_tables where schemaname='public'
# You can first upload the code, database migration delay
# heroku run rails db:migrate RAILS_ENV=production --app damp-plateau-39759

```

## 
```bash
# Mobile browser form will zoom in when input
# , minimum-scale=1, maximum-scale=1

# # Doctor, Patient, Appointment
# rails new doctors_api --api
# rails g model Doctor first_name:string last_name:string
# rails g model Appointment patient_first_name:string patient_last_name:string visit:datetime
# # rails db:create
# rails db:migrate

# Doctor.create(first_name: 'John', last_name: 'Smith')
# doctor = Doctor.first
# Appointment.create(doctor_id: doctor.id, patient_first_name: 'Jane', patient_last_name: 'Doe', visit: 2.hours.ago)
# Appointment.create(doctor_id: doctor.id, patient_first_name: 'Jack', patient_last_name: 'Doe', visit: 1.day.ago)
# rails db:seed

rails g model FyrbMicropost title:string content:text fyrb_user:references
rails db:migrate
# rails db:seed

rails g controller FyrbMicroposts index show create update destroy

## gem 'active_model_serializers'
# bundle install
rails g serializer FyrbUser
rails g serializer FyrbMicropost

```

## 
```bash
heroku login
heroku run rails db:migrate --app damp-plateau-39759

```

## Local development environment
```bash
# rails db:migrate RAILS_ENV=development
yarn build
yarn start

```
