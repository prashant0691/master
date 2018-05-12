Prerequisite

####1.  Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally

``` 
$ install Node
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower


####2. Setup
```
$ cd `project-directory`
```
$ bower install

```
$ npm install 

```
To Serve run below command :
$ grunt serve OR npm start

```
To make bundle run below Command : 
$ npm run dist 


**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

```sh
sudo chown -R [user name] ~/.config
```
