### STEPS

## 
```bash
# 在组件中访问public文件夹中的图像，为此注释掉了以下代码
# react_client\\config\\webpack.config.js 311行
# // new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
```

## essentials
```bash
### Start backend
# gem install bundler

# npm install -g yarn
# yarn --version
# get-ExecutionPolicy
# admin> set-ExecutionPolicy RemoteSigned
# admin> Y

bundle install
yarn install
rails server

### Start frontend
# Switch directory to react_client
yarn install
yarn start
yarn build

### New environment needs to create database and migration model
rails db:drop
rails db:create
rails db:migrate

```

## Start the backend service
```bash
bundle install
yarn install
rails server

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

## Create models, controllers and serializers
```bash
rails g model FyrbMicropost title:string content:text fyrb_user:references
##
rails g model FyrbTag name:string description:text color:string fyrb_user:references
rails g model FyrbTool name:string description:text active:integer fyrb_user:references
rails g model FyrbFragment title:string introduction:text detail:text summary:text group:text level:integer fyrb_tool:references fyrb_micropost:references
##
rails g model FyrbTerm phrase:string annotation:text fyrb_user:references fyrb_micropost:references
rails g model FyrbStatement original:text comprehension:text fyrb_term:references fyrb_micropost:references
rails db:migrate
# rails db:seed

rails g controller FyrbMicroposts index show create update destroy
##
rails g controller FyrbTags index show create update destroy
rails g controller FyrbTools index show create update destroy
rails g controller FyrbFragments index show create update destroy
##
rails g controller FyrbTerms index show create update destroy
rails g controller FyrbStatements index show create update destroy

rails g serializer FyrbUser
rails g serializer FyrbMicropost
##
rails g serializer FyrbTag
rails g serializer FyrbTool
rails g serializer FyrbFragment
##
rails g serializer FyrbTerm
rails g serializer FyrbStatement

## 20201029 Add multiple models
## Open the terminal in the root directory and execute the following commands
rails g model FyrbProgram name:string alias:string platform:string version:string description:text shortcuts:text installation:text uninstall:text fyrb_user:references
rails g model FyrbException platforms:text steps:text mul_errors:text solutions:text fyrb_user:references fyrb_program:references
rails db:migrate

rails g controller FyrbPrograms index show create update destroy
rails g controller FyrbExceptions index show create update destroy

rails g serializer FyrbProgram
rails g serializer FyrbException

##
rails g model FyrbInterface platforms:text steps:text mul_errors:text solutions:text fyrb_user:references fyrb_program:references
rails db:migrate

rails g controller FyrbInterfaces index show create update destroy

rails g serializer FyrbInterface


## Configure the routing of the model
# config\routes.rb
## Configure the relationship of the model and copy to the serializer
## Configure the fields to be output in the serializer
## Copy the controller method and modify the model name

## You can delete the created model, controller, serializer by the following methods
rails destroy model <ModelName>
rails destroy controller <ControllerName>s
rails destroy serializer <SerializerName>

########################################################

## Operation after generating model, controller, serializer
# config\routes.rb
# # Custom routing
# app\serializers
# # Custom relationship, filter field
# app\models
# # Customize routing, add, delete, modify and check

```

## 20201125
```bash
rails g model FyrbUtilityFunction imports:string input_parameters:string output_parameters:string return_results:string languages:string support_platforms:string used_counts:integer instructions:text naming_conventions:string fyrb_user:references
rails g controller FyrbUtilityFunctions index show create update destroy
rails g serializer FyrbUtilityFunction

rails g model FyrbCodeSnippet source_lines:text development_tools:string resolved_exceptions:text module_templates:text languages:string support_platforms:string used_counts:integer instructions:text naming_conventions:string fyrb_user:references
rails g controller FyrbCodeSnippets index show create update destroy
rails g serializer FyrbCodeSnippet

rails g model FyrbSurprisingLink site_names:string site_categories:string site_descriptions:text site_highlights:text  fyrb_user:references
rails g controller FyrbSurprisingLinks index show create update destroy
rails g serializer FyrbSurprisingLink

rails g model FyrbGraphicSymbol uppercase_letters:string lowercase_letters:string english_phonetics:string chinese_phonetics:string meanings:text alphabetical:integer origins:string dialects:string themes:string types:string paths:text styles:text is_vowel:integer is_consonant:integer is_unvoiced:integer is_voiced:integer is_accent:integer fyrb_user:references
rails g controller FyrbGraphicSymbols index show create update destroy
rails g serializer FyrbGraphicSymbol

rails g model FyrbObjectInspector object_name:string framework:string description:text languages:text properties:text methods:text events:text used_counts:integer fyrb_user:references
rails g controller FyrbObjectInspectors index show create update destroy
rails g serializer FyrbObjectInspector

rails g model FyrbRelatedMethod interface_name:string interface_type:string description:text languages:text parameters:text keywords:text return_types:text used_counts:integer fyrb_user:references fyrb_object_inspector:references
rails g controller FyrbRelatedMethods index show create update destroy
rails g serializer FyrbRelatedMethod

rails db:migrate
```

## 
```bash
## The data model can be migrated after the code is pushed
heroku login
heroku run rails db:migrate --app damp-plateau-39759

```

## Local development environment
```bash
# rails db:migrate RAILS_ENV=development
yarn build
yarn start

```
