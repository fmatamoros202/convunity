Hello to all interested in Convunity! Convunity = Conversation + Community

Thank you for taking the time to explore this video chat application.

Convunity is a place where conversation meets community.

If you want to check-out the application without installing anything follow this link:
https://convunity.netlify.app/ (Convunity's Alpha version is deployed.)

    If you want to test the video chat functionality on the deployed Alpha version do as follows:

    - Sign in as "guest".
    - The password is the tricky part: The password is "ytinuvnoc" but spelled backwards.

    Once you have access on your browser, open a new browser tab or share the login information with a friend.

    Voila! You should be video chatting with someone by now.

If you want to run this app on your computer follow along.

- Clone this repo to a local directory on your computer. This means you're taking all the code I created to your personal computer. Be nice with it.

- Next, we need to install all the libraries and packages I used to make this app work.
  - We will devide this step in two sections:
    - Client
    - Server
      (I was nice enough to create different directories for both so targeting them will be a walk in the park.)

* Client packages and dependencies (cd into the client folder)

  - In your terminal, run "npm install" (this will download all the packages needed to run the app. This packages are outlined in the package.json file under dependencies)

  - Because we are using peerJS and we need to initiate a server on the client-side, we need to do this by doing the following:
    - On terminal , run "peerjs --port`choose port` (e.g. peerjs --port '5001')"
      This will create a client side server on the peerjs server.

* Server packages and dependencies (cd into the server folder)

  - In your terminal, run "npm install" (this will download all the packages needed to run the app. This packages are outlined in the package.json file under dependencies)

After installing all the packages and dependencies, your ready to run the app.

Important Note: This configuration has the server deployed to heroku and working on heroku. If you want to use your local server, you need to change that in the Chat2.jsx file. - Go to Chat2.jsx and change line 25 from "const socket = io('https://convunity.herokuapp.com')" to "const socket = io('http://localhost:'PORT')" where 'PORT' is the port you have in server.js.

Now you are ready to use this video chat app at your convenience.
