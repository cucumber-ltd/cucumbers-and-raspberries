# cucumbers-and-raspberries

At Christmas, my lovely wife asked for a radio that had "one button". She likes simplicity.

So, inspired by [this guide](http://www.suppertime.co.uk/blogmywiki/piradio/) my 8-year old and I got a Raspberry Pi and a couple of other bits, and built this:

![img_7352](https://user-images.githubusercontent.com/19260/39708765-f376e226-520f-11e8-87c0-7004b16a6678.jpg)

The radio boots up pre-loaded with a handful of our favourite stations. Pressing the button switches to the next station.

Now it turns out the code for this radio is quite interesting, if we use it as an excuse to play with the [ports and adapters](http://alistair.cockburn.us/Hexagonal+architecture) pattern for structuring your application.

The code for the radio has two ports:

- a _Player_
- a _User Interface_

A _Player_ has two responsiblities:

- play a station URL
- stop playing anything

A _User Interface_ has one responsiblity:

- tell the radio that the user wants to change station

The radio app itself sits in the middle, telling the player what to do when the user presses the button.

Anyway, let's get set up first

Installation
------------

1. [Install node](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
2. Install `mpd` and client:

```sudo apt-get install mpd mpc`

3. Start the radio
```npm start```

How the app is tested
---------------------

We start on the outside with a few [Cucumber Scenarios](./features/playing_stations.feature)

You can run these like this:

`yarn run cucumber-js`

Then each of the adapters is tested through a contract. You can run all the contract tests with:

`yarn mocha lib/**/*.spec.js`

You'll notice that some of these tests involve manual intervention. Why is that?
