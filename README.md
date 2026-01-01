A postgresql database managed by supabase is used to manage the encrypted messages.
A nosql database called Mongo DB for managing the user list.


The POST /api/auth/register endpoint allows a new user to be registered and returns their database ID (Mongo).

The POST /api/messages/encrypt endpoint allows an authenticated user to send the message and the desired encryption type.

The POST /api/messages/decrypt endpoint allows an authenticated user to send the message ID they want to decrypt. Decryption is performed by the server based on the algorithm defined for that message.


The GET /api/users/me endpoint allows an authenticated user to get their name and the number of messages they have encrypted through the system.


The GET /api/messages endpoint
allows an authenticated user to receive all messages they have encrypted



To run the server, install the libraries using the command
npm i
set the environment variables
SUPABASE_URL
SUPABASE_KEY
MONGO_URI
PORT
and run the server with the command npm start