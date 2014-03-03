# Cat Feeder App

This may or may not be overkill for a frontend designed to
manage and relay signals to a spark core whose sole purpose
is to feed cats.

![](http://i.imgur.com/qVvSKWS.jpg)

## How to set up

### Clone the repo

```$ git clone https://github.com/bgrimes/cat-feeder.git```

### Install grunt-cli

```$ npm install grunt-cli```

### Run npm intall

```$ npm install```

## Compiling the Ember app

The app structure is located in ```./app```. Compile using ```$ grunt app```

## Asset management with bower

There is a grunt task that will take all the bower assets and
copy them to the ```public/assets/{js,css}/vendor``` folder. To
run this task use ```$ grunt bower:dist```.

_Note: when running
the rake server (see below), in the development environment
all unminified files in the ```public/assets``` directory are
left alone (files not matching glob ```public/assets/**/*.min.{css,js}```)
whereas in production environment all of these files are removed
when using the ```config.ru``` file._

### Adding a bower packge

1. Add the package to ```./bower.json``` and run ```bower update``` as per usual
2. Open ```./tasks/bower.js``` and add the files
you want copied using the given css/js/dirs configs.
3. Run ```$ grunt bower:dist```
4. Include the file in ```./views/index.erb```

### Heroku deploy

```
$ heroku create
$ git push heroku master
```

Productions runs off of a postgres database, to set that up you must add a heroku
plan to your heroku app:

```
$ heroku addons:add heroku-postgresql
```

To properly set up the database URL you will need to promote the postgres db using
the ```HEROKU_POSTGRES_{COLOR}_URL``` (which you can find grom ```heroku config```)
and promote:

```
$ heroku pg:promote HEROKU_POSTGRES_{COLOR}_URL
```

To do gmail authentication you will need to set up the ```GOOGLE_SECRET```
and ```GOOGLE_CLIENT_ID``` environment vars on heroku.

To set up the db on heroku run ```heroku run rake db:schema:load```

### Authentication

For email authentication, I set up the AuthUser model to constrain
logins to a whitelist of emails which is currently just an environment
variable ```AUTH_EMAILS``` that is a csv of acceptable emails.

```
$ heroku config:add AUTH_EMAILS="jsmith@example.com,asmith@example.com"
```

### Local development




feed_job
  id
  type
  amount
  last_run
  created_at
  updated_at
